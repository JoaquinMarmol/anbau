import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import ProductsCatalog from "./components/ProductsCatalog";
import Rendimiento from "./components/Rendimiento";
import UltimasNovedades from "./components/UltimasNovedades";
import OperaDesdeSoloLugar from "./components/OperaDesdeSoloLugar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[color:var(--color-surface-200)] overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuienesSomos />
      <ProductsCatalog />
      <Rendimiento />
      <UltimasNovedades />
      <OperaDesdeSoloLugar />
      <Footer />
    </main>
  );
}
