import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon, TikTokIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./logo";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__brand">
          <Logo footer />
          <p>
            Geselecteerde occasions met aandacht voor kwaliteit, herkomst en een persoonlijke aflevering.
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
          <address className="appointment-block">
            <span>7 dagen per week</span>
            <strong>{site.visitNote}</strong>
            <p>
              {site.address}
              <br />
              {site.city}
            </p>
            <small>Zo reserveren wij alle tijd voor u en de auto.</small>
          </address>
        </div>
        <div>
          <p className="footer__title">Contact</p>
          <a className="footer__contact" href={`tel:${site.phoneHref}`}>
            <PhoneIcon /> {site.phoneDisplay}
          </a>
          <a className="footer__contact" href={`mailto:${site.email}`}>
            <MailIcon /> {site.email}
          </a>
          <p className="footer__title footer__title--spaced">Volg YE Cars</p>
          <div className="footer__socials">
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Volg YE Cars op Instagram">
              <InstagramIcon />
              <span>Instagram</span>
            </a>
            <a href={site.tiktok} target="_blank" rel="noreferrer" aria-label="Volg YE Cars op TikTok">
              <TikTokIcon />
              <span>TikTok</span>
            </a>
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Volg YE Cars op Facebook">
              <FacebookIcon />
              <span>Facebook</span>
            </a>
          </div>
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
      <div className="shell footer__trust">
        <p>Keurmerken & zekerheid</p>
        <div className="footer__trust-logos" aria-label="Keurmerken en garanties">
          <div className="footer__trust-logo">
            <Image
              src="/brand/rdw.webp"
              alt="RDW erkend bedrijf"
              width={600}
              height={346}
              loading="lazy"
              sizes="80px"
            />
          </div>
          <div className="footer__trust-logo">
            <Image src="/brand/nap.webp" alt="NAP" width={600} height={223} loading="lazy" sizes="120px" />
          </div>
          <div className="footer__trust-logo footer__trust-logo--square">
            <Image
              src="/brand/autotrust.webp"
              alt="Autotrust Garantie"
              width={600}
              height={615}
              loading="lazy"
              sizes="44px"
            />
          </div>
          <a
            className="footer__trust-logo footer__trust-logo--google"
            href={site.googleReviewsHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Bekijk de 5-sterrenreviews van YE Cars op Google"
          >
            <Image
              src="/brand/google-reviews.webp"
              alt="Google 5 sterren"
              width={401}
              height={330}
              loading="lazy"
              sizes="52px"
            />
          </a>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>
          &copy; 2024 <span className="brand-name">YE Cars</span>
        </span>
        <span>Privacy &middot; Voorwaarden &middot; Cookies</span>
      </div>
      <div className="footer__wordmark" aria-hidden="true">
        YE Cars
      </div>
    </footer>
  );
}
