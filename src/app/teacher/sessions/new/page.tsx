'use client';

import { useRouter } from 'next/navigation';
import { DEFAULT_SESSION } from '@/lib/sessions';

export default function NewSessionPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo: just redirect to the pre-seeded session
    router.push(`/teacher/sessions/${DEFAULT_SESSION.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Create New Session</h1>
          <p className="text-gray-600 mt-1">Set up a guided tutoring session</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Session Title
              </label>
              <input
                type="text"
                id="title"
                defaultValue={DEFAULT_SESSION.title}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <label htmlFor="learningIntention" className="block text-sm font-medium text-gray-700 mb-2">
                Learning Intention
              </label>
              <input
                type="text"
                id="learningIntention"
                defaultValue={DEFAULT_SESSION.learningIntention}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div>
              <label htmlFor="studentContext" className="block text-sm font-medium text-gray-700 mb-2">
                Student Context
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Include: Task brief, Success criteria, Role + rules
              </p>
              <textarea
                id="studentContext"
                rows={12}
                defaultValue={DEFAULT_SESSION.studentContext}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 font-mono text-sm"
              />
            </div>

            <div>
              <label htmlFor="teacherPrompt" className="block text-sm font-medium text-gray-700 mb-2">
                Teacher Prompt
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Instructions for the AI tutor (session overlay prompt)
              </p>
              <textarea
                id="teacherPrompt"
                rows={6}
                defaultValue={DEFAULT_SESSION.teacherPrompt}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
              />
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Create Session
            </button>
            <button
              type="button"
              onClick={() => router.push('/teacher')}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
