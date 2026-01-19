"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut,
  Package,
  Edit,
  Search,
  AlertTriangle,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

interface PricingData {
  products: any[];
  lastUpdate: string;
  updatedBy: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [pricing, setPricing] = useState<PricingData | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [editingItem, setEditingItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      const response = await fetch("/api/pricing");
      const data = await response.json();
      setPricing(data);
    } catch (error) {
      console.error("Error fetching pricing:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const handleEditPrice = (product: any, size: any) => {
    setEditingItem({ product, size });
  };

  const handleSavePrice = async (newPrice: number, newStock: number) => {
    if (!editingItem) return;

    try {
      const response = await fetch("/api/pricing/update-price", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: editingItem.product.id,
          sizeId: editingItem.size.id,
          updates: {
            pricing: {
              ...editingItem.size.pricing,
              pricePerUnit: newPrice,
            },
            stock: {
              ...editingItem.size.stock,
              quantity: newStock,
            },
          },
        }),
      });

      if (response.ok) {
        await fetchPricing();
        setEditingItem(null);
      }
    } catch (error) {
      console.error("Error updating price:", error);
    }
  };

  const filteredProducts = pricing?.products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sizes.some((size: any) =>
        size.display.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalProducts = pricing?.products.length || 0;
  const totalSizes =
    pricing?.products.reduce((acc, p) => acc + p.sizes.length, 0) || 0;
  const lowStockItems =
    pricing?.products.reduce(
      (acc, p) =>
        acc +
        p.sizes.filter((s: any) => s.stock.quantity < 100).length,
      0
    ) || 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-green border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-brand-brown">Ładowanie...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-brand-brown">Panel Administracyjny</h1>
            <p className="text-sm text-gray-600">Zarządzanie cenami produktów</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-brand-brown hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Wyloguj
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Produkty</p>
                <p className="text-2xl font-bold text-brand-brown">{totalProducts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Rozmiary</p>
                <p className="text-2xl font-bold text-brand-brown">{totalSizes}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Niski stan</p>
                <p className="text-2xl font-bold text-brand-brown">{lowStockItems}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Aktualizacja</p>
                <p className="text-sm font-semibold text-brand-brown">
                  {pricing?.lastUpdate
                    ? new Date(pricing.lastUpdate).toLocaleDateString("pl-PL")
                    : "---"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Szukaj produktu lub rozmiaru..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
            >
              <option value="all">Wszystkie kategorie</option>
              <option value="konstrukcyjne">Konstrukcyjne</option>
              <option value="zewnetrzne">Zewnętrzne</option>
              <option value="premium">Premium</option>
            </select>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Produkt
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Rozmiar
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Cena
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Stan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Akcje
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredProducts?.map((product) =>
                  product.sizes.map((size: any, sizeIndex: number) => (
                    <tr key={`${product.id}-${size.id}`} className="hover:bg-gray-50">
                      {sizeIndex === 0 && (
                        <td
                          rowSpan={product.sizes.length}
                          className="px-6 py-4 whitespace-nowrap font-medium text-brand-brown"
                        >
                          {product.name}
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {size.display}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-brand-brown">
                        {size.pricing.pricePerUnit.toFixed(2)} zł
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            size.stock.quantity < 100
                              ? "bg-amber-100 text-amber-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {size.stock.quantity < 100 ? (
                            <AlertTriangle className="w-3 h-3" />
                          ) : (
                            <CheckCircle className="w-3 h-3" />
                          )}
                          {size.stock.quantity} szt
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleEditPrice(product, size)}
                          className="inline-flex items-center gap-1 px-3 py-1 text-sm text-brand-green hover:bg-brand-green/10 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          Edytuj
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Edit Modal */}
      {editingItem && (
        <EditPriceModal
          item={editingItem}
          onSave={handleSavePrice}
          onClose={() => setEditingItem(null)}
        />
      )}
    </div>
  );
}

function EditPriceModal({
  item,
  onSave,
  onClose,
}: {
  item: any;
  onSave: (price: number, stock: number) => void;
  onClose: () => void;
}) {
  const [price, setPrice] = useState(item.size.pricing.pricePerUnit);
  const [stock, setStock] = useState(item.size.stock.quantity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(price, stock);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-brand-brown mb-4">Edytuj cenę</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Produkt:</p>
            <p className="font-semibold text-brand-brown">{item.product.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-1">Rozmiar:</p>
            <p className="font-semibold text-brand-brown">{item.size.display}</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-brand-brown mb-2">
              Cena za sztukę (zł)
            </label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-brand-brown mb-2">
              Stan magazynowy (szt)
            </label>
            <input
              type="number"
              value={stock}
              onChange={(e) => setStock(parseInt(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-brand-green text-white py-2 px-4 rounded-lg font-semibold hover:bg-brand-green/90 transition-colors"
            >
              Zapisz
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Anuluj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
