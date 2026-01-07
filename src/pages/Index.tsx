import { Header } from "@/components/Header";
import { CatGallery } from "@/components/CatGallery";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CatGallery />
      <footer className="py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Cat Gallery. Made with love for cats everywhere.</p>
      </footer>
    </main>
  );
};

export default Index;
