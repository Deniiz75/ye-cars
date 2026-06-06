import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/data/cars";
import { formatMileage, formatPrice } from "@/data/cars";
import { ArrowIcon } from "./icons";

export function CarCard({ car }: { car: Car }) {
  return (
    <article className="car-card">
      <Link className="car-card__image" href={`/aanbod/${car.slug}`} aria-label={`${car.brand} ${car.model} bekijken`}>
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        {car.sold ? <span className="car-card__status">Verkocht</span> : null}
        <span className="car-card__view">
          Bekijk auto <ArrowIcon />
        </span>
      </Link>
      <Link className="car-card__body" href={`/aanbod/${car.slug}`}>
        <div className="car-card__top">
          <div>
            <p className="eyebrow">{car.brand}</p>
            <h3>{car.model}</h3>
          </div>
          <div className="car-card__price">
            <strong>{formatPrice(car.price)}</strong>
            <span>{formatPrice(car.monthly)} p/m</span>
          </div>
        </div>
        <p className="car-card__edition">{car.edition}</p>
        <div className="car-card__specs">
          <span>{formatMileage(car.mileage)}</span>
          <span>{car.year}</span>
          <span>{car.fuel}</span>
          <span>{car.transmission}</span>
        </div>
      </Link>
    </article>
  );
}
