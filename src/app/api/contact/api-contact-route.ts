import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      );
    }

    // Here you would normally:
    // 1. Send email via service like SendGrid, Resend, etc.
    // 2. Save to database
    // 3. Send notification to admin

    // For now, just log to console (you'll need to implement email sending)
    console.log('=== NOWE ZAPYTANIE KONTAKTOWE ===');
    console.log('Imię:', name);
    console.log('Email:', email);
    console.log('Telefon:', phone);
    console.log('Temat:', subject);
    console.log('Wiadomość:', message);
    console.log('Data:', new Date().toISOString());
    console.log('================================');

    // TODO: Implement actual email sending here
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'kontakt@bielinscy-drewno.pl',
    //   to: 'biuro@bielinscydrewno.pl',
    //   subject: `Nowe zapytanie: ${subject}`,
    //   html: `
    //     <h2>Nowe zapytanie z formularza kontaktowego</h2>
    //     <p><strong>Imię:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Telefon:</strong> ${phone}</p>
    //     <p><strong>Temat:</strong> ${subject}</p>
    //     <p><strong>Wiadomość:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    return NextResponse.json({ 
      success: true,
      message: 'Wiadomość została wysłana'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd serwera' },
      { status: 500 }
    );
  }
}
