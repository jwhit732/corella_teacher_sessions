import { Session } from './types';

interface ResponseTemplate {
  keywords: string[];
  responses: string[];
}

const templates: ResponseTemplate[] = [
  {
    keywords: ['conch'],
    responses: [
      "You're exploring the conch's symbolic meaning—great start. What does the conch represent when Ralph first finds it versus later in the novel? When do the boys stop listening to it? What changed in them, or in their society? Think about a specific scene where the conch's power shifts. What's your next step: choose an early scene and a late scene to compare.",
      "The conch is tied to order and democracy. But you mentioned rules not mattering—when exactly does that shift happen? Can you point to a moment where someone defies the conch? What does that defiance reveal about power on the island? Next: find the scene and note who breaks the rule and why.",
      "Interesting claim about the conch. Does it lose meaning all at once, or gradually? Think about Ralph's reaction when the conch is ignored. What does his desperation tell us about civilization? Your task: locate a quote where Ralph appeals to the conch and track whether it works.",
      "The conch connects to democracy and shared authority. But authority only works if people consent to it. When do the boys stop consenting? Is it when Jack leaves, or earlier? Consider: what makes authority legitimate? Next step: compare an early assembly to a late one.",
      "You're onto something about rules and symbols. The conch is both—a physical object and an idea. Can an idea die? What happens to order when the conch is destroyed? Find that scene and explain what Golding is saying about civilization through that moment.",
      "Good observation. The conch gives structure, but structure needs enforcement. Who enforces the conch's authority early on? Who challenges it? Think about the contrast between Ralph and Jack's leadership styles. Next: pick one assembly scene and analyze the power dynamics.",
    ],
  },
  {
    keywords: ['piggy'],
    responses: [
      "Piggy represents rational thinking and science. But why doesn't his intelligence save him or earn respect? What does that say about the value of reason in a survival situation? Think about specific moments where Piggy is right but ignored. Next: find one scene where his advice is dismissed and explain the consequences.",
      "You're looking at Piggy—good instinct. He's marginalized from the start. Why? Is it his appearance, his asthma, his class background? What does the novel suggest about who gets heard and who gets silenced? Your task: compare how the boys treat Piggy versus how they treat Ralph or Jack.",
      "Piggy is the voice of civilization and intellect. Yet he's physically vulnerable and socially powerless. What's the symbolism there? Does Golding suggest that reason alone can't survive without strength or charisma? Find a quote where Piggy makes a logical point that's overruled.",
      "Interesting focus on Piggy. His glasses are crucial—they make fire. Who controls the glasses, and what does that tell us about power and knowledge? Track the glasses across the novel. When do they get stolen, broken? What happens to Piggy's agency when he can't see?",
      "Piggy is rational, but also rigid. Does his devotion to rules help or hurt him? Think about the moment he appeals to 'what's right' even as he's in danger. What is Golding saying about idealism versus pragmatism? Next step: analyze his final scene.",
      "You've identified Piggy as key. Consider his relationship with Ralph—Ralph needs Piggy's ideas but won't publicly defend him. What does that tell us about complicity and moral courage? Find a moment where Ralph benefits from Piggy but doesn't protect him.",
    ],
  },
  {
    keywords: ['jack'],
    responses: [
      "Jack embodies the pull toward savagery and authoritarian power. But he's also charismatic and confident—traits the boys admire. What does that say about how power is gained? Compare Jack's early frustration to his later dominance. What changed, and how did he make it happen?",
      "You're analyzing Jack's character. He offers the boys freedom from rules, but also fear and violence. Is that a fair trade? Think about what Jack provides that Ralph doesn't. Why do the boys choose Jack's tribe? Next: find a scene where a boy switches allegiance and explain why.",
      "Jack represents the instinct for power and control. But he doesn't start as a savage—he can't kill the pig at first. What's the turning point? Track Jack's transformation and identify the moment he crosses a line. What does that scene reveal about human nature?",
      "Good focus on Jack. He uses fear as a tool—the beast, the hunt, the rituals. How does he manipulate the boys' fear to consolidate power? Compare his leadership style to Ralph's. What does Golding suggest about democracy versus tyranny? Find a quote where Jack uses fear strategically.",
      "Jack vs. Ralph is the central conflict: civilization vs. savagery, order vs. chaos. But is it that simple? Does Jack offer something the boys genuinely need, like food and protection? Or is it just manipulation? Your task: argue both sides using evidence, then decide which is stronger.",
      "You're onto Jack's role as antagonist. But he's also a mirror—he shows what all the boys are capable of. Who joins his tribe, and who resists? What separates those groups? Think about the choirboys, the hunters, the littluns. Next: analyze one character's choice to join or resist Jack.",
    ],
  },
  {
    keywords: ['simon'],
    responses: [
      "Simon is the moral center and the mystic. He understands the beast is internal, not external. But why is he killed? What does that say about truth and mob mentality? Find the scene where Simon tries to tell the truth and explain what stops him from being heard.",
      "You've identified Simon—he's crucial but often overlooked. He's kind, perceptive, and connected to nature. What does his death represent? Is it the death of morality, of innocence, of hope? Your task: analyze the symbolism of the beast conversation and Simon's murder.",
      "Simon sees clearly: 'Maybe it's only us.' That's the novel's thesis in one line. But the boys kill him anyway. Why? What does that moment reveal about groupthink, fear, and denial? Next step: describe the murder scene and explain the boys' psychological state.",
      "Good instinct focusing on Simon. He's Golding's stand-in for innate goodness and spiritual insight. But goodness isn't enough to survive. What does Golding suggest about the vulnerability of morality in a lawless state? Compare Simon's fate to Piggy's—what's similar, what's different?",
      "Simon talks to the Lord of the Flies (the pig's head). That's the novel's most allegorical moment. What does the head represent? What does it tell Simon? Is it real or imagined? Either way, what truth does Simon learn? Your task: interpret that scene symbolically.",
      "You're analyzing Simon's role. He's Christ-like: he helps the weak, seeks truth, and is sacrificed. Is Golding making a religious point, or a broader one about how societies treat prophets and truth-tellers? Find evidence for your interpretation.",
    ],
  },
  {
    keywords: ['beast'],
    responses: [
      "The beast is the novel's central symbol. But it's not real—it's fear and projection. What are the boys really afraid of? Each other? Themselves? The unknown? Track how the idea of the beast evolves and who uses it for power. Next: identify what the beast represents at different points in the novel.",
      "You're exploring the beast. Key question: when do the boys first mention it, and when does it become 'real' to them? What role does imagination and fear play? Compare the littluns' beast to Jack's beast to Simon's beast. Whose version wins, and why?",
      "The beast is fear made external. But Simon discovers the truth: 'maybe it's only us.' What does that mean? Is the beast human nature, or something more specific? Your task: argue what the beast symbolizes using at least two scenes as evidence.",
      "Good focus on the beast. It's a unifying fear but also a dividing force—Ralph denies it, Jack exploits it, Simon understands it. What does each leader's relationship to the beast reveal about their worldview? Next step: compare their three perspectives with quotes.",
      "The beast doesn't exist, but the boys' belief in it has real consequences. They kill Simon thinking he's the beast. What does that irony reveal? How does fear create the very violence it's meant to protect against? Analyze the murder scene through this lens.",
      "You're onto the beast as symbol. Consider the 'Lord of the Flies' itself—the pig's head. It's covered in flies, rotting, speaking to Simon. What does that image represent? Why is the novel named after it? Connect the beast, the head, and the boys' inner darkness.",
    ],
  },
  {
    keywords: ['fire'],
    responses: [
      "Fire has dual meaning: rescue (signal fire) and destruction (forest fire). Which fire gets maintained, and which goes out of control? What does that tell us about the boys' priorities and discipline? Your task: track the signal fire across the novel and note when and why it fails.",
      "You're analyzing fire—smart. Ralph obsesses over the signal fire, but Jack's hunters let it go out. Why? What's more important to them: rescue or immediate gratification (meat)? Find the scene where they miss the ship and explain the conflict it reveals.",
      "The fire is hope, but it requires work and cooperation. When the fire goes out, what does that symbolize? When it burns the island, what does that symbolize? Compare the controlled signal fire to the chaotic forest fire. What's Golding saying about civilization?",
      "Good instinct with fire. Piggy's glasses create it—knowledge and reason spark civilization. But the glasses are stolen and broken. What happens to fire (and hope) when knowledge is taken by force? Trace the glasses and fire together as linked symbols.",
      "Fire represents the boys' connection to the adult world and rescue. But they're ambivalent—do they really want to be rescued? Some seem to forget about it entirely. What does that say about the appeal of freedom versus responsibility? Find evidence of boys losing interest in rescue.",
      "You're exploring fire as symbol. Consider the irony of the ending: the fire meant to kill Ralph is what finally brings rescue. What does that tell us about unintended consequences, or about violence as the only language the adults understand? Analyze the novel's final fire.",
    ],
  },
];

