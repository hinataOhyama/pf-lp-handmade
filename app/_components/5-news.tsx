"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const news = [
  {
    id: 1,
    date: "2024.3.20",
    title: "春の新作展示会開催のお知らせ",
    subtitle: "4月1日より、春の新作コレクションの展示会を開催いたします。",
  },
  {
    id: 2,
    date: "2024.3.15",
    title: "陶芸ワークショップの追加開催が決定",
    subtitle: "ご好評につき、陶芸体験の追加開催が決定いたしました。",
  },
  {
    id: 3,
    date: "2024.3.10",
    title: "地域情報誌に掲載されました",
    subtitle: "地域の伝統工芸を特集する記事で当工房が紹介されました。",
  },
];

export const News = () => {
  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-light tracking-wider text-center mb-16">
            お知らせ
          </h2>

          <div className="space-y-8">
            {news.map((item) => (
              <motion.div
                key={item.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href="#"
                  className="block hover:bg-gray-50 transition-colors duration-300 p-6"
                >
                  <div className="flex flex-col space-y-2">
                    <span className="text-gray-500">{item.date}</span>
                    <h3 className="text-lg font-light">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.subtitle}</p>
                  </div>
                </Link>
                <div className="border-b border-gray-200 mt-6" />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="#"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <span className="mr-2">More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
