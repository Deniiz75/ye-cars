import Image from "next/image";
import Link from "next/link";
import { CarCard } from "@/components/car-card";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { availableCars } from "@/data/cars";
import { services } from "@/data/site";

const featuredCars = availableCars.slice(0, 4);

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image
          className="home-hero__fallback"
          src="/images/hero-ye-cars.jpg"
          alt="Premium occasion in de YE CARS showroom"
          fill
          priority
          sizes="100vw"
        />
        <video
          className="home-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-ye-cars.jpg"
          aria-hidden="true"
        >
          <source src="/videos/ye-cars-hero-v2.mp4" type="video/mp4" />
        </video>
        <div className="home-hero__shade" />
        <div className="shell home-hero__content">
          <p className="eyebrow eyebrow--line">Geselecteerde occasions</p>
          <h1>
            Rijd wat u
            <span>bijblijft.</span>
          </h1>
          <p className="home-hero__intro">
            Bij YE CARS vindt u zorgvuldig geselecteerde auto&apos;s met een heldere historie en een persoonlijke
            aflevering.
          </p>
          <div className="button-row">
            <Link className="button button--gold" href="/aanbod">
              Bekijk aanbod <ArrowIcon />
            </Link>
            <Link className="button button--ghost" href="/contact">
              Plan een afspraak
            </Link>
          </div>
        </div>
        <a className="scroll-cue" href="#nieuw">
          <span>Scroll</span>
          <i />
        </a>
      </section>

      <section className="brand-marquee" aria-label="Merken in onze collectie">
        <div className="brand-marquee__track">
          {["Audi", "BMW", "Mercedes-Benz", "Porsche", "Volkswagen", "Volvo", "Audi", "BMW"].map((brand, index) => (
            <span key={`${brand}-${index}`}>{brand}</span>
          ))}
        </div>
      </section>

      <section className="section" id="nieuw">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow eyebrow--line">Recent toegevoegd</p>
              <h2>Nieuw binnen</h2>
            </div>
            <p>
              Een compacte collectie voor wie waarde hecht aan uitvoering, conditie en een transparant aankoopproces.
            </p>
          </div>
          <div className="car-grid car-grid--featured">
            {featuredCars.map((car) => (
              <CarCard car={car} key={car.slug} />
            ))}
          </div>
          <div className="section-action">
            <Link className="button button--gold" href="/aanbod">
              Volledige collectie <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="shell">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow eyebrow--line">Meer dan verkoop</p>
              <h2>Onze diensten</h2>
            </div>
            <p>
              Koop een occasion uit onze collectie, verkoop direct aan YE CARS of laat ons de verkoop in consignatie
              verzorgen.
            </p>
          </div>
          <div className="service-feature">
            <div className="service-feature__image">
              <Image src="/images/service-car.jpg" alt="Premium auto in een donkere showroom" fill sizes="50vw" />
            </div>
            <div className="service-list">
              {services.map((service) => (
                <Link href={`/diensten#${service.id}`} className="service-row" key={service.number}>
                  <span>{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell story-grid">
          <div className="story-copy">
            <p className="eyebrow eyebrow--line">Over YE CARS</p>
            <h2>Gekozen met aandacht. Afgeleverd met zekerheid.</h2>
            <p>
              Wij selecteren op meer dan merk en kilometerstand. Onderhoud, herkomst, uitvoering en algemene conditie
              bepalen of een auto in onze collectie past.
            </p>
            <ul className="check-list">
              <li>
                <CheckIcon /> Persoonlijke bezichtiging op afspraak
              </li>
              <li>
                <CheckIcon /> Directe inkoop en consignatie mogelijk
              </li>
              <li>
                <CheckIcon /> Heldere uitleg voor aflevering
              </li>
            </ul>
            <Link className="button button--outline" href="/over-ons">
              Meer over ons <ArrowIcon />
            </Link>
          </div>
          <div className="story-visual">
            <Image src="/images/showroom.jpg" alt="YE CARS selectie en showroom" fill sizes="50vw" />
            <div className="story-stat story-stat--top">
              <strong>01</strong>
              <span>Aanspreekpunt van begin tot eind</span>
            </div>
            <div className="story-stat story-stat--bottom">
              <strong>100%</strong>
              <span>Aandacht voor de juiste match</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__glow" />
        <div className="shell cta-band__content">
          <p className="eyebrow">Uw auto verkopen?</p>
          <h2>Wij bieden marktconform.</h2>
          <p>Stuur de gegevens van uw auto en ontvang een vrijblijvend voorstel.</p>
          <div className="button-row">
            <Link className="button button--gold" href="/contact">
              Vraag taxatie aan <ArrowIcon />
            </Link>
            <Link className="button button--ghost" href="/aanbod">
              Bekijk collectie
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
