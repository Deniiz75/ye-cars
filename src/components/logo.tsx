import Image from "next/image";
import Link from "next/link";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={`logo${footer ? " logo--footer" : ""}`} href="/" aria-label="YE CARS home">
      <Image
        className="logo__image"
        src="/brand/ye-cars-logo.png"
        alt=""
        width={376}
        height={180}
        priority={!footer}
        loading={footer ? "lazy" : "eager"}
        sizes={footer ? "250px" : "(max-width: 680px) 140px, 190px"}
      />
    </Link>
  );
}
