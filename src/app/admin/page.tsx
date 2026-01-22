"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  LogOut, 
  Plus, 
  Edit2, 
  Trash2, 
  Save, 
  X,
  Package,
  AlertCircle,
  CheckCircle
} from "lucide-react";

interface ProductSize {
  dimension: string;
  price: number;
  stock: number;
  available: boolean;
}

interface Product {
  id: number;
  name: string;
  sizes: ProductSize[];
}

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [editingProduct, setEditingProduct] = useState<number | null>(null);
  const [newProductName, setNewProductName] = useState("");
  const [showAddProduct, setShowAddProduct] = useState(false);

  // Load products
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await fetch('/api/pricing');
      const data = await res.json();
      setProducts(data.products || []);
      setLoading(false);
    } catch (error) {
      console.error('Error loading products:', error);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const saveProducts = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/pricing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products }),
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Zapisano zmiany!' });
        setTimeout(() => setMessage(null), 3000);
      } else {
        throw new Error('Failed to save');
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Błąd zapisu!' });
      setTimeout(() => setMessage(null), 3000);
    } finally {
      setSaving(false);
    }
  };

  const updatePrice = (productId: number, sizeIndex: number, newPrice: number) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? {
            ...p,
            sizes: p.sizes.map((s, i) => 
              i === sizeIndex ? { ...s, price: newPrice } : s
            )
          }
        : p
    ));
  };

  const updateStock = (productId: number, sizeIndex: number, newStock: number) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? {
            ...p,
            sizes: p.sizes.map((s, i) => 
              i === sizeIndex ? { ...s, stock: newStock } : s
            )
          }
        : p
    ));
  };

  const toggleAvailability = (productId: number, sizeIndex: number) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? {
            ...p,
            sizes: p.sizes.map((s, i) => 
              i === sizeIndex ? { ...s, available: !s.available } : s
            )
          }
        : p
    ));
  };

  const addProduct = () => {
    if (!newProductName.trim()) return;
    
    const newProduct: Product = {
      id: Math.max(...products.map(p => p.id), 0) + 1,
      name: newProductName,
      sizes: []
    };
    
    setProducts([...products, newProduct]);
    setNewProductName("");
    setShowAddProduct(false);
    setEditingProduct(newProduct.id);
  };

  const deleteProduct = (productId: number) => {
    if (confirm('Czy na pewno usunąć ten produkt?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const addSize = (productId: number) => {
    const dimension = prompt('Podaj wymiar (np. 25x150x4000):');
    if (!dimension) return;

    setProducts(products.map(p => 
      p.id === productId 
        ? {
            ...p,
            sizes: [...p.sizes, {
              dimension,
              price: 0,
              stock: 0,
              available: true
            }]
          }
        : p
    ));
  };

  const deleteSize = (productId: number, sizeIndex: number) => {
    if (confirm('Czy na pewno usunąć ten rozmiar?')) {
      setProducts(products.map(p => 
        p.id === productId 
          ? {
              ...p,
              sizes: p.sizes.filter((_, i) => i !== sizeIndex)
            }
          : p
      ));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green mx-auto mb-4"></div>
          <p className="text-gray-600">Ładowanie...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-brand-brown">
                Panel Administracyjny
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Zarządzanie produktami i cenami
              </p>
            </div>
            <div className="flex items-center gap-4 pt-30">
              <button
                onClick={saveProducts}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2.5 bg-brand-green text-white rounded-lg hover:bg-brand-green/90 transition-colors disabled:opacity-50 font-semibold shadow-lg"
              >
                <Save className="w-4 h-4" />
                {saving ? 'Zapisywanie...' : 'Zapisz zmiany'}
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Wyloguj
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Message */}
      {message && (
        <div className={`fixed top-20 right-4 z-50 ${
          message.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
        } border px-6 py-4 rounded-lg shadow-lg flex items-center gap-3`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-semibold">{message.text}</span>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Add Product Button */}
        <div className="mb-6">
          {!showAddProduct ? (
            <button
              onClick={() => setShowAddProduct(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <Plus className="w-5 h-5" />
              Dodaj nowy produkt
            </button>
          ) : (
            <div className="bg-white rounded-lg border-2 border-blue-200 p-4 flex items-center gap-4">
              <input
                type="text"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
                placeholder="Nazwa produktu..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
                onKeyPress={(e) => e.key === 'Enter' && addProduct()}
              />
              <button
                onClick={addProduct}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Dodaj
              </button>
              <button
                onClick={() => {
                  setShowAddProduct(false);
                  setNewProductName("");
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Anuluj
              </button>
            </div>
          )}
        </div>

        {/* Products List */}
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Product Header */}
              <div className="bg-gradient-to-r from-brand-green to-brand-green/90 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Package className="w-6 h-6 text-white" />
                  <h2 className="text-xl font-bold text-white">{product.name}</h2>
                  <span className="text-white/80 text-sm">
                    ({product.sizes.length} rozmiarów)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => addSize(product.id)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors text-sm font-semibold"
                  >
                    <Plus className="w-4 h-4" />
                    Dodaj rozmiar
                  </button>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-white rounded-lg transition-colors text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sizes Table */}
              {product.sizes.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Wymiar</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Cena (zł)</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Stan magazynowy</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Dostępność</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Akcje</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {product.sizes.map((size, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {size.dimension}
                          </td>
                          <td className="px-6 py-4">
                            <input
                              type="number"
                              step="0.01"
                              value={size.price}
                              onChange={(e) => updatePrice(product.id, index, parseFloat(e.target.value) || 0)}
                              className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <input
                              type="number"
                              value={size.stock}
                              onChange={(e) => updateStock(product.id, index, parseInt(e.target.value) || 0)}
                              className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                            />
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => toggleAvailability(product.id, index)}
                              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                                size.available
                                  ? 'bg-green-100 text-green-800 hover:bg-green-200'
                                  : 'bg-red-100 text-red-800 hover:bg-red-200'
                              }`}
                            >
                              {size.available ? 'Dostępne' : 'Niedostępne'}
                            </button>
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => deleteSize(product.id, index)}
                              className="text-red-600 hover:text-red-800 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="px-6 py-12 text-center text-gray-500">
                  <Package className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                  <p>Brak rozmiarów. Kliknij "Dodaj rozmiar" aby dodać pierwszy.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Brak produktów
            </h3>
            <p className="text-gray-600 mb-6">
              Kliknij "Dodaj nowy produkt" aby rozpocząć
            </p>
          </div>
        )}
      </main>
    </div>
  );
}