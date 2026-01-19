"use client";
import { useState, useEffect } from "react";
import {
  Calculator,
  Package,
  Ruler,
  ShoppingCart,
  Phone,
  MessageCircle,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
  sizes: any[];
}

export default function KalkulatorPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/pricing");
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductChange = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product || null);
    setSelectedSize(null);
    setQuantity(1);
  };

  const handleSizeChange = (sizeId: string) => {
    const size = selectedProduct?.sizes.find((s) => s.id === sizeId);
    setSelectedSize(size || null);
  };

  const calculateTotal = () => {
    if (!selectedSize || !quantity) return 0;
    return selectedSize.pricing.pricePerUnit * quantity;
  };

  const calculateVolume = () => {
    if (!selectedSize || !quantity) return 0;
    return selectedSize.pricing.volumeM3 * quantity;
  };

  const calculateVAT = () => {
    return calculateTotal() * 0.23;
  };

  const calculateGross = () => {
    return calculateTotal() + calculateVAT();
  };

  const sendWhatsAppQuery = () => {
    const message = `Dzień dobry! Chciałbym zapytać o:\n\nProdukt: ${selectedProduct?.name}\nRozmiar: ${selectedSize?.display}\nIlość: ${quantity} szt\nSzacunkowa wartość: ${calculateGross().toFixed(2)} zł brutto\n\nProszę o kontakt.`;
    const url = `https://wa.me/48537593186?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

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
      <section className="bg-gradient-to-br from-brand-green to-brand-green/90 text-white py-20 md:py-28">
        <div className="container-wide text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">Wycena Online</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Kalkulator Drewna
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Oblicz orientacyjną cenę Twojego zamówienia w kilka sekund
          </p>
        </div>
      </section>

      <main className="container-wide py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Kalkulator - Lewa strona */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
              <h2 className="font-display text-2xl font-bold text-brand-brown mb-6 flex items-center gap-2">
                <Package className="w-6 h-6 text-brand-green" />
                Wybierz produkt
              </h2>

              {/* Step 1: Product */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-brown mb-2">
                  1. Rodzaj drewna
                </label>
                <select
                  value={selectedProduct?.id || ""}
                  onChange={(e) => handleProductChange(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent text-brand-brown"
                >
                  <option value="">-- Wybierz produkt --</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 2: Size */}
              {selectedProduct && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-brand-brown mb-2 flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-brand-green" />
                    2. Rozmiar
                  </label>
                  <select
                    value={selectedSize?.id || ""}
                    onChange={(e) => handleSizeChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent text-brand-brown"
                  >
                    <option value="">-- Wybierz rozmiar --</option>
                    {selectedProduct.sizes.map((size) => (
                      <option key={size.id} value={size.id}>
                        {size.display} - {size.pricing.pricePerUnit.toFixed(2)} zł/szt
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Step 3: Quantity */}
              {selectedSize && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-brand-brown mb-2 flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-brand-green" />
                    3. Ilość (sztuk)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent text-brand-brown"
                    placeholder="Podaj ilość..."
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    ≈ {calculateVolume().toFixed(3)} m³
                  </p>
                </div>
              )}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-brand-brown mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                To wycena orientacyjna
              </h3>
              <p className="text-sm text-brand-brown/70">
                Ostateczna cena może się różnić w zależności od dostępności, ilości i dodatkowych
                usług (np. transport, impregnacja). Zadzwoń po dokładną wycenę!
              </p>
            </div>
          </div>

          {/* Wynik - Prawa strona */}
          <div>
            <div className="bg-gradient-to-br from-brand-green to-brand-green/90 rounded-2xl shadow-2xl p-6 md:p-8 text-white sticky top-8">
              <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-2">
                <Calculator className="w-8 h-8" />
                Twoja wycena
              </h2>

              {!selectedSize ? (
                <div className="text-center py-12">
                  <Package className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-white/80 text-lg">
                    Wybierz produkt, rozmiar i ilość, aby zobaczyć wycenę
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Product Info */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/80">Produkt:</span>
                        <span className="font-semibold">{selectedProduct?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Rozmiar:</span>
                        <span className="font-semibold">{selectedSize.display}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Ilość:</span>
                        <span className="font-semibold">{quantity} szt</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/80">Objętość:</span>
                        <span className="font-semibold">{calculateVolume().toFixed(3)} m³</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-lg">
                      <span className="text-white/90">Cena netto:</span>
                      <span className="font-bold">{calculateTotal().toFixed(2)} zł</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">VAT 23%:</span>
                      <span className="font-semibold">{calculateVAT().toFixed(2)} zł</span>
                    </div>
                    <div className="h-px bg-white/30" />
                    <div className="flex justify-between text-2xl font-bold">
                      <span>Razem:</span>
                      <span>{calculateGross().toFixed(2)} zł</span>
                    </div>
                  </div>

                  {/* Transport Info */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-sm text-white/80 mb-2">
                      💡 Transport obliczamy indywidualnie
                    </p>
                    <p className="text-xs text-white/70">
                      Dla zamówień powyżej 5000 zł - darmowa dostawa w regionie!
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
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          <h3 className="font-display text-2xl font-bold text-brand-brown mb-4">
            Potrzebujesz pomocy z wycena?
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
