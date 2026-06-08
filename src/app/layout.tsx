import type { Metadata } from "next";
import { ContactActions } from "@/components/contact-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ye-cars-previews.vercel.app"),
  title: {
    default: "YE Cars | Geselecteerde premium occasions",
    template: "%s | YE Cars",
  },
  description:
    "Ontdek de geselecteerde premium occasions van YE Cars. Persoonlijke service, transparante historie en bezichtiging op afspraak.",
  openGraph: {
    title: "YE Cars | Selected automobiles",
    description: "Geselecteerde premium occasions met persoonlijke service.",
    type: "website",
    locale: "nl_NL",
    images: ["/images/hero-ye-cars.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" data-scroll-behavior="smooth">
      <body>
        <MotionProvider />
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactActions />
      </body>
    </html>
  );
}
