import { MailIcon, MapIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { site } from "@/data/site";

export function ContactActions() {
  const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hallo YE Cars, ik heb een vraag over jullie collectie.",
  )}`;

  return (
    <>
      <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="WhatsApp YE Cars">
        <WhatsAppIcon />
      </a>
      <aside className="mobile-contact" aria-label="Snel contact">
        <a href={`tel:${site.phoneHref}`}>
          <PhoneIcon />
          <span>Bellen</span>
        </a>
        <a href={`mailto:${site.email}`}>
          <MailIcon />
          <span>Mail</span>
        </a>
        <a href="/contact">
          <MapIcon />
          <span>Afspraak</span>
        </a>
        <a className="mobile-contact__whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </a>
      </aside>
    </>
  );
}
