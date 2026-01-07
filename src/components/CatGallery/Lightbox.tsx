import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CatImage } from "./types";

interface LightboxProps {
  cat: CatImage | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const Lightbox = ({
  cat,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: LightboxProps) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          if (hasPrevious) onPrevious();
          break;
        case "ArrowRight":
          if (hasNext) onNext();
          break;
      }
    },
    [onClose, onPrevious, onNext, hasPrevious, hasNext]
  );

  useEffect(() => {
    if (cat) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cat, handleKeyDown]);

  if (!cat) return null;

  return (
    <div
      className="lightbox-backdrop flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${cat.name} cat lightbox`}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:bg-white/20 hover:scale-110 z-10"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Previous button */}
      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="lightbox-nav left-4 md:left-8"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Image container */}
      <div
        className="lightbox-content animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={cat.image}
          alt={`${cat.name} cat - ${cat.description}`}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-2">
            {cat.name}
          </h2>
          <p className="text-white/80 text-lg">{cat.description}</p>
        </div>
      </div>

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="lightbox-nav right-4 md:right-8"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};
