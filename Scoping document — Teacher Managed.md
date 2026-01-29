Scoping document — Teacher Managed Sessions demo (v2, Lord of the Flies)
0) One-line pitch

A teacher can spin up a Socratic tutoring session for a specific lesson goal (e.g., Lord of the Flies themes), share it to students with a PIN, and students enter a green “Managed Session” that keeps the chat on-task and structured.

1) Goals
Primary demo goal (meeting tomorrow)

Demonstrate the full loop:

Teacher creates a “Socratic tutor” session for Lord of the Flies themes

Teacher shares a PIN

Student joins via PIN and sees a managed-mode UI (green)

Student chats; responses follow Socratic questioning and stay aligned to session intent (mocked)

Success criteria

Teacher session creation feels “Custom GPT-like” but simpler.

Student sees Task Brief + Success Criteria and Role + Rules (your “C”).

The mock tutor consistently:

asks targeted questions

prompts for evidence/quotes

avoids dumping full answers

nudges toward themes (civilization vs savagery, power, fear, morality, groupthink)

2) Demo scope (what you will build)
Teacher features (single persona, no auth)

Create session with 4 required fields:

Title

Learning intention (one-liner)

Student context (Task brief + success criteria + role/rules)

Teacher prompt (the session overlay prompt)

View sessions list (Teacher Dashboard)

View session detail with PIN + “Open student view”

Student features

Enter PIN to join

Green managed session UI + badge

Student context panel always visible/collapsible

Chat with mocked Socratic tutor responses tied to the session config

3) Screens and flows
Teacher side

T1 — Teacher Dashboard (/teacher)

List of sessions: Title | PIN | Created | Buttons (View, Open student)

T2 — Create Session (/teacher/sessions/new)
Form:

Title

Learning intention

Student context (includes: task brief + success criteria + role/rules)

Teacher prompt (large)
Actions: Save → Session detail

T3 — Session Detail (/teacher/sessions/:id)

Shows title, learning intention, student context preview

PIN (6 digits) + “Copy”

“Open student view” button

Student side

S1 — Join (/join)

PIN entry → route to /s/:pin

S2 — Managed Session Chat (/s/:pin)

Green theme + “Managed Session” badge

Header: Title + learning intention

Collapsible panel: Student context (Task brief, Success criteria, Role/rules)

Chat area

4) Data model (demo-level)

Session

id

title

learningIntention

studentContext (single multiline string or structured sections)

teacherPrompt

pin (6 digits)

createdAt

Messages

sessionId

role (student | assistant)

content

timestamp

Storage: in-memory (fastest). Optional local JSON if you want persistence.

5) Mock Socratic engine (the “wow” without a real model)
Response style contract

Every assistant turn follows this structure:

Mirror + steer (1 sentence): reflect what the student said and tie to learning intention

Socratic question (1–2 questions): probing, not telling

Evidence prompt: ask for a scene/character/action/quote

Micro-hint (optional): a nudge toward a theme lens or vocabulary

Next step: tell them exactly what to do next (short)

Rules (keep it controlled)

Never write full essay paragraphs.

Don’t “give the answer”; guide.

Encourage claims + evidence + explanation (“because… which shows…”).

If the student asks “just tell me”, respond with a refusal in teacherly tone + reframe into questions.

Simple deterministic implementation

Detect keywords in student input:

“conch” → civilization/order, authority, democracy

“Piggy” → rationality, marginalized voices

“Jack” → power, savagery, charisma

“Simon” → morality, innate evil, truth

“beast” → fear, projection, hysteria

“fire” → hope/rescue vs neglect/chaos

Choose from 6–10 template responses based on detected lens.

If no keyword, default to a “theme discovery” template.

6) Default session content (pre-fill the form for speed)
Title

Lord of the Flies — Socratic Theme Tutor

Learning intention

Identify and explain key themes using evidence from the text (scene + quote + reasoning).

Student context (C = Task brief + success criteria + role/rules)

Task brief:
You’re building a theme explanation. Pick one theme and support it with one strong moment from the novel.

Success criteria:

I can state a theme as a general idea (not a plot summary).

I can choose a relevant scene and (if possible) a quote.

I can explain how the evidence supports the theme (“This shows… because…”).

I can consider an alternative interpretation or counterexample.

Role + rules for this chat:

This is a guided session: expect questions.

I won’t write your paragraph for you; I’ll help you build it.

Bring evidence: characters, symbols, moments, quotes.

If you’re stuck, say what chapter/scene you’re up to and what you think it might mean.

Teacher prompt (session overlay)

“You are a Socratic tutor helping students understand Lord of the Flies themes. Ask probing questions, request evidence, and scaffold from claim → evidence → explanation. Keep responses short, structured, and student-owned. Avoid giving complete answers; provide hints and vocabulary. Use themes like civilization vs savagery, fear, power, morality, groupthink, and symbolism (conch, fire, beast).”

7) Visual design requirements

Student managed session uses green header + badge: “Managed Session”

Teacher pages neutral/grey admin feel

Student context panel is visually distinct (callout card)

8) Build checklist (what to implement)

 Session create form with pre-filled defaults above

 PIN generation + store session

 Join by PIN

 Green managed chat UI

 Chat message list + input

 Mock response engine using templates + keyword routing

 Teacher session list + session detail page

9) Demo script (30–60 seconds)

Create session (already prefilled) → save → copy PIN

Switch to student view → enter PIN → show green managed UI

Student types: “The conch shows rules don’t matter”

Assistant asks: “What does the conch represent early? When does it lose power? What changed in the boys?”

Close with: “That’s the whole product direction: teacher-authored learning experiences, not one-size-fits-all chat.”

10) Optional polish (if you have time)

“Reset session” button (clears messages)

Teacher “Open student view” auto-fills PIN

Tiny stats on teacher session detail: joins/messages (increment counters)