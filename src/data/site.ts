export const site = {
  name: "YE Cars",
  tagline: "Selected automobiles",
  phoneDisplay: "+31 6 53435106",
  phoneHref: "+31653435106",
  whatsapp: "31653435106",
  email: "info@yecars.nl",
  address: "Rendementsweg 23",
  city: "3641 SK Mijdrecht",
  visitNote: "Bezoek uitsluitend op afspraak",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Rendementsweg%2023%2C%203641%20SK%20Mijdrecht",
  instagram: "https://www.instagram.com/",
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