const defaultResponses = [
  "You're starting to explore the novel's themes. Let's narrow your focus: which symbol or character are you most interested in? The conch, the beast, the fire, Piggy, Jack, Simon, or something else? Once you choose, think about one specific scene where that element is important. Next step: pick your focus and find the scene.",
  "I can see you're thinking about the novel's bigger meanings. That's the right direction—but let's ground it in evidence. What chapter or moment from the book made you think this? Can you describe the scene and who's involved? Next: locate that scene and tell me what happens.",
  "Good start. Now let's build from claim to evidence. You've made a statement—what scene, symbol, or character action supports it? Think about a specific moment: where are the boys, what do they do or say, and what does it reveal? Your task: find textual evidence.",
  "You're engaging with the text, which is great. But I need you to be more specific. Instead of talking about the whole novel, zoom in: one character, one object, one scene. What's a moment that sticks with you? Why? Next step: describe that moment in detail.",
  "Interesting idea. Let's test it with evidence. If your claim is true, where in the novel does Golding show it most clearly? Think about key scenes: the conch assemblies, the hunts, Simon's death, Piggy's death, the signal fire. Which one supports your point? Choose one and explain how.",
  "You're thinking thematically—that's exactly what we need. But themes need proof. What's your evidence? Remember the success criteria: theme + scene + quote + explanation. Start with the scene: what chapter, what's happening, who's there? Then we'll find the quote.",
];

