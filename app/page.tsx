import { About } from "./_components/about";
import { Hero } from "./_components/hero";
import { Products } from "./_components/products";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Products />
    </main>
  );
}
