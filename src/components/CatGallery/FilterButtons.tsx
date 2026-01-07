import { categories } from "./catData";
import type { CatCategory } from "./types";

interface FilterButtonsProps {
  activeFilter: CatCategory;
  onFilterChange: (filter: CatCategory) => void;
}

export const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onFilterChange(category.id)}
          className={`filter-btn ${
            activeFilter === category.id ? "filter-btn-active" : "filter-btn-inactive"
          }`}
          aria-pressed={activeFilter === category.id}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};
