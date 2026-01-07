export type CatCategory = "all" | "persian" | "siamese" | "maine-coon" | "bengal";

export interface CatImage {
  id: string;
  name: string;
  category: Exclude<CatCategory, "all">;
  description: string;
  image: string;
}
