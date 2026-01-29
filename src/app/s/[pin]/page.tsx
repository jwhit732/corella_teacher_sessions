'use client';

import { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getSessionByPin } from '@/lib/sessions';
import { generateResponse } from '@/lib/socratic-engine';
import { Message, Session } from '@/lib/types';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import StudentContextPanel from '@/components/StudentContextPanel';

export default function ManagedSessionPage() {
  const params = useParams();
  const router = useRouter();
  const pin = params.pin as string;

  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const foundSession = getSessionByPin(pin);
    if (!foundSession) {
      router.push('/join');
      return;
    }

    setSession(foundSession);

    // Load messages from localStorage
    const storageKey = `session-${foundSession.id}-messages`;
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        setMessages(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to parse stored messages:', e);
      }
    }

    setIsLoading(false);
  }, [pin, router]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!session) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}-user`,
      sessionId: session.id,
      role: 'student',
      content,
      timestamp: new Date().toISOString(),
    };

    const aiResponse = generateResponse(content, session);
    const assistantMessage: Message = {
      id: `msg-${Date.now()}-assistant`,
      sessionId: session.id,
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date().toISOString(),
    };

    const newMessages = [...messages, userMessage, assistantMessage];
    setMessages(newMessages);

    // Save to localStorage
    const storageKey = `session-${session.id}-messages`;
    localStorage.setItem(storageKey, JSON.stringify(newMessages));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading session...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Green Header */}
      <header className="bg-green-600 text-white px-6 py-4 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-green-700 rounded-full text-xs font-semibold">
              Managed Session
            </span>
          </div>
          <h1 className="text-2xl font-bold">{session.title}</h1>
          <p className="text-green-100 mt-1">{session.learningIntention}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-6">
        <StudentContextPanel context={session.studentContext} />

        {/* Chat Messages */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="h-[500px] overflow-y-auto p-6">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-400">
                <div className="text-center">
                  <p className="text-lg mb-2">Start the conversation</p>
                  <p className="text-sm">
                    Share your thoughts or ask a question to begin
                  </p>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>
        </div>

        {/* Chat Input */}
        <ChatInput onSend={handleSendMessage} />
      </main>
    </div>
  );
}
