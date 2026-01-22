"use client";
import { useState, useEffect } from "react";
import {
  Calculator,
  Package,
  ShoppingCart,
  Phone,
  Trash2,
  Plus,
  Edit2,
  X,
} from "lucide-react";
import Image from "next/image";

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

interface CartItem {
  id: string;
  productId: number;
  productName: string;
  dimension: string;
  pricePerUnit: number;
  quantity: number;
}

export default function KalkulatorPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
    loadCartFromStorage();
  }, []);

  useEffect(() => {
    saveCartToStorage();
  }, [cart]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/pricing");
      const data = await response.json();
      console.log('📦 Loaded products:', data.products);
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadCartFromStorage = () => {
    const saved = localStorage.getItem("calculator-cart");
    if (saved) {
      setCart(JSON.parse(saved));
    }
  };

  const saveCartToStorage = () => {
    localStorage.setItem("calculator-cart", JSON.stringify(cart));
  };

  const handleProductChange = (productId: string) => {
    console.log('🔍 Selecting product:', productId);
    const product = products.find((p) => p.id === parseInt(productId));
    console.log('✅ Found product:', product);
    setSelectedProduct(product || null);
    setSelectedSize(null);
    setQuantity(1);
  };

  const handleSizeChange = (dimension: string) => {
    console.log('🔍 Selecting size:', dimension);
    const size = selectedProduct?.sizes.find((s) => s.dimension === dimension);
    console.log('✅ Found size:', size);
    setSelectedSize(size || null);
  };

  const addToCart = () => {
    if (!selectedProduct || !selectedSize || !quantity) {
      alert('Wybierz produkt, rozmiar i ilość');
      return;
    }

    const newItem: CartItem = {
      id: Date.now().toString(),
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      dimension: selectedSize.dimension,
      pricePerUnit: selectedSize.price,
      quantity: quantity,
    };

    console.log('➕ Adding to cart:', newItem);
    setCart([...cart, newItem]);
    
    // Reset form
    setSelectedProduct(null);
    setSelectedSize(null);
    setQuantity(1);
  };

  const removeFromCart = (itemId: string) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateCartItem = (itemId: string, newQuantity: number) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
    setEditingItemId(null);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("calculator-cart");
  };

  const calculateItemTotal = (item: CartItem) => {
    return item.pricePerUnit * item.quantity;
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + calculateItemTotal(item), 0);
  };

  const calculateVAT = () => {
    return calculateSubtotal() * 0.23;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateVAT();
  };

  const sendWhatsAppQuery = () => {
    if (cart.length === 0) {
      alert('Koszyk jest pusty!');
      return;
    }

    const itemsList = cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.productName}\n   ${item.dimension}\n   ${item.quantity} szt × ${item.pricePerUnit.toFixed(2)} zł = ${calculateItemTotal(item).toFixed(2)} zł`
      )
      .join("\n\n");

    const message = `Dzień dobry! Chciałbym zapytać o:\n\n${itemsList}\n\nPodsumowanie:\nWartość produktów: ${calculateSubtotal().toFixed(2)} zł netto\nVAT 23%: ${calculateVAT().toFixed(2)} zł\nRAZEM: ${calculateTotal().toFixed(2)} zł brutto\n\nProszę o kontakt.`;
    
    const url = `https://wa.me/48537593186?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Filter only available sizes
  const availableSizes = selectedProduct?.sizes.filter(s => s.available) || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-green border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-brand-brown">Ładowanie kalkulatora...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
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
            Dodaj produkty do koszyka i oblicz całkowitą wartość zamówienia
          </p>
        </div>
      </section>

      <main className="container-wide py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Lewa strona - Dodawanie produktu */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h2 className="font-display text-xl font-bold text-brand-brown mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-brand-green" />
                Dodaj produkt do wyceny
              </h2>

              {/* Product Select */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-brand-brown mb-2">
                  Rodzaj drewna
                </label>
                <select
                  value={selectedProduct?.id || ""}
                  onChange={(e) => handleProductChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent bg-white cursor-pointer"
                >
                  <option value="">-- Wybierz produkt --</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Size Select */}
              {selectedProduct && availableSizes.length > 0 && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-brand-brown mb-2">
                    Rozmiar
                  </label>
                  <select
                    value={selectedSize?.dimension || ""}
                    onChange={(e) => handleSizeChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent bg-white cursor-pointer"
                  >
                    <option value="">-- Wybierz rozmiar --</option>
                    {availableSizes.map((size, idx) => (
                      <option key={idx} value={size.dimension}>
                        {size.dimension} - {size.price.toFixed(2)} zł/szt
                        {size.stock > 0 && ` (dostępne: ${size.stock})`}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Quantity */}
              {selectedSize && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-brand-brown mb-2">
                    Ilość (sztuk)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  />
                </div>
              )}

              {/* Add Button */}
              {selectedSize && (
                <button
                  onClick={addToCart}
                  className="w-full bg-brand-green text-white py-3 px-6 rounded-xl font-bold hover:bg-brand-green/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Plus className="w-5 h-5" />
                  Dodaj do wyceny
                </button>
              )}
            </div>

            {/* Koszyk - Lista produktów */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-bold text-brand-brown flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-brand-green" />
                  Produkty w wycenie ({cart.length})
                </h2>
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
                  >
                    <Trash2 className="w-4 h-4" />
                    Wyczyść
                  </button>
                )}
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Package className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p>Brak produktów w wycenie</p>
                  <p className="text-sm">Dodaj produkty powyżej</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <p className="font-semibold text-brand-brown">
                            {index + 1}. {item.productName}
                          </p>
                          <p className="text-sm text-gray-600">{item.dimension}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-700 p-1"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      {editingItemId === item.id ? (
                        <div className="flex gap-2">
                          <input
                            type="number"
                            min="1"
                            defaultValue={item.quantity}
                            onBlur={(e) =>
                              updateCartItem(item.id, parseInt(e.target.value) || 1)
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                updateCartItem(
                                  item.id,
                                  parseInt(e.currentTarget.value) || 1
                                );
                              }
                            }}
                            className="flex-1 px-3 py-1 border rounded"
                            autoFocus
                          />
                          <button
                            onClick={() => setEditingItemId(null)}
                            className="text-sm text-gray-600"
                          >
                            Anuluj
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-700">
                            {item.quantity} szt × {item.pricePerUnit.toFixed(2)} zł
                          </p>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingItemId(item.id)}
                              className="text-brand-green hover:text-brand-green/80 p-1"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <p className="font-bold text-brand-brown">
                              {calculateItemTotal(item).toFixed(2)} zł
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Prawa strona - Podsumowanie */}
          <div>
            <div className="bg-gradient-to-br from-brand-green to-brand-green/90 rounded-2xl shadow-2xl p-6 text-white sticky top-8">
              <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6" />
                Podsumowanie
              </h2>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-white/80 text-lg">
                    Dodaj produkty do wyceny
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Stats */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/80">Liczba produktów:</span>
                        <span className="font-semibold">{cart.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Łączna ilość:</span>
                        <span className="font-semibold">
                          {cart.reduce((sum, item) => sum + item.quantity, 0)} szt
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-lg">
                      <span className="text-white/90">Wartość netto:</span>
                      <span className="font-bold">
                        {calculateSubtotal().toFixed(2)} zł
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">VAT 23%:</span>
                      <span className="font-semibold">
                        {calculateVAT().toFixed(2)} zł
                      </span>
                    </div>
                    <div className="h-px bg-white/30" />
                    <div className="flex justify-between text-2xl font-bold">
                      <span>RAZEM:</span>
                      <span>{calculateTotal().toFixed(2)} zł</span>
                    </div>
                  </div>

                  {/* Transport Info */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-sm text-white/80 mb-2">
                      💡 Zapytaj o cenę transportu
                    </p>
                    <p className="text-xs text-white/70">
                      Wyceny transportu dokonujemy indywidualnie
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4">
                    <button
                      onClick={sendWhatsAppQuery}
                      className="w-full bg-white text-brand-green py-4 px-6 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <Image
                        src="/whatsapp-svgrepo-com.svg"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="brightness-0"
                      />
                      Wyślij zapytanie WhatsApp
                    </button>

                    <a
                      href="tel:+48537593186"
                      className="w-full bg-brand-brown text-white py-4 px-6 rounded-xl font-bold hover:bg-brand-brown/90 transition-all flex items-center justify-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Zadzwoń: 537 593 186
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
          <h3 className="font-display text-xl md:text-2xl font-bold text-brand-brown mb-3">
            Potrzebujesz pomocy z wyceną?
          </h3>
          <p className="text-brand-brown/70 mb-6">
            Nasi specjaliści chętnie pomogą Ci dobrać odpowiedni materiał i obliczyć dokładną
            ilość potrzebną do Twojego projektu. Dzwoń, pisz - doradzimy za darmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+48537593186" className="btn-primary text-center">
              <Phone className="w-5 h-5 inline mr-2" />
              Zadzwoń: 537 593 186
            </a>
            <a href="https://wa.me/48537593186" className="btn-whatsapp text-center">
              <Image
                src="/whatsapp-svgrepo-com.svg"
                alt="WhatsApp"
                width={20}
                height={20}
                className="brightness-0 invert inline mr-2"
              />
              WhatsApp
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}