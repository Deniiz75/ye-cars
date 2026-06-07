import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { MailIcon, MapIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met YE CARS of plan een bezichtiging op afspraak.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--contact">
        <div className="shell page-hero__inner">
          <p className="eyebrow eyebrow--line">Neem contact op</p>
          <h1>Plan uw afspraak.</h1>
          <p>Wij nemen graag de tijd voor uw vraag, taxatie, consignatie of bezichtiging.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Direct contact</p>
            <h2>Hoe kunnen wij u helpen?</h2>
            <p>
              Laat uw gegevens achter of neem rechtstreeks contact op. Wij reageren tijdens openingstijden zo snel
              mogelijk.
            </p>
            <div className="contact-cards">
              <a href={`tel:${site.phoneHref}`}>
                <PhoneIcon />
                <span>
                  Bel ons
                  <strong>{site.phoneDisplay}</strong>
                </span>
              </a>
              <a href={`mailto:${site.email}`}>
                <MailIcon />
                <span>
                  Mail ons
                  <strong>{site.email}</strong>
                </span>
              </a>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                <span>
                  WhatsApp
                  <strong>Start een gesprek</strong>
                </span>
              </a>
              <div>
                <MapIcon />
                <span>
                  Bezoek
                  <strong>{site.address}</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="contact-form-panel">
            <p className="eyebrow">Contactformulier</p>
            <h2>Stuur een bericht</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
