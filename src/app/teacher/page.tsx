import Link from 'next/link';
import { getAllSessions } from '@/lib/sessions';

export default function TeacherDashboard() {
  const sessions = getAllSessions();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your tutoring sessions</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Sessions</h2>
          <Link
            href="/teacher/sessions/new"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Create Session
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PIN
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sessions.map((session) => (
                <tr key={session.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {session.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 font-mono">
                    {session.pin}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(session.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-right space-x-3">
                    <Link
                      href={`/teacher/sessions/${session.id}`}
                      className="text-gray-700 hover:text-gray-900 font-medium"
                    >
                      View
                    </Link>
                    <Link
                      href={`/s/${session.pin}`}
                      target="_blank"
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Open Student View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {sessions.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No sessions yet. Create your first session to get started.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
