import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Service email non configure. Contactez-nous par telephone.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Veuillez remplir tous les champs obligatoires.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Adresse email invalide.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Formulaire Contact <onboarding@resend.dev>',
      to: 'contact@monartisanidf.fr',
      replyTo: email,
      subject: `[Site Web] ${subject} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #2A7B8C, #1A2B4A); padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Nouvelle demande depuis le site web</h1>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1A2B4A; width: 120px;">Nom</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1A2B4A;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">
                  <a href="mailto:${email}" style="color: #2A7B8C;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1A2B4A;">Telephone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">
                  ${phone ? `<a href="tel:${phone}" style="color: #2A7B8C;">${phone}</a>` : '<em style="color: #94a3b8;">Non renseigne</em>'}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #1A2B4A;">Motif</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #334155;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 20px;">
              <h3 style="color: #1A2B4A; margin-bottom: 8px; font-size: 14px;">Message :</h3>
              <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">
            Email envoye automatiquement depuis artisan-francilien-idf.fr
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Erreur lors de l\'envoi. Veuillez reessayer.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Votre message a bien ete envoye !' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('API error:', err);
    return new Response(
      JSON.stringify({ error: 'Erreur serveur. Veuillez reessayer plus tard.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
