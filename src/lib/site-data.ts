import cuisine1 from "@/assets/cuisine-1.jpg";
import cuisine2 from "@/assets/cuisine-2.jpg";
import cuisine3 from "@/assets/cuisine-3.jpg";
import dressing1 from "@/assets/dressing-1.jpg";
import dressing2 from "@/assets/dressing-2.jpg";

export type Realisation = {
  id: string;
  title: string;
  location: string;
  category: "Cuisine" | "Dressing";
  image: string;
};

export const realisations: Realisation[] = [
  { id: "r1", title: "Cuisine chêne et pierre", location: "Royan", category: "Cuisine", image: cuisine1 },
  { id: "r2", title: "Cuisine noyer & marbre", location: "Saint-Palais-sur-Mer", category: "Cuisine", image: cuisine2 },
  { id: "r3", title: "Dressing chêne clair", location: "Saujon", category: "Dressing", image: dressing1 },
  { id: "r4", title: "Placards coulissants", location: "Vaux-sur-Mer", category: "Dressing", image: dressing2 },
  { id: "r5", title: "Cuisine linéaire beige", location: "La Tremblade", category: "Cuisine", image: cuisine3 },
  { id: "r6", title: "Cuisine bois & blanc", location: "Meschers", category: "Cuisine", image: cuisine1 },
  { id: "r7", title: "Dressing sur mesure", location: "Royan", category: "Dressing", image: dressing2 },
  { id: "r8", title: "Cuisine ouverte", location: "Saint-Georges-de-Didonne", category: "Cuisine", image: cuisine3 },
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
