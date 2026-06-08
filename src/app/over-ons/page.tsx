import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Over ons",
  description: "Lees meer over de selectie, werkwijze en persoonlijke service van YE Cars.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <Image src="/images/showroom.jpg" alt="" fill priority sizes="100vw" />
        <div className="page-hero__shade" />
        <div className="shell page-hero__inner">
          <p className="eyebrow eyebrow--line">
            Over <span className="brand-name">YE Cars</span>
          </p>
          <h1>Auto&apos;s met een verhaal dat klopt.</h1>
        </div>
      </section>

      <section className="section">
        <div className="shell about-intro">
          <div>
            <p className="eyebrow eyebrow--line">Onze benadering</p>
            <h2>Kleinschalig in collectie. Groot in aandacht.</h2>
          </div>
          <div>
            <p>
              YE Cars is ontstaan vanuit een eenvoudige overtuiging: een goede occasion begint bij een kritische
              selectie en eindigt bij een aflevering waar alles helder is.
            </p>
            <p>
              Daarom werken wij op afspraak. Zo is er tijd om de auto goed te bekijken, vragen te beantwoorden en samen
              te bepalen wat bij uw gebruik past.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="shell values-grid">
          {[
            ["01", "Selectie", "Wij beoordelen uitvoering, herkomst, onderhoud en algehele conditie als een geheel."],
            ["02", "Transparantie", "U krijgt een duidelijk beeld van de auto, de historie en de gekozen aflevering."],
            ["03", "Persoonlijk", "Een vast aanspreekpunt begeleidt het contact van eerste vraag tot overdracht."],
          ].map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell story-grid story-grid--reverse">
          <div className="story-visual">
            <Image src="/images/hero-ye-cars.jpg" alt="YE Cars premium selectie" fill sizes="50vw" />
          </div>
          <div className="story-copy">
            <p className="eyebrow eyebrow--line">Onze belofte</p>
            <h2>Geen haast. Geen standaardverhaal.</h2>
            <p>
              Een auto kopen blijft een belangrijke keuze. Wij zorgen voor rust in het proces en maken afspraken die
              vooraf duidelijk zijn.
            </p>
            <ul className="check-list">
              <li>
                <CheckIcon /> Bezichtiging en proefrit op afspraak
              </li>
              <li>
                <CheckIcon /> Mogelijkheid tot onafhankelijke keuring
              </li>
              <li>
                <CheckIcon /> Aflevering in overleg samengesteld
              </li>
            </ul>
            <Link className="button button--gold" href="/aanbod">
              Bekijk de collectie <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
