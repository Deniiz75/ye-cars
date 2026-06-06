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
    title: "Inkoop & taxatie",
    text: "Uw auto verkopen? Ontvang een helder en vrijblijvend voorstel, met snelle afhandeling en directe betaling.",
  },
  {
    number: "02",
    title: "Garantie & aflevering",
    text: "Kies voor extra zekerheid met een afleverpakket dat past bij de auto en uw verwachte gebruik.",
  },
  {
    number: "03",
    title: "Financiering & lease",
    text: "Wij denken mee over een passende maandtermijn voor particuliere financiering of zakelijke lease.",
  },
  {
    number: "04",
    title: "Zoekopdracht",
    text: "Staat uw ideale auto niet in de collectie? Wij zoeken gericht binnen ons netwerk naar de juiste uitvoering.",
  },
] as const;
