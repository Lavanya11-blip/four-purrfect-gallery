import { useState, useMemo } from "react";
import { FilterButtons } from "./FilterButtons";
import { GalleryCard } from "./GalleryCard";
import { Lightbox } from "./Lightbox";
import { cats } from "./catData";
import type { CatCategory, CatImage } from "./types";

export const CatGallery = () => {
  const [activeFilter, setActiveFilter] = useState<CatCategory>("all");
  const [selectedCat, setSelectedCat] = useState<CatImage | null>(null);

  const filteredCats = useMemo(() => {
    if (activeFilter === "all") return cats;
    return cats.filter((cat) => cat.category === activeFilter);
  }, [activeFilter]);

  const currentIndex = selectedCat
    ? filteredCats.findIndex((cat) => cat.id === selectedCat.id)
    : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedCat(filteredCats[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredCats.length - 1) {
      setSelectedCat(filteredCats[currentIndex + 1]);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Cat gallery"
        >
          {filteredCats.map((cat, index) => (
            <GalleryCard
              key={cat.id}
              cat={cat}
              index={index}
              onClick={() => setSelectedCat(cat)}
            />
          ))}
        </div>

        {filteredCats.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No cats found in this category.
          </p>
        )}
      </div>

      <Lightbox
        cat={selectedCat}
        onClose={() => setSelectedCat(null)}
        onPrevious={handlePrevious}
        onNext={handleNext}
        hasPrevious={currentIndex > 0}
        hasNext={currentIndex < filteredCats.length - 1}
      />
    </section>
  );
};
