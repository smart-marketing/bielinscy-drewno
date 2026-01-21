"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, AlertCircle, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('🚀 KROK 1: handleSubmit started');
    
    setError("");
    setLoading(true);
    console.log('🚀 KROK 2: State updated, starting fetch');

    try {
      console.log('🚀 KROK 3: Calling /api/auth/login with:', { username });
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      console.log('🚀 KROK 4: Response received', {
        status: response.status,
        ok: response.ok,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      });

      const data = await response.json();
      console.log('🚀 KROK 5: Data parsed', data);

      if (response.ok && data.success) {
        console.log('✅ KROK 6: Success! Starting redirect...');
        console.log('✅ KROK 6a: Using window.location.href for redirect');
        
        // Use window.location.href for direct navigation
        window.location.href = '/admin';
        
        console.log('✅ KROK 6b: Redirect initiated to /admin');
      } else {
        console.log('❌ KROK 7: Login failed', data.error);
        setError(data.error || "Nieprawidłowe dane logowania");
        setLoading(false);
      }
    } catch (err) {
      console.error('💥 KROK 8: ERROR!', err);
      setError("Błąd połączenia z serwerem");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-green via-brand-green/95 to-brand-green/90 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-brand-green" />
            </div>
            <h1 className="text-3xl font-bold text-brand-brown mb-2">
              Panel Administracyjny
            </h1>
            <p className="text-brand-brown/70">
              Zaloguj się aby zarządzać cenami
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-semibold text-brand-brown mb-2">
                Nazwa użytkownika
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="admin"
                  disabled={loading}
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-brand-brown mb-2">
                Hasło
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  placeholder="••••••••"
                  disabled={loading}
                  autoComplete="current-password"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-green text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-brand-green/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Logowanie...</span>
                </>
              ) : (
                "Zaloguj się"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-brand-brown/60">
              Problemy z logowaniem? Sprawdź Console (F12)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}