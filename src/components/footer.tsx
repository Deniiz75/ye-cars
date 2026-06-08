import Link from "next/link";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./logo";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__brand">
          <Logo footer />
          <p>
            Geselecteerde premium occasions met aandacht voor kwaliteit, herkomst en een persoonlijke aflevering.
          </p>
          <a className="whatsapp-pill" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            <span>
              WhatsApp direct
              <strong>{site.phoneDisplay}</strong>
            </span>
          </a>
        </div>
        <div>
          <p className="footer__title">Bezoek & bezichtiging</p>
          <div className="appointment-block">
            <span>Persoonlijke ontvangst</span>
            <strong>Uitsluitend op afspraak</strong>
            <p>Zo reserveren wij alle tijd voor u en de auto.</p>
          </div>
        </div>
        <div>
          <p className="footer__title">Contact</p>
          <a className="footer__contact" href={`tel:${site.phoneHref}`}>
            <PhoneIcon /> {site.phoneDisplay}
          </a>
          <a className="footer__contact" href={`mailto:${site.email}`}>
            <MailIcon /> {site.email}
          </a>
          <p className="footer__title footer__title--spaced">Adres</p>
          <p>{site.address}</p>
          <p>{site.city}</p>
        </div>
        <div>
          <p className="footer__title">Links</p>
          <div className="footer__links">
            <Link href="/aanbod">Aanbod</Link>
            <Link href="/diensten">Diensten</Link>
            <Link href="/over-ons">Over ons</Link>
            <Link href="/verkocht">Verkocht</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>
          &copy; {new Date().getFullYear()} <span className="brand-name">YE Cars</span>
        </span>
        <span>Privacy &middot; Voorwaarden &middot; Cookies</span>
      </div>
      <div className="footer__wordmark" aria-hidden="true">
        YE Cars
      </div>
    </footer>
  );
}
