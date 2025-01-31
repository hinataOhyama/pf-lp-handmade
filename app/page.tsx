import { Hero } from "./_components/1-hero";
import { About } from "./_components/2-about";
import { Products } from "./_components/3-products";
import { Workshop } from "./_components/4-workshop";
import { News } from "./_components/5-news";
import { Access } from "./_components/6-access";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Products />
      <Workshop />
      <News />
      <Access />
    </main>
  );
}
