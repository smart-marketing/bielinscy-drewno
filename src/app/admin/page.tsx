"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Plus, Trash2, Save, Package } from "lucide-react";

interface ProductSize {
  dimension: string;
  price: number;
  unit: string;
  available: boolean;
}

interface Product {
  id: number;
  name: string;
  sizes: ProductSize[];
}

const UNITS = ["szt", "mb", "m2", "m3"];

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await fetch('/api/pricing');
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
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
        setMessage({ type: 'success', text: 'Zapisano!' });
        setTimeout(() => setMessage(null), 3000);
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Błąd!' });
    } finally {
      setSaving(false);
    }
  };

  const updatePrice = (productId: number, sizeIndex: number, newPrice: number) => {
    setProducts(products.map(p => 
      p.id === productId ? {
        ...p,
        sizes: p.sizes.map((s, i) => i === sizeIndex ? { ...s, price: newPrice } : s)
      } : p
    ));
  };

  const updateUnit = (productId: number, sizeIndex: number, newUnit: string) => {
    setProducts(products.map(p => 
      p.id === productId ? {
        ...p,
        sizes: p.sizes.map((s, i) => i === sizeIndex ? { ...s, unit: newUnit } : s)
      } : p
    ));
  };

  const toggleAvailability = (productId: number, sizeIndex: number) => {
    setProducts(products.map(p => 
      p.id === productId ? {
        ...p,
        sizes: p.sizes.map((s, i) => i === sizeIndex ? { ...s, available: !s.available } : s)
      } : p
    ));
  };

  const addProduct = () => {
    const name = prompt('Nazwa produktu:');
    if (!name) return;
    setProducts([...products, { id: Date.now(), name, sizes: [] }]);
  };

  const deleteProduct = (productId: number) => {
    if (confirm('Usunąć produkt?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const addSize = (productId: number) => {
    const dimension = prompt('Wymiar (np. 25x150x4000):');
    if (!dimension) return;
    setProducts(products.map(p => 
      p.id === productId ? {
        ...p,
        sizes: [...p.sizes, { dimension, price: 0, unit: "szt", available: true }]
      } : p
    ));
  };

  const deleteSize = (productId: number, sizeIndex: number) => {
    if (confirm('Usunąć rozmiar?')) {
      setProducts(products.map(p => 
        p.id === productId ? {
          ...p,
          sizes: p.sizes.filter((_, i) => i !== sizeIndex)
        } : p
      ));
    }
  };

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="animate-spin w-12 h-12 border-4 border-brand-green border-t-transparent rounded-full" /></div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-brand-brown shadow-sm border-b z-10 mt-30 sticky top-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Panel Admin</h1>
              <p className="text-sm text-white">Zarządzanie produktami i cenami</p>
            </div>
            <div className="flex gap-4">
              <button onClick={saveProducts} disabled={saving} className="px-6 py-2.5 bg-brand-green text-white rounded-lg font-bold hover:bg-brand-green/90 disabled:opacity-50 flex items-center gap-2 shadow-lg">
                <Save className="w-4 h-4" />
                {saving ? 'Zapisywanie...' : 'Zapisz'}
              </button>
              <button onClick={handleLogout} className="px-4 py-2 text-white hover:bg-red-50 rounded-lg flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Wyloguj
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Message */}
      {message && (
        <div className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg ${message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          {message.text}
        </div>
      )}

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <button onClick={addProduct} className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Dodaj produkt
        </button>

        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg border overflow-hidden">
              <div className="bg-gradient-to-r from-brand-green to-brand-green/90 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Package className="w-6 h-6 text-white" />
                  <h2 className="text-xl font-bold text-white">{product.name}</h2>
                  <span className="text-white/80 text-sm">({product.sizes.length})</span>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => addSize(product.id)} className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm font-bold">
                    <Plus className="w-4 h-4 inline mr-1" />
                    Rozmiar
                  </button>
                  <button onClick={() => deleteProduct(product.id)} className="px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-white rounded-lg text-sm">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {product.sizes.length > 0 ? (
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Wymiar</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Cena (zł)</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Jednostka</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Dostępność</th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase">Akcje</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {product.sizes.map((size, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium">{size.dimension}</td>
                        <td className="px-6 py-4">
                          <input type="number" step="0.01" value={size.price} onChange={(e) => updatePrice(product.id, index, parseFloat(e.target.value) || 0)} className="w-32 px-3 py-2 border rounded-lg" />
                        </td>
                        <td className="px-6 py-4">
                          <select value={size.unit} onChange={(e) => updateUnit(product.id, index, e.target.value)} className="w-24 px-3 py-2 border rounded-lg">
                            {UNITS.map(u => <option key={u} value={u}>{u}</option>)}
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <button onClick={() => toggleAvailability(product.id, index)} className={`px-4 py-2 rounded-lg font-bold text-sm ${size.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {size.available ? 'Dostępne' : 'Niedostępne'}
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <button onClick={() => deleteSize(product.id, index)} className="text-red-600 hover:text-red-800">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="px-6 py-12 text-center text-gray-500">
                  <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Brak rozmiarów. Kliknij "Rozmiar" aby dodać.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}