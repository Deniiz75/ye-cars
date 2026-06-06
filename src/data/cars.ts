export type Car = {
  slug: string;
  brand: string;
  model: string;
  edition: string;
  price: number;
  monthly: number;
  year: number;
  mileage: number;
  fuel: "Benzine" | "Hybride" | "Elektrisch";
  transmission: "Automaat" | "Handgeschakeld";
  power: string;
  body: string;
  color: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  sold?: boolean;
  description: string;
  highlights: string[];
};

export const cars: Car[] = [
  {
    slug: "porsche-panamera-4-e-hybrid",
    brand: "Porsche",
    model: "Panamera",
    edition: "4 E-Hybrid Sport Chrono",
    price: 68950,
    monthly: 1047,
    year: 2021,
    mileage: 58740,
    fuel: "Hybride",
    transmission: "Automaat",
    power: "462 pk",
    body: "Hatchback",
    color: "Jet Black Metallic",
    image: "/images/porsche-panamera.jpg",
    gallery: [
      "/images/porsche-panamera.jpg",
      "/images/showroom.jpg",
      "/images/service-car.jpg",
    ],
    featured: true,
    description:
      "Een bijzonder complete Panamera die prestaties en dagelijks comfort moeiteloos combineert. De auto is zorgvuldig geselecteerd en wordt geleverd met een transparante onderhoudshistorie.",
    highlights: [
      "Sport Chrono pakket",
      "Panoramadak",
      "Adaptieve luchtvering",
      "Bose audio",
      "360 graden camera",
      "Stoelventilatie",
    ],
  },
  {
    slug: "mercedes-amg-gt-53-4matic",
    brand: "Mercedes-AMG",
    model: "GT 53",
    edition: "4MATIC+ Premium Plus",
    price: 79950,
    monthly: 1214,
    year: 2020,
    mileage: 62410,
    fuel: "Benzine",
    transmission: "Automaat",
    power: "435 pk",
    body: "Coupe",
    color: "Obsidian Black",
    image: "/images/mercedes-amg.jpg",
    gallery: [
      "/images/mercedes-amg.jpg",
      "/images/hero-ye-cars.jpg",
      "/images/showroom.jpg",
    ],
    featured: true,
    description:
      "Een expressieve AMG met veel comfort, moderne assistentiesystemen en een krachtige zescilinder. De samenstelling is ingetogen, maar de rijbeleving allesbehalve.",
    highlights: [
      "AMG Dynamic Plus",
      "Burmester audio",
      "Panoramadak",
      "Head-up display",
      "Memory stoelen",
      "Distronic Plus",
    ],
  },
  {
    slug: "audi-rs6-avant-quattro",
    brand: "Audi",
    model: "RS6 Avant",
    edition: "quattro Carbon Black",
    price: 114950,
    monthly: 1746,
    year: 2022,
    mileage: 39850,
    fuel: "Benzine",
    transmission: "Automaat",
    power: "600 pk",
    body: "Stationwagen",
    color: "Daytona Grey",
    image: "/images/audi-rs6.jpg",
    gallery: [
      "/images/audi-rs6.jpg",
      "/images/hero-ye-cars.jpg",
      "/images/service-car.jpg",
    ],
    featured: true,
    description:
      "De RS6 Avant is een van de meest veelzijdige performance-auto's van zijn generatie. Dit exemplaar combineert een sterke configuratie met lage kilometerstand.",
    highlights: [
      "RS Dynamic pakket",
      "Carbon styling",
      "Keramische remmen",
      "Bang & Olufsen",
      "Matrix LED",
      "RS sportuitlaat",
    ],
  },
  {
    slug: "bmw-m5-competition",
    brand: "BMW",
    model: "M5",
    edition: "Competition Executive",
    price: 74950,
    monthly: 1138,
    year: 2020,
    mileage: 71820,
    fuel: "Benzine",
    transmission: "Automaat",
    power: "625 pk",
    body: "Sedan",
    color: "Marina Bay Blue",
    image: "/images/bmw-m5.jpg",
    gallery: [
      "/images/bmw-m5.jpg",
      "/images/showroom.jpg",
      "/images/hero-ye-cars.jpg",
    ],
    description:
      "Zakelijke luxe en compromisloze prestaties in een herkenbaar M-pakket. Deze M5 is rijk uitgerust en klaar voor zowel lange afstanden als dynamisch gebruik.",
    highlights: [
      "M Driver's Package",
      "Harman Kardon",
      "Laserlicht",
      "Comfort Access",
      "Soft close",
      "Active Driving Assistant",
    ],
  },
  {
    slug: "mclaren-720s-performance",
    brand: "McLaren",
    model: "720S",
    edition: "Performance Coupe",
    price: 239950,
    monthly: 3644,
    year: 2019,
    mileage: 23800,
    fuel: "Benzine",
    transmission: "Automaat",
    power: "720 pk",
    body: "Coupe",
    color: "Silica White",
    image: "/images/mclaren.jpg",
    gallery: [
      "/images/mclaren.jpg",
      "/images/hero-ye-cars.jpg",
      "/images/showroom.jpg",
    ],
    sold: true,
    description:
      "Een lichtgewicht supercar met uitgesproken vormgeving en uitzonderlijke prestaties. Volledig gedocumenteerd en afkomstig uit een liefhebberscollectie.",
    highlights: [
      "Performance interieur",
      "Carbon exterieur",
      "Vehicle lift",
      "Sportuitlaat",
      "360 graden camera",
      "Meridian audio",
    ],
  },
  {
    slug: "ferrari-f8-tributo",
    brand: "Ferrari",
    model: "F8 Tributo",
    edition: "Carbon Racing Seats",
    price: 319950,
    monthly: 4859,
    year: 2021,
    mileage: 14650,
    fuel: "Benzine",
    transmission: "Automaat",
    power: "720 pk",
    body: "Coupe",
    color: "Rosso Corsa",
    image: "/images/ferrari.jpg",
    gallery: [
      "/images/ferrari.jpg",
      "/images/service-car.jpg",
      "/images/showroom.jpg",
    ],
    sold: true,
    description:
      "Een pure middenmotor-Ferrari met een klassieke kleurstelling en een zorgvuldig gekozen optielijst. Een auto voor de serieuze liefhebber.",
    highlights: [
      "Carbon racing seats",
      "Front lift",
      "JBL audio",
      "Racing telemetry",
      "Carbon stuurwiel",
      "Adaptive headlights",
    ],
  },
];

export const availableCars = cars.filter((car) => !car.sold);
export const soldCars = cars.filter((car) => car.sold);

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export const formatMileage = (value: number) =>
  `${new Intl.NumberFormat("nl-NL").format(value)} km`;
