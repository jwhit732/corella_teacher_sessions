import { StudentSession, SessionAnalytics, Message } from './types';

// Helper to create timestamps relative to now
function minutesAgo(minutes: number): string {
  const date = new Date();
  date.setMinutes(date.getMinutes() - minutes);
  return date.toISOString();
}

// Dummy student data for demo
const DUMMY_STUDENTS: StudentSession[] = [
  {
    id: 'ms-001',
    displayName: 'Emma S.',
    email: 'emma.smith@school.edu.au',
    joinedAt: minutesAgo(28),
    lastActiveAt: minutesAgo(2),
    isOnline: true,
    messageCount: 7,
  },
  {
    id: 'ms-002',
    displayName: 'Liam T.',
    email: 'liam.taylor@school.edu.au',
    joinedAt: minutesAgo(25),
    lastActiveAt: minutesAgo(5),
    isOnline: true,
    messageCount: 4,
  },
  {
    id: 'ms-003',
    displayName: 'Sophie R.',
    email: 'sophie.robinson@school.edu.au',
    joinedAt: minutesAgo(30),
    lastActiveAt: minutesAgo(12),
    isOnline: false,
    messageCount: 9,
  },
  {
    id: 'ms-004',
    displayName: 'Noah W.',
    email: 'noah.wilson@school.edu.au',
    joinedAt: minutesAgo(18),
    lastActiveAt: minutesAgo(8),
    isOnline: false,
    messageCount: 3,
  },
  {
    id: 'ms-005',
    displayName: 'Olivia M.',
    email: 'olivia.martin@school.edu.au',
    joinedAt: minutesAgo(15),
    lastActiveAt: minutesAgo(1),
    isOnline: true,
    messageCount: 5,
  },
];

