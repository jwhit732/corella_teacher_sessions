'use client';

import { SessionAnalytics } from '@/lib/types';
import { getQuestions, getOnlineCount } from '@/lib/analytics';
import StudentList from './StudentList';
import QuestionsList from './QuestionsList';
import DiscussionLog from './DiscussionLog';

interface AnalyticsDashboardProps {
  analytics: SessionAnalytics;
}

export default function AnalyticsDashboard({ analytics }: AnalyticsDashboardProps) {
  const { students, messages } = analytics;
  const questions = getQuestions(messages);
  const onlineCount = getOnlineCount(students);
  const studentMessages = messages.filter(m => m.role === 'student');

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-gray-900">{students.length}</div>
          <div className="text-sm text-gray-500">Total Students</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-green-600">{onlineCount}</div>
          <div className="text-sm text-gray-500">Currently Online</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-blue-600">{studentMessages.length}</div>
          <div className="text-sm text-gray-500">Student Messages</div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="text-2xl font-bold text-amber-600">{questions.length}</div>
          <div className="text-sm text-gray-500">Questions Asked</div>
        </div>
      </div>

      {/* Student List */}
      <StudentList students={students} />

      {/* Questions */}
      <QuestionsList questions={questions} students={students} />

      {/* Discussion Log */}
      <DiscussionLog messages={messages} students={students} />
    </div>
  );
}
