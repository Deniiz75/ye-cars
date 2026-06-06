import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Inkoop, taxatie, financiering, garantie en zoekopdrachten bij YE CARS.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--services">
        <Image src="/images/service-car.jpg" alt="" fill priority sizes="100vw" />
        <div className="page-hero__shade" />
        <div className="shell page-hero__inner">
          <p className="eyebrow eyebrow--line">Van taxatie tot aflevering</p>
          <h1>Onze diensten</h1>
          <p>Een zorgvuldig proces, afgestemd op uw situatie.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell service-page-grid">
          {services.map((service) => (
            <article className="service-page-card" key={service.number}>
              <span>{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <ul>
                <li>
                  <CheckIcon /> Persoonlijk contact
                </li>
                <li>
                  <CheckIcon /> Duidelijke afspraken
                </li>
                <li>
                  <CheckIcon /> Snelle terugkoppeling
                </li>
              </ul>
              <Link href="/contact">
                Bespreek de mogelijkheden <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__glow" />
        <div className="shell cta-band__content">
          <p className="eyebrow">Persoonlijk advies</p>
          <h2>Vertel ons wat u zoekt.</h2>
          <p>Wij nemen de mogelijkheden graag rustig met u door.</p>
          <Link className="button button--gold" href="/contact">
            Neem contact op <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
