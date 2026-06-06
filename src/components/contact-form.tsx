"use client";

import { useState } from "react";
import { site } from "@/data/site";

export function ContactForm({ carName }: { carName?: string }) {
  const [sent, setSent] = useState(false);

  function submit(formData: FormData) {
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = carName ? `Interesse in ${carName}` : "Contactaanvraag via yecars.nl";
    const body = [
      `Naam: ${name}`,
      `Telefoon: ${phone}`,
      `E-mail: ${email}`,
      carName ? `Auto: ${carName}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  if (sent) {
    return (
      <div className="form-success">
        <p className="eyebrow">Bedankt</p>
        <h3>Uw e-mailprogramma is geopend.</h3>
        <p>Controleer het bericht en verstuur het om de aanvraag af te ronden.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" action={submit}>
      <label>
        <span>Naam</span>
        <input name="name" type="text" autoComplete="name" required placeholder="Uw naam" />
      </label>
      <label>
        <span>Telefoonnummer</span>
        <input name="phone" type="tel" autoComplete="tel" required placeholder="06 12 34 56 78" />
      </label>
      <label className="contact-form__wide">
        <span>E-mailadres</span>
        <input name="email" type="email" autoComplete="email" required placeholder="naam@voorbeeld.nl" />
      </label>
      <label className="contact-form__wide">
        <span>Bericht</span>
        <textarea
          name="message"
          rows={5}
          required
          defaultValue={carName ? `Ik ontvang graag meer informatie over de ${carName}.` : ""}
          placeholder="Waarmee kunnen wij u helpen?"
        />
      </label>
      <button className="button button--gold contact-form__wide" type="submit">
        Verstuur aanvraag
      </button>
    </form>
  );
}
