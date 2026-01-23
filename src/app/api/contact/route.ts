import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Walidacja
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      );
    }

    // Wyślij do n8n webhook
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
          timestamp: new Date().toISOString(),
          source: 'bielinscy-drewno.pl'
        })
      });
    }

    console.log('✅ Wiadomość wysłana do n8n:', { name, email, subject });

    return NextResponse.json({ 
      success: true,
      message: 'Wiadomość wysłana! Odezwiemy się wkrótce.' 
    });

  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { error: 'Błąd serwera. Spróbuj ponownie.' },
      { status: 500 }
    );
  }
}