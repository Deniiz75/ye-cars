import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Verkoop van occasions, directe inkoop, taxatie en consignatieverkoop bij YE Cars.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero page-hero--services">
        <Image src="/images/service-car.jpg" alt="" fill priority sizes="100vw" />
        <div className="page-hero__shade" />
        <div className="shell page-hero__inner">
          <p className="eyebrow eyebrow--line">Kopen of verkopen</p>
          <h1>Onze diensten</h1>
          <p>Persoonlijke begeleiding bij aankoop, directe verkoop of verkoop in consignatie.</p>
        </div>
      </section>

      <section className="section">
        <div className="shell service-page-grid">
          {services.map((service) => (
            <article className="service-page-card" id={service.id} key={service.number}>
              <span>{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <ul>
                {service.highlights.map((highlight) => (
                  <li key={highlight}>
                    <CheckIcon /> {highlight}
                  </li>
                ))}
              </ul>
              <Link href={service.href}>
                {service.cta} <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__glow" />
        <div className="shell cta-band__content">
          <p className="eyebrow">Uw auto verkopen?</p>
          <h2>Directe inkoop of consignatie.</h2>
          <p>Wij bespreken welke verkoopvorm het beste bij uw auto en uw voorkeur past.</p>
          <Link className="button button--gold" href="/contact">
            Bespreek uw auto <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  );
}