const refusalResponses = [
  "I understand you want a direct answer, but that's not how this session works. My job is to help you build your own understanding, not to hand you a finished paragraph. Let's refocus: what's one thing you already know or suspect about the theme? Start there, and I'll help you develop it with questions.",
  "I won't write it for you—that's the whole point of a Socratic session. But I will guide you. You're capable of this. Let's break it down: pick one theme, one character or symbol, one scene. Tell me what you've got so far, and I'll ask questions to help you go deeper.",
  "If I just tell you the answer, you won't learn how to analyze literature on your own. The goal isn't to fill a page—it's to think critically. So here's what we'll do: you make a claim, I'll ask you to defend it with evidence. Ready? What's one theme you think is important in Lord of the Flies?",
];

function detectKeywords(message: string): string[] {
  const lowerMessage = message.toLowerCase();
  const detected: string[] = [];

  for (const template of templates) {
    for (const keyword of template.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        detected.push(keyword);
      }
    }
  }

  return detected;
}

function getRandomResponse(responses: string[]): string {
  return responses[Math.floor(Math.random() * responses.length)];
}

export function generateResponse(userMessage: string, session: Session): string {
  // Check for "just tell me" patterns
  const refusalPatterns = [
    'just tell me',
    'give me the answer',
    'what is the answer',
    "just give me",
    'tell me what',
    'what should i write',
  ];

  const lowerMessage = userMessage.toLowerCase();
  for (const pattern of refusalPatterns) {
    if (lowerMessage.includes(pattern)) {
      return getRandomResponse(refusalResponses);
    }
  }

  // Detect keywords
  const keywords = detectKeywords(userMessage);

  if (keywords.length > 0) {
    // Use the first detected keyword's template
    const keyword = keywords[0];
    const template = templates.find(t => t.keywords.includes(keyword));
    if (template) {
      return getRandomResponse(template.responses);
    }
  }

  // Default response for theme discovery
  return getRandomResponse(defaultResponses);
}
