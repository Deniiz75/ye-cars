import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CarCard } from "@/components/car-card";
import { ContactForm } from "@/components/contact-form";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { cars, formatMileage, formatPrice } from "@/data/cars";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);
  if (!car) return {};

  return {
    title: `${car.brand} ${car.model}`,
    description: `${car.brand} ${car.model} ${car.edition} uit ${car.year}, aangeboden door YE CARS.`,
    openGraph: { images: [car.image] },
  };
}

export default async function CarDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);
  if (!car) notFound();

  const related = cars.filter((item) => item.slug !== car.slug && !item.sold).slice(0, 3);
  const carName = `${car.brand} ${car.model}`;

  return (
    <>
      <section className="detail">
        <div className="shell">
          <Link className="back-link" href="/aanbod">
            <ArrowIcon /> Terug naar aanbod
          </Link>
          <div className="detail__grid">
            <div className="detail-gallery">
              <div className="detail-gallery__main">
                <Image src={car.gallery[0]} alt={carName} fill priority sizes="(max-width: 900px) 100vw, 65vw" />
                {car.sold ? <span className="detail-gallery__sold">Verkocht</span> : null}
              </div>
              <div className="detail-gallery__thumbs">
                {car.gallery.slice(1).map((image, index) => (
                  <div key={image}>
                    <Image src={image} alt={`${carName} impressie ${index + 2}`} fill sizes="25vw" />
                  </div>
                ))}
              </div>
            </div>
            <aside className="detail-summary">
              <p className="eyebrow">{car.brand}</p>
              <h1>{car.model}</h1>
              <p className="detail-summary__edition">{car.edition}</p>
              <div className="detail-summary__price">
                <strong>{formatPrice(car.price)}</strong>
                <span>{formatPrice(car.monthly)} per maand</span>
              </div>
              <dl className="detail-summary__specs">
                <div>
                  <dt>Kilometerstand</dt>
                  <dd>{formatMileage(car.mileage)}</dd>
                </div>
                <div>
                  <dt>Bouwjaar</dt>
                  <dd>{car.year}</dd>
                </div>
                <div>
                  <dt>Brandstof</dt>
                  <dd>{car.fuel}</dd>
                </div>
                <div>
                  <dt>Transmissie</dt>
                  <dd>{car.transmission}</dd>
                </div>
              </dl>
              <a className="button button--gold button--full" href="#interesse">
                Ik heb interesse <ArrowIcon />
              </a>
              <Link className="button button--outline button--full" href="/contact">
                Inruilvoorstel
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--raised">
        <div className="shell detail-info">
          <div>
            <p className="eyebrow eyebrow--line">Beschrijving</p>
            <h2>Over deze {car.model}</h2>
            <p className="detail-info__description">{car.description}</p>
            <div className="detail-spec-grid">
              {[
                ["Merk", car.brand],
                ["Model", car.model],
                ["Vermogen", car.power],
                ["Carrosserie", car.body],
                ["Kleur", car.color],
                ["Transmissie", car.transmission],
              ].map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="highlights">
            <p className="eyebrow">Highlights</p>
            <h3>Belangrijkste opties</h3>
            <ul>
              {car.highlights.map((highlight) => (
                <li key={highlight}>
                  <CheckIcon /> {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="interesse">
        <div className="shell contact-panel">
          <div>
            <p className="eyebrow eyebrow--line">Vragen of interesse?</p>
            <h2>Plan uw bezichtiging.</h2>
            <p>
              Wij nemen persoonlijk contact met u op om de auto, inruil en eventuele financiering door te spreken.
            </p>
          </div>
          <ContactForm carName={carName} />
        </div>
      </section>

      {related.length ? (
        <section className="section section--raised">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow eyebrow--line">Vergelijkbare auto&apos;s</p>
              <h2>Ook interessant</h2>
            </div>
            <div className="car-grid">
              {related.map((item) => (
                <CarCard car={item} key={item.slug} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
