import persianCat from "@/assets/persian-cat.jpg";
import siameseCat from "@/assets/siamese-cat.jpg";
import maineCoonCat from "@/assets/maine-coon-cat.jpg";
import bengalCat from "@/assets/bengal-cat.jpg";
import type { CatImage } from "./types";

export const cats: CatImage[] = [
  {
    id: "persian-1",
    name: "Persian",
    category: "persian",
    description: "Elegant and fluffy with a luxurious cream coat",
    image: persianCat,
  },
  {
    id: "siamese-1",
    name: "Siamese",
    category: "siamese",
    description: "Striking blue eyes with distinctive dark points",
    image: siameseCat,
  },
  {
    id: "maine-coon-1",
    name: "Maine Coon",
    category: "maine-coon",
    description: "Majestic gentle giant with flowing fur",
    image: maineCoonCat,
  },
  {
    id: "bengal-1",
    name: "Bengal",
    category: "bengal",
    description: "Exotic leopard-like markings with athletic build",
    image: bengalCat,
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "persian", label: "Persian" },
  { id: "siamese", label: "Siamese" },
  { id: "maine-coon", label: "Maine Coon" },
  { id: "bengal", label: "Bengal" },
] as const;
