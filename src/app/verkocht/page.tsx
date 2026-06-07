import type { Metadata } from "next";
import Link from "next/link";
import { CarCard } from "@/components/car-card";
import { ArrowIcon } from "@/components/icons";
import { soldCars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Verkocht",
  description: "Een selectie van recent door YE CARS verkochte auto's.",
};

export default function SoldPage() {
  return (
    <>
      <section className="page-hero page-hero--sold">
        <div className="shell page-hero__inner">
          <p className="eyebrow eyebrow--line">Recent afgeleverd</p>
          <h1>Verkocht</h1>
          <p>Een indruk van auto&apos;s die hun volgende eigenaar via YE CARS hebben gevonden.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="car-grid">
            {soldCars.map((car) => (
              <CarCard car={car} key={car.slug} />
            ))}
          </div>
          <div className="sold-cta">
            <div>
              <p className="eyebrow">Ook geïnteresseerd?</p>
              <h2>Bekijk onze actuele collectie.</h2>
            </div>
            <Link className="button button--gold" href="/aanbod">
              Bekijk actueel aanbod <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
