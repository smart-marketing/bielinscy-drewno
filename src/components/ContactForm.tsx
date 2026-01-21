"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setErrorMessage("Wystąpił błąd. Spróbuj ponownie lub zadzwoń: 537 593 186");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Nie udało się wysłać wiadomości. Zadzwoń: 537 593 186");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
      <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-brown mb-6">
        Formularz kontaktowy
      </h3>
      <p className="text-brand-brown/70 mb-8">
        Wypełnij formularz, a oddzwonimy w ciągu 24h. Lub zadzwoń od razu: <a href="tel:+48537593186" className="font-bold text-brand-green hover:underline">537 593 186</a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-brand-brown mb-2">
            Imię i nazwisko *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            placeholder="Jan Kowalski"
            disabled={status === "loading"}
          />
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-brown mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
              placeholder="jan@example.com"
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-brand-brown mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
              placeholder="537 593 186"
              disabled={status === "loading"}
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-brand-brown mb-2">
            Czego dotyczy zapytanie? *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
            disabled={status === "loading"}
          >
            <option value="">-- Wybierz temat --</option>
            <option value="wycena">Wycena materiału</option>
            <option value="wiezba">Więźba dachowa</option>
            <option value="dostawa">Dostawa / Transport</option>
            <option value="doradztwo">Doradztwo techniczne</option>
            <option value="reklamacja">Reklamacja</option>
            <option value="inne">Inne</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-brand-brown mb-2">
            Wiadomość *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none"
            placeholder="Opisz swoje zapytanie... Np. potrzebuję wycenę na 50m² desek tarasowych, dostawa do Gdańska."
            disabled={status === "loading"}
          />
        </div>

        {/* Success Message */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Wiadomość wysłana!</p>
              <p className="text-sm">Oddzwonimy w ciągu 24h. Dziękujemy!</p>
            </div>
          </motion.div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-3"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Błąd wysyłania</p>
              <p className="text-sm">{errorMessage}</p>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-brand-green text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-brand-green/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Wysyłanie...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Wyślij zapytanie</span>
            </>
          )}
        </button>

        <p className="text-xs text-brand-brown/60 text-center">
          * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
        </p>
      </form>
    </div>
  );
}
