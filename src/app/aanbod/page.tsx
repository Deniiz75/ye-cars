import type { Metadata } from "next";
import { LiveInventoryWidget } from "@/components/live-inventory-widget";

export const metadata: Metadata = {
  title: "Aanbod",
  description: "Bekijk de actuele collectie geselecteerde occasions van YE Cars.",
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
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow eyebrow--line">Live voorraad</p>
              <h2>Direct uit ons verkoopsysteem</h2>
            </div>
            <p>
              Dit aanbod wordt automatisch bijgewerkt vanuit Mobilox. Zo ziet u altijd de auto&apos;s die actueel
              beschikbaar zijn.
            </p>
          </div>
          <LiveInventoryWidget />
        </div>
      </section>
    </>
  );
}
