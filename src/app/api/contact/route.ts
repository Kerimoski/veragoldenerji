import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, service, message } = body;

    // Send email via FormSubmit AJAX service to info@veragoldenerji.com
    const res = await fetch("https://formsubmit.co/ajax/info@veragoldenerji.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        _subject: `[Vera Gold Website Formu] ${name || "Yeni Teklif Talebi"} (${service || "Genel"})`,
        Ad_Soyad: name || "-",
        Firma: company || "-",
        Eposta: email || "-",
        Hizmet_Urun: service || "-",
        Mesaj: message || "-",
        _template: "table",
      }),
    });

    if (res.ok) {
      return NextResponse.json({
        success: true,
        message: "Mesajınız info@veragoldenerji.com adresine başarıyla iletildi.",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "E-posta gönderiminde bir hata oluştu." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API Contact Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
