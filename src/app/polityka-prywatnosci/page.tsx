import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności | Bielińscy Drewno",
  description: "Polityka prywatności Bielińscy Drewno - informacje o przetwarzaniu danych osobowych.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="pt-32 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
          Polityka Prywatności
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-green mb-4">1. Informacje ogólne</h2>
            <p className="text-gray-700 mb-4">
              Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
              przekazanych przez Użytkowników w związku z korzystaniem przez nich ze strony internetowej 
              <strong> bielinscy-drewno.pl</strong>.
            </p>
            <p className="text-gray-700 mb-4">
              Administratorem danych osobowych jest firma <strong>Bielińscy Drewno</strong> 
              z siedzibą w Mirotkach, gm. Skórcz, woj. pomorskie.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-green mb-4">2. Rodzaj przetwarzanych danych</h2>
            <p className="text-gray-700 mb-4">
              Zbieramy następujące dane osobowe:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Imię i nazwisko</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Dane dotyczące korespondencji (zapytania, wiadomości)</li>
              <li>Adres IP i dane techniczne przeglądarki (pliki cookies)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-green mb-4">3. Cel przetwarzania danych</h2>
            <p className="text-gray-700 mb-4">
              Dane osobowe przetwarzane są w celu:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Realizacji zapytań ofertowych i komunikacji z klientami</li>
              <li>Świadczenia usług i realizacji zamówień</li>
              <li>Prowadzenia statystyk i analiz ruchu na stronie</li>
              <li>Marketingu produktów i usług (za zgodą użytkownika)</li>
              <li>Wypełnienia obowiązków prawnych ciążących na Administratorze</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-green mb-4">4. Podstawa prawna przetwarzania</h2>
            <p className="text-gray-700 mb-4">
              Przetwarzanie danych osobowych odbywa się na podstawie:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Art. 6 ust. 1 lit. a) RODO (zgoda użytkownika)</li>
              <li>Art. 6 ust. 1 lit. b) RODO (wykonanie umowy)</li>
              <li>Art. 6 ust. 1 lit. f) RODO (prawnie uzasadniony interes Administratora)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-green mb-4">5. Okres przechowywania danych</h2>
            <p className="text-gray-700 mb-4">
              Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów określonych 
              w niniejszej Polityce Prywatności, nie dłużej jednak niż przez okres wymagany przez przepisy prawa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-green mb-4">6. Prawa użytkownika</h2>
            <p className="text-gray-700 mb-4">
              Użytkownik ma prawo do:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania (poprawiania) danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania danych</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania danych</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
              <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-green mb-4">7. Pliki cookies</h2>
            <p className="text-gray-700 mb-4">
              Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania serwisu, 
              dostosowania treści do preferencji użytkownika oraz w celach statystycznych.
            </p>
            <p className="text-gray-700 mb-4">
              Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej przeglądarce.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-green mb-4">8. Kontakt</h2>
            <p className="text-gray-700 mb-4">
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li><strong>Email:</strong> biuro@bielinscydrewno.pl</li>
              <li><strong>Telefon:</strong> 537 593 186 lub 695 467 337</li>
              <li><strong>Adres:</strong> Mirotki, gm. Skórcz, woj. pomorskie</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-brand-green mb-4">9. Zmiany w Polityce Prywatności</h2>
            <p className="text-gray-700 mb-4">
              Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. 
              O wszelkich zmianach użytkownicy zostaną poinformowani poprzez publikację nowej wersji 
              Polityki Prywatności na stronie internetowej.
            </p>
            <p className="text-gray-700 mb-4 italic">
              Data ostatniej aktualizacji: 15 stycznia 2026
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}