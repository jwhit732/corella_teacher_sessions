import { Message, StudentSession } from '@/lib/types';
import { formatTime } from '@/lib/analytics';

interface QuestionsListProps {
  questions: Message[];
  students: StudentSession[];
}

export default function QuestionsList({ questions, students }: QuestionsListProps) {
  const getStudentName = (studentId?: string): string => {
    if (!studentId) return 'Unknown';
    const student = students.find(s => s.id === studentId);
    return student?.displayName || 'Unknown';
  };

  // Sort questions by timestamp (most recent first)
  const sortedQuestions = [...questions].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Questions Asked</h2>
        <span className="text-sm text-gray-500">{questions.length} total</span>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {sortedQuestions.map((question) => (
          <div
            key={question.id}
            className="p-3 bg-amber-50 border border-amber-200 rounded-lg"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-gray-800 text-sm flex-1">{question.content}</p>
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
              <span className="font-medium text-amber-700">
                {getStudentName(question.studentId)}
              </span>
              <span>•</span>
              <span>{formatTime(question.timestamp)}</span>
            </div>
          </div>
        ))}
      </div>

      {questions.length === 0 && (
        <p className="text-gray-500 text-sm text-center py-8">
          No questions have been asked yet.
        </p>
      )}
    </div>
  );
}
