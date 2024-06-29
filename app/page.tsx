import Hero from "./_components/Hero";
import Collection from "./_components/Collection";
import TrendingProduct from "./_components/TrendingProduct";
import Testimonials from "./_components/Testimonials";
import Perks from "./_components/Perks";
import Footer from "./_components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collection />
      <TrendingProduct />
      <Testimonials />
      <Perks />
      <Footer />
    </>
  );
}
