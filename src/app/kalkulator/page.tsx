"use client";
import { useState, useEffect } from "react";
import { Calculator, Package, ShoppingCart, Phone, Trash2, Plus, X, Mail, Printer, Download } from "lucide-react";
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
  const [quantity, setQuantity] = useState<number | "">(1);
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
  if (!selectedProduct || !selectedSize || !quantity || quantity === "") return;

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
    setQuantity("");
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

  const sendEmail = () => {
    if (cart.length === 0) return;
    const items = cart.map((item, i) =>
      `${i+1}. ${item.productName} ${item.dimension} - ${item.quantity} ${item.unit} × ${item.pricePerUnit.toFixed(2)} zł = ${(item.pricePerUnit * item.quantity).toFixed(2)} zł`
    ).join("\n");
    
    const subject = encodeURIComponent("Wycena drewna - Bielińscy Drewno");
    const body = encodeURIComponent(
      `Dzień dobry!\n\nPrzesyłam wycenę z kalkulatora:\n\n${items}\n\nPodsumowanie:\nWartość netto: ${total.toFixed(2)} zł\nVAT 23%: ${vat.toFixed(2)} zł\nRAZEM brutto: ${(total+vat).toFixed(2)} zł\n\nProszę o kontakt.\n\nPozdrawiam`
    );
    
    window.location.href = `mailto:biuro@bielinscy-drewno.pl?subject=${subject}&body=${body}`;
  };

  const printQuote = () => {
    if (cart.length === 0) return;
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Wycena - Bielińscy Drewno</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; }
          .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #2B6650; padding-bottom: 20px; }
          .header h1 { color: #2B6650; margin: 0; font-size: 32px; }
          .header p { color: #4C3B34; margin: 5px 0; }
          .date { text-align: right; color: #666; margin-bottom: 20px; font-size: 14px; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th { background: #2B6650; color: white; padding: 12px; text-align: left; }
          td { padding: 10px; border-bottom: 1px solid #ddd; }
          tr:hover { background: #f9f9f9; }
          .total-section { margin-top: 30px; text-align: right; }
          .total-row { display: flex; justify-content: flex-end; margin: 8px 0; font-size: 16px; }
          .total-row span:first-child { margin-right: 20px; color: #666; }
          .total-row span:last-child { font-weight: bold; min-width: 120px; text-align: right; }
          .grand-total { font-size: 24px; color: #2B6650; padding-top: 10px; border-top: 2px solid #2B6650; margin-top: 10px; }
          .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 14px; color: #666; }
          .footer-row { display: flex; justify-content: space-between; margin: 5px 0; }
          @media print {
            body { padding: 20px; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>BIELIŃSCY DREWNO</h1>
          <p>Wycena produktów</p>
        </div>
        
        <div class="date">
          Data: ${new Date().toLocaleDateString('pl-PL')}
        </div>

        <table>
          <thead>
            <tr>
              <th>Lp.</th>
              <th>Produkt</th>
              <th>Wymiar</th>
              <th>Ilość</th>
              <th>Cena jedn.</th>
              <th>Wartość</th>
            </tr>
          </thead>
          <tbody>
            ${cart.map((item, i) => `
              <tr>
                <td>${i + 1}</td>
                <td>${item.productName}</td>
                <td>${item.dimension}</td>
                <td>${item.quantity} ${item.unit}</td>
                <td>${item.pricePerUnit.toFixed(2)} zł</td>
                <td>${(item.pricePerUnit * item.quantity).toFixed(2)} zł</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div class="total-section">
          <div class="total-row">
            <span>Wartość netto:</span>
            <span>${total.toFixed(2)} zł</span>
          </div>
          <div class="total-row">
            <span>VAT 23%:</span>
            <span>${vat.toFixed(2)} zł</span>
          </div>
          <div class="total-row grand-total">
            <span>RAZEM brutto:</span>
            <span>${(total + vat).toFixed(2)} zł</span>
          </div>
        </div>

        <div class="footer">
          <div class="footer-row">
            <span><strong>Bielińscy Drewno</strong></span>
            <span>Tel: 537 593 186</span>
          </div>
          <div class="footer-row">
            <span>Mirotki, woj. Pomorskie</span>
            <span>www.bielinscy-drewno.pl</span>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            * Ceny orientacyjne. Ostateczna wycena po kontakcie z biurem.<br>
            * Transport obliczany indywidualnie.
          </p>
        </div>

        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
  };

  const downloadPDF = () => {
    // Używa tej samej funkcji co print - przeglądarki mają opcję "Zapisz jako PDF"
    printQuote();
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

              {selectedSize && (
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-brand-brown mb-2">
                    Ilość ({selectedSize.unit})
                  </label>
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={quantity}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "") {
                        setQuantity("");
                      } else {
                        const num = parseFloat(val);
                        if (!isNaN(num) && num > 0) {
                          setQuantity(num);
                        }
                      }
                    }}
                    onFocus={(e) => e.target.select()}
                    placeholder="Wpisz ilość"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green"
                  />
                                  </div>
              )}

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
                    <p className="text-sm text-white/80">💡 Przy większych zamówieniach możliwy rabat i transport gratis!</p>
                  </div>

                  <div className="space-y-3 pt-4">
                    <button onClick={sendWhatsApp} className="w-full bg-white text-brand-green py-4 px-6 rounded-xl font-bold hover:bg-gray-100 shadow-lg flex items-center justify-center gap-2">
                      <Image src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={24} height={24} className="brightness-0" />
                      Napisz do nas na Whatsapp
                    </button>

                    <button onClick={sendEmail} className="w-full bg-brand-brown text-white py-4 px-6 rounded-xl font-bold hover:bg-brand-brown/90 flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      Wyślij Email
                    </button>

                    <button onClick={printQuote} className="w-full bg-white/20 backdrop-blur text-white py-4 px-6 rounded-xl font-bold hover:bg-white/30 border-2 border-white/30 flex items-center justify-center gap-2">
                      <Printer className="w-5 h-5" />
                      Drukuj / Zapisz PDF
                    </button>

                    <a href="tel:+48537593186" className="block w-full bg-white/10 backdrop-blur text-white py-4 px-6 rounded-xl font-bold hover:bg-white/20 border border-white/20 text-center">
                      <Phone className="w-5 h-5 inline mr-2" />
                      Zadzwoń teraz: 537 593 186
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