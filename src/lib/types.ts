export interface Session {
  id: string;
  title: string;
  learningIntention: string;
  studentContext: string;
  teacherPrompt: string;
  pin: string;
  createdAt: string;
}

export interface Message {
  id: string;
  sessionId: string;
  role: 'student' | 'assistant';
  content: string;
  timestamp: string;
}
