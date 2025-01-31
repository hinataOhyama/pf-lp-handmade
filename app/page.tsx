import { Hero } from "./_components/1-hero";
import { About } from "./_components/2-about";
import { Products } from "./_components/3-products";
import { Workshop } from "./_components/4-workshop";
import { News } from "./_components/5-news";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Products />
      <Workshop />
      <News />
    </main>
  );
}
