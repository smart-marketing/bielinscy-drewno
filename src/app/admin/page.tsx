"use client";
import { useRouter } from "next/navigation";
import { LogOut, DollarSign, Package } from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-brand-brown">
              Panel Administracyjny
            </h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Wyloguj się
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Stats Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center">
                <Package className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-brown">Produkty</h3>
                <p className="text-sm text-gray-600">Zarządzaj cenami</p>
              </div>
            </div>
            <a
              href="/kalkulator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-green font-semibold hover:gap-3 transition-all"
            >
              <span>Przejdź do kalkulatora</span>
              <span>→</span>
            </a>
          </div>

          {/* Stats Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-brown">Cennik</h3>
                <p className="text-sm text-gray-600">Edycja cen produktów</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">Funkcja wkrótce dostępna</p>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-xl font-bold text-brand-brown mb-4">
            Witaj w panelu administracyjnym!
          </h2>
          <p className="text-gray-600 mb-4">
            Jesteś zalogowany jako administrator. Możesz zarządzać cenami produktów i ustawieniami sklepu.
          </p>
          <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-4">
            <p className="text-sm text-brand-brown">
              <strong>Status:</strong> System logowania działa poprawnie ✅
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}