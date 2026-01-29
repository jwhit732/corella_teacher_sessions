'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function JoinPage() {
  const [pin, setPin] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (pin.trim()) {
      router.push(`/s/${pin.trim()}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Join Session</h1>
        <p className="text-gray-600 mb-6">Enter your session PIN to get started</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="pin" className="block text-sm font-medium text-gray-700 mb-2">
              Session PIN
            </label>
            <input
              type="text"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="123456"
              maxLength={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-center text-2xl tracking-widest"
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={!pin.trim()}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Join Session
          </button>
        </form>
      </div>
    </div>
  );
}