// Dummy discussion messages for demo
const DUMMY_MESSAGES: Message[] = [
  {
    id: 'msg-001',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'I think the conch shell is a really important symbol in the book.',
    timestamp: minutesAgo(28),
    studentId: 'ms-001',
  },
  {
    id: 'msg-002',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Good observation, Emma! The conch is certainly significant. What do you think it represents? Can you point to a specific scene where its importance is shown?',
    timestamp: minutesAgo(27),
  },
  {
    id: 'msg-003',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'I\'m not sure where to start with the themes. There are so many things happening.',
    timestamp: minutesAgo(25),
    studentId: 'ms-002',
  },
  {
    id: 'msg-004',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'That\'s okay, Liam! Let\'s narrow it down. What character or moment from the book stood out to you most? We can work from there.',
    timestamp: minutesAgo(24),
  },
  {
    id: 'msg-005',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'When Ralph holds the conch, everyone listens to him. It\'s like it gives him authority?',
    timestamp: minutesAgo(23),
    studentId: 'ms-001',
  },
  {
    id: 'msg-006',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Exactly! You\'re onto something there. So if the conch gives authority, what theme might that connect to? Think about what happens when the conch is ignored or broken.',
    timestamp: minutesAgo(22),
  },
  {
    id: 'msg-007',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'Why does Jack hate Ralph so much? Is it just about being leader?',
    timestamp: minutesAgo(21),
    studentId: 'ms-003',
  },
  {
    id: 'msg-008',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Great question, Sophie! Think about what Ralph and Jack each prioritize. Ralph focuses on rescue and the fire, while Jack focuses on... what? What does this conflict reveal about different types of leadership?',
    timestamp: minutesAgo(20),
  },
  {
    id: 'msg-009',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'Jack wants to hunt and have fun. He doesn\'t care about getting rescued.',
    timestamp: minutesAgo(19),
    studentId: 'ms-003',
  },
  {
    id: 'msg-010',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Yes! So we have civilization (Ralph\'s rules, the fire) versus... what would you call Jack\'s approach? Can you find a quote that shows this contrast?',
    timestamp: minutesAgo(18),
  },
  {
    id: 'msg-011',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'What does the beast actually represent? Is it real?',
    timestamp: minutesAgo(17),
    studentId: 'ms-004',
  },
  {
    id: 'msg-012',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Interesting question, Noah! Simon has a unique perspective on the beast. Do you remember what he says about it? His view might help us understand what Golding is really saying.',
    timestamp: minutesAgo(16),
  },
  {
    id: 'msg-013',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'I think the theme is about civilization vs savagery. When the conch breaks, it\'s like civilization is destroyed.',
    timestamp: minutesAgo(15),
    studentId: 'ms-001',
  },
  {
    id: 'msg-014',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Excellent connection, Emma! That\'s a strong claim. Now, can you build on this? What specific scene shows civilization being destroyed, and how does the broken conch symbolize this?',
    timestamp: minutesAgo(14),
  },
  {
    id: 'msg-015',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'Hi, I just joined. What are we supposed to be doing?',
    timestamp: minutesAgo(13),
    studentId: 'ms-005',
  },
  {
    id: 'msg-016',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Welcome, Olivia! We\'re exploring themes in Lord of the Flies. Your task is to identify one theme and support it with evidence from the text. What theme interests you? Or is there a character or scene that stood out?',
    timestamp: minutesAgo(12),
  },
  {
    id: 'msg-017',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'Sophie mentioned savagery - Jack represents that. He paints his face and becomes like a different person.',
    timestamp: minutesAgo(11),
    studentId: 'ms-003',
  },
  {
    id: 'msg-018',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Great observation about the face paint! Why do you think the mask changes Jack? What does it allow him to do that he couldn\'t do before?',
    timestamp: minutesAgo(10),
  },
  {
    id: 'msg-019',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'I\'m interested in Piggy. He seems like the voice of reason but no one listens to him.',
    timestamp: minutesAgo(9),
    studentId: 'ms-005',
  },
  {
    id: 'msg-020',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Piggy is a fascinating character! Why do you think the other boys don\'t listen to him? What does this say about how the group values intelligence versus physical strength?',
    timestamp: minutesAgo(8),
  },
  {
    id: 'msg-021',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'The fire is another symbol right? It means hope for rescue?',
    timestamp: minutesAgo(7),
    studentId: 'ms-002',
  },
  {
    id: 'msg-022',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Yes, the fire is definitely symbolic! You\'ve identified one meaning. But the fire also appears in a destructive way at the end. How does Golding use the fire to show both hope and destruction?',
    timestamp: minutesAgo(6),
  },
  {
    id: 'msg-023',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'Maybe the mask lets Jack hide from himself? Like he doesn\'t have to feel guilty.',
    timestamp: minutesAgo(5),
    studentId: 'ms-003',
  },
  {
    id: 'msg-024',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'That\'s a sophisticated insight, Sophie! The idea of the mask removing guilt or identity is powerful. Can you find a quote where Golding describes this transformation? This would strengthen your argument.',
    timestamp: minutesAgo(4),
  },
  {
    id: 'msg-025',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'Is Simon meant to be like a religious figure? He goes off alone and has visions.',
    timestamp: minutesAgo(3),
    studentId: 'ms-005',
  },
  {
    id: 'msg-026',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'You\'ve noticed something many readers pick up on! Simon does have Christ-like qualities. What happens to him, and what might Golding be saying about innocence or goodness in a savage environment?',
    timestamp: minutesAgo(2),
  },
  {
    id: 'msg-027',
    sessionId: 'lotf-001',
    role: 'student',
    content: 'Piggy\'s glasses are used to start the fire. Does that mean his intelligence is useful but also dangerous?',
    timestamp: minutesAgo(1),
    studentId: 'ms-001',
  },
  {
    id: 'msg-028',
    sessionId: 'lotf-001',
    role: 'assistant',
    content: 'Brilliant connection, Emma! The glasses as a tool for both rescue (signal fire) and destruction (the final fire) is a great example of symbolism. How could you phrase this as a theme statement?',
    timestamp: minutesAgo(0),
  },
];

// Get analytics for a session
export function getSessionAnalytics(sessionId: string): SessionAnalytics {
  return {
    sessionId,
    students: DUMMY_STUDENTS,
    messages: DUMMY_MESSAGES.filter(m => m.sessionId === sessionId),
  };
}

// Get student by ID
export function getStudentById(studentId: string): StudentSession | undefined {
  return DUMMY_STUDENTS.find(s => s.id === studentId);
}

// Get questions from messages (messages ending with ?)
export function getQuestions(messages: Message[]): Message[] {
  return messages.filter(m => m.role === 'student' && m.content.trim().endsWith('?'));
}

// Calculate time spent for a student (in minutes)
export function calculateTimeSpent(student: StudentSession): number {
  const joined = new Date(student.joinedAt).getTime();
  const lastActive = new Date(student.lastActiveAt).getTime();
  return Math.round((lastActive - joined) / 60000);
}

// Get online students count
export function getOnlineCount(students: StudentSession[]): number {
  return students.filter(s => s.isOnline).length;
}

// Format timestamp for display
export function formatTime(isoString: string): string {
  return new Date(isoString).toLocaleTimeString('en-AU', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

// Format duration for display
export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}
