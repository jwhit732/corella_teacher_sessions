'use client';

import { useParams } from 'next/navigation';
import { getSessionById } from '@/lib/sessions';
import { getSessionAnalytics } from '@/lib/analytics';
import { useState } from 'react';
import Link from 'next/link';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';

export const dynamic = 'force-dynamic';

type TabType = 'details' | 'analytics';

export default function SessionDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const session = getSessionById(id);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('details');

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Session not found</p>
          <Link href="/teacher" className="text-gray-700 hover:text-gray-900 underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const analytics = getSessionAnalytics(session.id);

  const handleCopyPin = () => {
    navigator.clipboard.writeText(session.pin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{session.title}</h1>
              <p className="text-gray-600 mt-1">PIN: <span className="font-mono font-semibold">{session.pin}</span></p>
            </div>
            <Link
              href="/teacher"
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              ← Back to Dashboard
            </Link>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 mt-4 border-b border-gray-200 -mb-px">
            <button
              onClick={() => setActiveTab('details')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'details'
                  ? 'border-gray-800 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'analytics'
                  ? 'border-gray-800 text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {activeTab === 'details' ? (
          <div className="space-y-6">
            {/* PIN Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Session PIN</h2>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-gray-50 border-2 border-gray-300 rounded-lg p-6 text-center">
                  <div className="text-5xl font-bold text-gray-900 tracking-widest font-mono">
                    {session.pin}
                  </div>
                </div>
                <button
                  onClick={handleCopyPin}
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy PIN'}
                </button>
              </div>
            </div>

            {/* Student View Link */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-green-900 mb-2">Student View</h2>
              <p className="text-green-700 text-sm mb-4">
                Open the student experience in a new tab to preview the session
              </p>
              <Link
                href={`/s/${session.pin}`}
                target="_blank"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Open Student View
              </Link>
            </div>

            {/* Session Details */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Learning Intention</h2>
              <p className="text-gray-700">{session.learningIntention}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Student Context</h2>
              <div className="text-gray-700 whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded border border-gray-200">
                {session.studentContext}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Teacher Prompt</h2>
              <div className="text-gray-700 text-sm bg-gray-50 p-4 rounded border border-gray-200">
                {session.teacherPrompt}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Metadata</h2>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-gray-500">Session ID</dt>
                  <dd className="text-gray-900 font-mono">{session.id}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Created</dt>
                  <dd className="text-gray-900">{new Date(session.createdAt).toLocaleString()}</dd>
                </div>
              </dl>
            </div>
          </div>
        ) : (
          <AnalyticsDashboard analytics={analytics} />
        )}
      </main>
    </div>
  );
}
