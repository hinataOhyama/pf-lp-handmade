"use client";

import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Products = () => {
  const products = [
    {
      id: 1,
      name: "手織りストール",
      image: "/products-item01.jpg",
      description: "柔らかな肌触りと優しい色合いが特徴の手織りストール",
    },
    {
      id: 2,
      name: "陶器",
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "日常使いに最適な、温かみのある陶器",
    },
    {
      id: 3,
      name: "木工品",
      image: "/products-item03.jpg",
      description: "木の質感を活かした、機能的な木工品",
    },
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light tracking-wider mb-4">作品一覧</h2>
          <p className="text-gray-600">
            心を込めて作り上げた、一点物の手作り作品たち
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid grid-rows-[auto_1fr] h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <AspectRatio ratio={4/3}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                  />
                </AspectRatio>
                <div className="grid row-span-3 grid-rows-[auto_1fr_auto] p-6">
                  <h3 className="text-xl font-light mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button variant="outline" className="w-full">
                    詳しく見る
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}