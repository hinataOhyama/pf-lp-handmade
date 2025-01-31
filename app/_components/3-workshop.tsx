"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const workshops = [
  {
    id: 1,
    title: "陶芸教室",
    description: "伝統的な技法を用いて、世界に一つだけの器を作り上げます。初心者の方でも丁寧にご指導いたします。",
    englishDescription: "Create your own unique pottery using traditional techniques. Beginners are welcome.",
    image: "/workshop-item01.jpg",
  },
  {
    id: 2,
    title: "織物体験",
    description: "手織りの温もりを感じながら、オリジナルの布小物を制作します。素材選びから丁寧にサポートいたします。",
    englishDescription: "Experience the warmth of hand-weaving while creating original fabric items.",
    image: "/workshop-item02.jpg",
  },
  {
    id: 3,
    title: "木工教室",
    description: "自然の木材を使用して、暮らしに寄り添う木工品を制作します。木の質感を活かした作品づくりを体験できます。",
    englishDescription: "Craft wooden items that complement your daily life using natural materials.",
    image: "/workshop-item03.jpg",
  },
];

export const Workshop = () => {
  return (
    <section id="workshop" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-light tracking-wider text-center mb-4">Workshop</h2>

          <div className="space-y-24 mt-16">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {index % 2 === 0 ? (
                    <>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={workshop.image}
                          alt={workshop.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          fill
                        />
                      </div>
                      <div className="space-y-6">
                        <h3 className="text-xl font-light">{workshop.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {workshop.description}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {workshop.englishDescription}
                        </p>
                        <div>
                          <Link
                            href="#"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                          >
                            <span className="mr-2">More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-6">
                        <h3 className="text-xl font-light">{workshop.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {workshop.description}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {workshop.englishDescription}
                        </p>
                        <div>
                          <Link
                            href="#"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                          >
                            <span className="mr-2">More</span>
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={workshop.image}
                          alt={workshop.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          fill
                        />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}