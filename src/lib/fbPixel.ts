export const FB_PIXEL_ID = '821688877596988';

export const pageview = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', name, options);
  }
};

// Przykłady eventów do użycia:
// event('Contact'); - kliknięcie w kontakt
// event('Lead'); - wypełnienie formularza
// event('ViewContent', { content_name: 'Cennik' }); - wyświetlenie cennika