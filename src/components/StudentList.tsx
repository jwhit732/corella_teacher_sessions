import { StudentSession } from '@/lib/types';
import { calculateTimeSpent, formatDuration, formatTime } from '@/lib/analytics';

interface StudentListProps {
  students: StudentSession[];
}

export default function StudentList({ students }: StudentListProps) {
  const onlineCount = students.filter(s => s.isOnline).length;
  const sortedStudents = [...students].sort((a, b) => {
    // Online first, then by join time
    if (a.isOnline !== b.isOnline) return a.isOnline ? -1 : 1;
    return new Date(a.joinedAt).getTime() - new Date(b.joinedAt).getTime();
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Students</h2>
        <span className="text-sm text-gray-500">
          {students.length} total, {onlineCount} online
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-2 font-medium text-gray-500">Status</th>
              <th className="text-left py-2 px-2 font-medium text-gray-500">Name</th>
              <th className="text-left py-2 px-2 font-medium text-gray-500">Joined</th>
              <th className="text-left py-2 px-2 font-medium text-gray-500">Time</th>
              <th className="text-left py-2 px-2 font-medium text-gray-500">Messages</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.map((student) => (
              <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-2">
                  <span
                    className={`inline-block w-2.5 h-2.5 rounded-full ${
                      student.isOnline ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                    title={student.isOnline ? 'Online' : 'Offline'}
                  />
                </td>
                <td className="py-3 px-2">
                  <div>
                    <div className="font-medium text-gray-900">{student.displayName}</div>
                    <div className="text-xs text-gray-400">{student.email}</div>
                  </div>
                </td>
                <td className="py-3 px-2 text-gray-600">
                  {formatTime(student.joinedAt)}
                </td>
                <td className="py-3 px-2 text-gray-600">
                  {formatDuration(calculateTimeSpent(student))}
                </td>
                <td className="py-3 px-2">
                  <span className="inline-flex items-center justify-center min-w-[24px] px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    {student.messageCount}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {students.length === 0 && (
        <p className="text-gray-500 text-sm text-center py-8">
          No students have joined this session yet.
        </p>
      )}
    </div>
  );
}
