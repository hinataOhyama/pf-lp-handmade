import { Hero } from "./_components/1-hero";
import { About } from "./_components/2-about";
import { Products } from "./_components/4-products";
import { Workshop } from "./_components/3-workshop";
import { News } from "./_components/5-news";
import { Access } from "./_components/6-access";
import { Contact } from "./_components/7-contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Workshop />
      <Products />
      <News />
      <Access />
      <Contact />
    </main>
  );
}
