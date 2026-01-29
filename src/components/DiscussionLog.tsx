'use client';

import { useState } from 'react';
import { Message, StudentSession } from '@/lib/types';
import { formatTime } from '@/lib/analytics';

interface DiscussionLogProps {
  messages: Message[];
  students: StudentSession[];
}

type FilterType = 'all' | 'students' | 'questions';

export default function DiscussionLog({ messages, students }: DiscussionLogProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getStudentName = (studentId?: string): string => {
    if (!studentId) return 'AI Tutor';
    const student = students.find(s => s.id === studentId);
    return student?.displayName || 'Unknown';
  };

  // Filter messages based on current filter and search
  const filteredMessages = messages.filter((msg) => {
    // Apply type filter
    if (filter === 'students' && msg.role !== 'student') return false;
    if (filter === 'questions' && !(msg.role === 'student' && msg.content.trim().endsWith('?'))) return false;

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const content = msg.content.toLowerCase();
      const studentName = getStudentName(msg.studentId).toLowerCase();
      return content.includes(query) || studentName.includes(query);
    }

    return true;
  });

  // Sort by timestamp (oldest first for chronological reading)
  const sortedMessages = [...filteredMessages].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  const studentMessageCount = messages.filter(m => m.role === 'student').length;
  const aiMessageCount = messages.filter(m => m.role === 'assistant').length;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Discussion Log</h2>
        <span className="text-sm text-gray-500">
          {studentMessageCount} student / {aiMessageCount} AI messages
        </span>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('students')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filter === 'students'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Students Only
          </button>
          <button
            onClick={() => setFilter('questions')}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              filter === 'questions'
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Questions
          </button>
        </div>
        <input
          type="text"
          placeholder="Search messages..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* Messages */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {sortedMessages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-lg ${
              msg.role === 'student'
                ? 'bg-blue-50 border border-blue-200'
                : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
                  msg.role === 'student'
                    ? 'bg-blue-200 text-blue-800'
                    : 'bg-gray-300 text-gray-700'
                }`}
              >
                {msg.role === 'student'
                  ? getStudentName(msg.studentId).charAt(0)
                  : 'AI'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-sm font-medium ${
                      msg.role === 'student' ? 'text-blue-800' : 'text-gray-700'
                    }`}
                  >
                    {msg.role === 'student' ? getStudentName(msg.studentId) : 'AI Tutor'}
                  </span>
                  <span className="text-xs text-gray-400">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{msg.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedMessages.length === 0 && (
        <p className="text-gray-500 text-sm text-center py-8">
          {messages.length === 0
            ? 'No messages in this session yet.'
            : 'No messages match your filter.'}
        </p>
      )}
    </div>
  );
}
