import { Session } from './types';

export const DEFAULT_SESSION: Session = {
  id: 'lotf-001',
  title: 'Lord of the Flies — Socratic Theme Tutor',
  learningIntention: 'Identify and explain key themes using evidence from the text (scene + quote + reasoning).',
  studentContext: `**Task brief:**
You're building a theme explanation. Pick one theme and support it with one strong moment from the novel.

**Success criteria:**
• I can state a theme as a general idea (not a plot summary).
• I can choose a relevant scene and (if possible) a quote.
• I can explain how the evidence supports the theme ("This shows… because…").
• I can consider an alternative interpretation or counterexample.

**Role + rules for this chat:**
• This is a guided session: expect questions.
• I won't write your paragraph for you; I'll help you build it.
• Bring evidence: characters, symbols, moments, quotes.
• If you're stuck, say what chapter/scene you're up to and what you think it might mean.`,
  teacherPrompt: 'You are a Socratic tutor helping students understand Lord of the Flies themes. Ask probing questions, request evidence, and scaffold from claim → evidence → explanation. Keep responses short, structured, and student-owned. Avoid giving complete answers; provide hints and vocabulary. Use themes like civilization vs savagery, fear, power, morality, groupthink, and symbolism (conch, fire, beast).',
  pin: '123456',
  createdAt: new Date().toISOString(),
};

// In-memory session storage
const sessions: Session[] = [DEFAULT_SESSION];

export function getSessionByPin(pin: string): Session | undefined {
  return sessions.find(session => session.pin === pin);
}

export function getSessionById(id: string): Session | undefined {
  return sessions.find(session => session.id === id);
}

export function getAllSessions(): Session[] {
  return sessions;
}
