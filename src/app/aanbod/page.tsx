import type { Metadata } from "next";
import { InventoryGrid } from "@/components/inventory-grid";
import { availableCars } from "@/data/cars";

export const metadata: Metadata = {
  title: "Aanbod",
  description: "Bekijk de actuele collectie geselecteerde occasions van YE CARS.",
};

export default function InventoryPage() {
  return (
    <>
      <section className="page-hero page-hero--inventory">
        <div className="shell page-hero__inner">
          <p className="eyebrow eyebrow--line">De collectie</p>
          <h1>Actueel aanbod</h1>
          <p>Elke auto is geselecteerd op uitvoering, conditie en herkomst.</p>
        </div>
      </section>
      <section className="section section--compact">
        <div className="shell">
          <InventoryGrid cars={availableCars} />
        </div>
      </section>
    </>
  );
}
