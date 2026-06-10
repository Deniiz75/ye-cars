"use client";

import { useEffect, useMemo, useState } from "react";
import type { Car } from "@/data/cars";
import { CarCard } from "./car-card";
import { CloseIcon } from "./icons";

export function InventoryGrid({ cars }: { cars: Car[] }) {
  const [brand, setBrand] = useState("Alle merken");
  const [fuel, setFuel] = useState("Alle brandstoffen");
  const [sort, setSort] = useState("Nieuwste");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [draftBrand, setDraftBrand] = useState(brand);
  const [draftFuel, setDraftFuel] = useState(fuel);
  const [draftSort, setDraftSort] = useState(sort);

  const brands = ["Alle merken", ...Array.from(new Set(cars.map((car) => car.brand)))];
  const fuels = ["Alle brandstoffen", ...Array.from(new Set(cars.map((car) => car.fuel)))];
  const sortOptions = ["Nieuwste", "Prijs laag-hoog", "Prijs hoog-laag", "Kilometerstand"];

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

  const draftResultCount = useMemo(
    () =>
      cars.filter(
        (car) =>
          (draftBrand === "Alle merken" || car.brand === draftBrand) &&
          (draftFuel === "Alle brandstoffen" || car.fuel === draftFuel),
      ).length,
    [cars, draftBrand, draftFuel],
  );

  const activeFilterCount =
    Number(brand !== "Alle merken") + Number(fuel !== "Alle brandstoffen") + Number(sort !== "Nieuwste");

  useEffect(() => {
    if (!filtersOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setFiltersOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [filtersOpen]);

  function openFilters() {
    setDraftBrand(brand);
    setDraftFuel(fuel);
    setDraftSort(sort);
    setFiltersOpen(true);
  }

  function applyFilters() {
    setBrand(draftBrand);
    setFuel(draftFuel);
    setSort(draftSort);
    setFiltersOpen(false);
  }

  return (
    <>
      <div className="inventory-mobile-toolbar">
        <div className="filters__label">
          <span>{String(filtered.length).padStart(2, "0")}</span>
          auto&apos;s gevonden
        </div>
        <button className="button button--outline inventory-filter-button" type="button" onClick={openFilters}>
          Filteren
          {activeFilterCount > 0 ? <span>{activeFilterCount}</span> : null}
        </button>
      </div>

      <div className="filters filters--desktop">
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
            {sortOptions.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      {filtersOpen ? (
        <div className="filter-drawer" role="dialog" aria-modal="true" aria-labelledby="filter-drawer-title">
          <button
            className="filter-drawer__backdrop"
            type="button"
            onClick={() => setFiltersOpen(false)}
            aria-label="Filters sluiten"
          />
          <div className="filter-drawer__panel">
            <div className="filter-drawer__header">
              <div>
                <p className="eyebrow">Aanbod verfijnen</p>
                <h2 id="filter-drawer-title">Filteren</h2>
              </div>
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Filters sluiten" autoFocus>
                <CloseIcon />
              </button>
            </div>

            <div className="filter-drawer__fields">
              <label>
                <span>Merk</span>
                <select value={draftBrand} onChange={(event) => setDraftBrand(event.target.value)}>
                  {brands.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Brandstof</span>
                <select value={draftFuel} onChange={(event) => setDraftFuel(event.target.value)}>
                  {fuels.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span>Sorteren</span>
                <select value={draftSort} onChange={(event) => setDraftSort(event.target.value)}>
                  {sortOptions.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="filter-drawer__actions">
              <button
                className="button button--outline"
                type="button"
                onClick={() => {
                  setDraftBrand("Alle merken");
                  setDraftFuel("Alle brandstoffen");
                  setDraftSort("Nieuwste");
                }}
              >
                Wis filters
              </button>
              <button className="button button--gold" type="button" onClick={applyFilters}>
                Toon {draftResultCount} {draftResultCount === 1 ? "auto" : "auto's"}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {filtered.length ? (
        <div className="car-grid inventory-updating" key={`${brand}-${fuel}-${sort}`}>
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
