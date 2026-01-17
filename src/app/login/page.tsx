'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push('/');
        router.refresh();
      } else {
        setError('Onjuist wachtwoord');
      }
    } catch (err) {
      setError('Er is iets misgegaan');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">P2P</h1>
          <p className="text-foreground/70">Concept Website</p>
        </div>

        <div className="bg-surface-dark border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Toegang vereist</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground/80 mb-2">
                Wachtwoord
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-white/20 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                placeholder="Voer wachtwoord in"
                required
                autoFocus
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm">{error}</div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-accent-blue text-background font-semibold rounded-lg hover:bg-accent-blue/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-surface-dark"
            >
              {isLoading ? 'Bezig...' : 'Toegang krijgen'}
            </button>
          </form>
        </div>

        <p className="text-center text-foreground/50 text-sm mt-6">
          Dit is een concept website. Neem contact op voor toegang.
        </p>
      </div>
    </div>
  );
}
