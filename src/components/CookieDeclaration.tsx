'use client';

import Script from 'next/script';

export default function CookieDeclaration() {
  return (
    <div className="my-8 cookie-declaration-container">
      {/* Ten skrypt wstrzyknie tabelkę z deklaracją w to miejsce */}
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/a6f2f2da-880a-4e9f-8fdb-371b476c7a53/cd.js"
        type="text/javascript"
        strategy="afterInteractive"
      />
    </div>
  );
}