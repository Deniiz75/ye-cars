export const site = {
  name: "YE CARS",
  tagline: "Selected automobiles",
  phoneDisplay: "085 - 00 00 00",
  phoneHref: "+31850000000",
  whatsapp: "31850000000",
  email: "info@yecars.nl",
  address: "Bezoek uitsluitend op afspraak",
  city: "Nederland",
  instagram: "https://www.instagram.com/",
  openingHours: [
    ["Ma - vr", "09:00 - 18:00"],
    ["Zaterdag", "10:00 - 17:00"],
    ["Zondag", "Op afspraak"],
  ],
} as const;

export const services = [
  {
    number: "01",
    id: "verkoop",
    title: "Verkoop occasions",
    text: "Ontdek onze zorgvuldig geselecteerde occasions, helder gepresenteerd en te bezichtigen op afspraak.",
    highlights: [
      "Geselecteerde eigen voorraad",
      "Inzicht in historie en conditie",
      "Bezichtiging en proefrit op afspraak",
    ],
    cta: "Bekijk het aanbod",
    href: "/aanbod",
  },
  {
    number: "02",
    id: "inkoop",
    title: "Inkoop & taxatie",
    text: "Wilt u uw auto direct verkopen? Wij beoordelen de auto en doen een helder, vrijblijvend voorstel.",
    highlights: [
      "Vrijblijvende waardebepaling",
      "Marktconform voorstel",
      "Snelle betaling en overdracht",
    ],
    cta: "Vraag een taxatie aan",
    href: "/contact",
  },
  {
    number: "03",
    id: "consignatie",
    title: "Consignatieverkoop",
    text: "Wij verkopen uw auto namens u en verzorgen het traject van presentatie tot bezichtiging en overdracht.",
    highlights: [
      "Professionele presentatie en advertenties",
      "Wij regelen reacties en bezichtigingen",
      "Heldere afspraken over opbrengst en vergoeding",
    ],
    cta: "Bespreek consignatie",
    href: "/contact",
  },
] as const;
