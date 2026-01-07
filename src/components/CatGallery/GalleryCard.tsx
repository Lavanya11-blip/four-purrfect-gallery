import type { CatImage } from "./types";

interface GalleryCardProps {
  cat: CatImage;
  onClick: () => void;
  index: number;
}

export const GalleryCard = ({ cat, onClick, index }: GalleryCardProps) => {
  return (
    <article
      className="gallery-card cursor-pointer group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View ${cat.name} cat`}
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={cat.image}
          alt={`${cat.name} cat - ${cat.description}`}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="gallery-overlay" aria-hidden="true" />
      <div className="gallery-caption">
        <h3 className="font-display text-2xl font-semibold mb-1">{cat.name}</h3>
        <p className="text-sm text-white/80">{cat.description}</p>
      </div>
    </article>
  );
};
