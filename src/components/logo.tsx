import Link from "next/link";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={`logo${footer ? " logo--footer" : ""}`} href="/" aria-label="YE CARS home">
      <span className="logo__mark" aria-hidden="true">
        <span />
      </span>
      <span className="logo__name">
        YE <strong>CARS</strong>
      </span>
      <span className="logo__tagline">Selected automobiles</span>
    </Link>
  );
}
