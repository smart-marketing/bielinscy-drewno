"use client";
import { useState, useEffect } from "react";
import { Calculator, Package, ShoppingCart, Phone, Trash2, Plus, X } from "lucide-react";
import Image from "next/image";

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

interface CartItem {
  id: string;
  productName: string;
  dimension: string;
  pricePerUnit: number;
  unit: string;
  quantity: number;
}

export default function KalkulatorPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    loadCart();
  }, []);

  useEffect(() => {
    saveCart();
  }, [cart]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/pricing");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadCart = () => {
    const saved = localStorage.getItem("calc-cart");
    if (saved) setCart(JSON.parse(saved));
  };

  const saveCart = () => {
    localStorage.setItem("calc-cart", JSON.stringify(cart));
  };

  const addToCart = () => {
    if (!selectedProduct || !selectedSize || !quantity) return;

    setCart([...cart, {
      id: Date.now().toString(),
      productName: selectedProduct.name,
      dimension: selectedSize.dimension,
      pricePerUnit: selectedSize.price,
      unit: selectedSize.unit,
      quantity
    }]);

    setSelectedProduct(null);
    setSelectedSize(null);
    setQuantity(1);
  };

  const total = cart.reduce((sum, item) => sum + item.pricePerUnit * item.quantity, 0);
  const vat = total * 0.23;

  const sendWhatsApp = () => {
    if (cart.length === 0) return;
    const items = cart.map((item, i) =>
      `${i+1}. ${item.productName} ${item.dimension}\n   ${item.quantity} ${item.unit} × ${item.pricePerUnit.toFixed(2)} zł = ${(item.pricePerUnit * item.quantity).toFixed(2)} zł`
    ).join("\n\n");
    const msg = `Dzień dobry! Wycena:\n\n${items}\n\nNetto: ${total.toFixed(2)} zł\nVAT 23%: ${vat.toFixed(2)} zł\nBrutto: ${(total+vat).toFixed(2)} zł`;
    window.open(`https://wa.me/48537593186?text=${encodeURIComponent(msg)}`, "_blank");
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin w-12 h-12 border-4 border-brand-green border-t-transparent rounded-full" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-brand-green to-brand-green/90 text-white py-16 md:py-20">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">Wycena Online</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Kalkulator Drewna
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Dodaj produkty i oblicz wartość zamówienia
          </p>
        </div>
      </section>

      <main className="container-wide py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="font-display text-xl font-bold text-brand-brown mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-brand-green" />
                Dodaj produkt
              </h2>

              {/* Produkt */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-brand-brown mb-2">
                  Rodzaj drewna
                </label>
                <select
                  value={selectedProduct?.id || ""}
                  onChange={(e) => {
                    setSelectedProduct(products.find(p => p.id === +e.target.value) || null);
                    setSelectedSize(null);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green bg-white"
                >
                  <option value="">-- Wybierz produkt --</option>
                  {products.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              {/* Rozmiar (z jednostką) */}
              {selectedProduct && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-brand-brown mb-2">
                    Rozmiar
                  </label>
                  <select
                    value={selectedSize?.dimension || ""}
                    onChange={(e) => setSelectedSize(selectedProduct.sizes.find(s => s.dimension === e.target.value) || null)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green bg-white"
                  >
                    <option value="">-- Wybierz rozmiar --</option>
                    {selectedProduct.sizes.filter(s => s.available).map((s, i) => (
                      <option key={i} value={s.dimension}>
                        {s.dimension} - {s.price.toFixed(2)} zł/{s.unit}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Ilość (pokazuje jednostkę) */}
              {selectedSize && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-brand-brown mb-2">
                    Ilość ({selectedSize.unit})
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    value={quantity}
                    onChange={(e) => setQuantity(parseFloat(e.target.value) || 1)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green"
                  />
                </div>
              )}

              {/* Dodaj */}
              {selectedSize && (
                <button
                  onClick={addToCart}
                  className="w-full bg-brand-green text-white py-3 px-6 rounded-xl font-bold hover:bg-brand-green/90 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                  Dodaj do wyceny
                </button>
              )}
            </div>

            {/* Koszyk */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-display text-xl font-bold text-brand-brown flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-brand-green" />
                  Koszyk ({cart.length})
                </h2>
                {cart.length > 0 && (
                  <button onClick={() => setCart([])} className="text-red-600 text-sm hover:text-red-700 flex items-center gap-1">
                    <Trash2 className="w-4 h-4" />
                    Wyczyść
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Package className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p>Brak produktów</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {cart.map((item, idx) => (
                    <div key={item.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                      <div className="flex-1">
                        <p className="font-semibold text-brand-brown text-sm">
                          {idx + 1}. {item.productName}
                        </p>
                        <p className="text-xs text-gray-600">{item.dimension}</p>
                        <p className="text-xs text-gray-700 mt-1">
                          {item.quantity} {item.unit} × {item.pricePerUnit.toFixed(2)} zł
                        </p>
                      </div>
                      <div className="text-right flex items-center gap-2">
                        <p className="font-bold text-brand-brown">
                          {(item.pricePerUnit * item.quantity).toFixed(2)} zł
                        </p>
                        <button onClick={() => setCart(cart.filter(c => c.id !== item.id))} className="text-red-600 hover:text-red-700 p-1">
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Podsumowanie */}
          <div>
            <div className="bg-gradient-to-br from-brand-green to-brand-green/90 rounded-2xl shadow-2xl p-6 text-white sticky top-8">
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                Podsumowanie
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-white/80 text-lg">Dodaj produkty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex justify-between">
                      <span className="text-white/80">Produktów:</span>
                      <span className="font-semibold">{cart.length}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-lg">
                      <span className="text-white/90">Netto:</span>
                      <span className="font-bold">{total.toFixed(2)} zł</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">VAT 23%:</span>
                      <span className="font-semibold">{vat.toFixed(2)} zł</span>
                    </div>
                    <div className="h-px bg-white/30" />
                    <div className="flex justify-between text-2xl font-bold">
                      <span>RAZEM:</span>
                      <span>{(total + vat).toFixed(2)} zł</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-sm text-white/80">💡 Transport obliczamy indywidualnie</p>
                  </div>

                  <div className="space-y-3 pt-4">
                    <button onClick={sendWhatsApp} className="w-full bg-white text-brand-green py-4 px-6 rounded-xl font-bold hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2">
                      <Image src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={24} height={24} className="brightness-0" />
                      Wyślij WhatsApp
                    </button>
                    <a href="tel:+48537593186" className="block w-full bg-brand-brown text-white py-4 px-6 rounded-xl font-bold hover:bg-brand-brown/90 text-center">
                      <Phone className="w-5 h-5 inline mr-2" />
                      537 593 186
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}