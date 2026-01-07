import { Cat } from "lucide-react";

export const Header = () => {
  return (
    <header className="py-12 md:py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto animate-slide-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
          <Cat className="w-8 h-8 text-primary" />
        </div>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
          Cat Gallery
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Explore our curated collection of beautiful feline breeds. Click on any image to view it in full glory.
        </p>
      </div>
    </header>
  );
};
