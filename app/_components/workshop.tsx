"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";
import Image from "next/image";

const workshops = [
  {
    id: 1,
    title: "陶芸体験",
    description: "初心者の方でも楽しめる陶芸体験。自分だけの器を作ってみませんか？",
    image: "https://images.unsplash.com/photo-1565193298357-c5b46b0ac9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2024年4月15日",
    time: "14:00-16:00",
    capacity: "6名様",
  },
  {
    id: 2,
    title: "手織り体験",
    description: "伝統的な織機を使って、オリジナルのストールを織り上げます。",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2024年4月20日",
    time: "13:00-16:00",
    capacity: "4名様",
  },
  {
    id: 3,
    title: "木工教室",
    description: "木の温もりを感じながら、小物作りを楽しみましょう。",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2024年4月25日",
    time: "10:00-12:00",
    capacity: "5名様",
  },
];

export const Workshop = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light tracking-wider mb-4">ワークショップ</h2>
          <p className="text-gray-600">
            手作りの楽しさを体験できる各種ワークショップを開催しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-48 object-cover"
                  width={800}
                  height={192}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-light mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{workshop.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{workshop.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">{workshop.capacity}</span>
                    </div>
                  </div>
                  <Button className="w-full">予約する</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}