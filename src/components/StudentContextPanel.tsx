'use client';

import { useState } from 'react';

interface StudentContextPanelProps {
  context: string;
}

export default function StudentContextPanel({ context }: StudentContextPanelProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-6 border border-green-200 rounded-lg bg-green-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-green-100 transition-colors rounded-t-lg"
      >
        <span className="font-semibold text-green-900">Session Guidelines</span>
        <svg
          className={`w-5 h-5 text-green-700 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-sm text-gray-700 border-t border-green-200 whitespace-pre-wrap">
          {context}
        </div>
      )}
    </div>
  );
}
