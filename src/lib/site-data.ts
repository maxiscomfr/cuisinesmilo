import realisation011 from "@/assets/realisation-01/1.jpg.asset.json";
import realisation012 from "@/assets/realisation-01/2.jpg.asset.json";
import realisation02 from "@/assets/realisation-02/1.jpg.asset.json";
import realisation03 from "@/assets/realisation-03/1.jpg.asset.json";
import realisation04 from "@/assets/realisation-04/1.jpg.asset.json";
import realisation05 from "@/assets/realisation-05/1.jpg.asset.json";
import realisation06 from "@/assets/realisation-06/1.jpg.asset.json";

export type Realisation = {
  id: string;
  title: string;
  location: string;
  category: "Cuisine" | "Dressing";
  image: string;
};

export const realisations: Realisation[] = [
  {
    id: "r1-1",
    title: "Première réalisation",
    location: "Charente-Maritime",
    category: "Cuisine",
    image: realisation011.url,
  },
  {
    id: "r1-2",
    title: "Première réalisation",
    location: "Charente-Maritime",
    category: "Cuisine",
    image: realisation012.url,
  },
  {
    id: "r2",
    title: "Cuisine laquée blanche, plan marbre noir",
    location: "Charente-Maritime",
    category: "Cuisine",
    image: realisation02.url,
  },
  {
    id: "r3",
    title: "Réalisation",
    location: "Charente-Maritime",
    category: "Cuisine",
    image: realisation03.url,
  },
  {
    id: "r4",
    title: "Cuisine noyer, crédence marbre noir",
    location: "Charente-Maritime",
    category: "Cuisine",
    image: realisation04.url,
  },
  {
    id: "r5",
    title: "Cuisine bois clair avec grande table",
    location: "Charente-Maritime",
    category: "Cuisine",
    image: realisation05.url,
  },
  {
    id: "r6",
    title: "Cuisine bois et noir avec cave à vin",
    location: "Charente-Maritime",
    category: "Cuisine",
    image: realisation06.url,
  },
];


export type Avis = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
};

export const avisList: Avis[] = [
  {
    id: "a1",
    name: "Claire & Julien D.",
    location: "Royan",
    rating: 5,
    text: "Un accompagnement du premier croquis à la pose finale. Milo a su comprendre exactement ce qu'on cherchait. La qualité des finitions est irréprochable.",
    date: "Mars 2026",
  },
  {
    id: "a2",
    name: "Sophie L.",
    location: "Saint-Palais-sur-Mer",
    rating: 5,
    text: "Notre dressing est parfait, dessiné au millimètre pour notre chambre en pente. Merci pour ce sérieux et cette écoute.",
    date: "Janvier 2026",
  },
  {
    id: "a3",
    name: "Marc P.",
    location: "Saujon",
    rating: 5,
    text: "Devis clair, délais respectés, pose soignée. On recommande sans hésiter pour une cuisine sur mesure.",
    date: "Novembre 2025",
  },
  {
    id: "a4",
    name: "Isabelle & Thomas R.",
    location: "Vaux-sur-Mer",
    rating: 5,
    text: "Merci à toute l'équipe pour cette cuisine qui a transformé notre maison. Les matériaux sont magnifiques.",
    date: "Septembre 2025",
  },
];
