"use client";

import { useMemo, useState } from "react";
import type { Car } from "@/data/cars";
import { CarCard } from "./car-card";

export function InventoryGrid({ cars }: { cars: Car[] }) {
  const [brand, setBrand] = useState("Alle merken");
  const [fuel, setFuel] = useState("Alle brandstoffen");
  const [sort, setSort] = useState("Nieuwste");

  const brands = ["Alle merken", ...Array.from(new Set(cars.map((car) => car.brand)))];
  const fuels = ["Alle brandstoffen", ...Array.from(new Set(cars.map((car) => car.fuel)))];

  const filtered = useMemo(() => {
    const result = cars.filter(
      (car) =>
        (brand === "Alle merken" || car.brand === brand) &&
        (fuel === "Alle brandstoffen" || car.fuel === fuel),
    );

    return [...result].sort((a, b) => {
      if (sort === "Prijs laag-hoog") return a.price - b.price;
      if (sort === "Prijs hoog-laag") return b.price - a.price;
      if (sort === "Kilometerstand") return a.mileage - b.mileage;
      return b.year - a.year;
    });
  }, [brand, cars, fuel, sort]);

  return (
    <>
      <div className="filters">
        <div className="filters__label">
          <span>{String(filtered.length).padStart(2, "0")}</span>
          auto&apos;s gevonden
        </div>
        <label>
          <span>Merk</span>
          <select value={brand} onChange={(event) => setBrand(event.target.value)}>
            {brands.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Brandstof</span>
          <select value={fuel} onChange={(event) => setFuel(event.target.value)}>
            {fuels.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Sorteren</span>
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            {["Nieuwste", "Prijs laag-hoog", "Prijs hoog-laag", "Kilometerstand"].map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      {filtered.length ? (
        <div className="car-grid">
          {filtered.map((car) => (
            <CarCard car={car} key={car.slug} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="eyebrow">Geen resultaten</p>
          <h2>Deze combinatie staat nu niet in de collectie.</h2>
          <button
            className="button button--outline"
            type="button"
            onClick={() => {
              setBrand("Alle merken");
              setFuel("Alle brandstoffen");
            }}
          >
            Wis filters
          </button>
        </div>
      )}
    </>
  );
}
