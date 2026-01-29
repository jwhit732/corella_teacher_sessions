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
  studentId?: string;  // For attributing messages to specific students
}

export interface StudentSession {
  id: string;              // MS account ID
  displayName: string;     // e.g., "Emma S."
  email: string;           // School email
  joinedAt: string;        // ISO timestamp
  lastActiveAt: string;    // Updated on each message
  isOnline: boolean;       // Currently active
  messageCount: number;    // Total messages sent
}

export interface SessionAnalytics {
  sessionId: string;
  students: StudentSession[];
  messages: Message[];     // All messages with student attribution
}
