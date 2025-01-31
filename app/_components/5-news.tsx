"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const news = [
  {
    id: 1,
    date: "2024.03.20",
    category: "お知らせ",
    title: "春の新作展示会開催のお知らせ",
    description: "4月1日より、春の新作コレクションの展示会を開催いたします。",
    image: "https://images.unsplash.com/photo-1523593288063-6a71f2b34bcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    date: "2024.03.15",
    category: "ワークショップ",
    title: "陶芸体験の追加開催が決定",
    description: "ご好評につき、陶芸体験の追加開催が決定いたしました。",
    image: "https://images.unsplash.com/photo-1565193298357-c5b46b0ac9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    date: "2024.03.10",
    category: "メディア",
    title: "地域情報誌に掲載されました",
    description: "地域の伝統工芸を特集する記事で当工房が紹介されました。",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export const News = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light tracking-wider mb-4">お知らせ</h2>
          <p className="text-gray-600">最新の情報をお届けします</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  width={800}
                  height={192}
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="px-3 py-1 text-xs bg-gray-100 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-light mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Button variant="outline" className="w-full">
                    詳しく見る
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}