"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <h2 className="text-3xl font-light tracking-wider">私たちについて</h2>
          <p className="text-gray-600 leading-relaxed">
            自然の素材を活かし、伝統的な技法と現代的なデザインを融合させた作品づくりを心がけています。
            一つ一つの作品に込められた想いと技術が、使う人の暮らしに寄り添い、
            日々の生活に温かみと豊かさをもたらすことを願っています。
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <Image
                  src="/about-item01.jpg"
                  alt="Craftsmanship"
                  className="w-full h-48 object-cover mb-4"
                  width={800}
                  height={192}
                />
                <h3 className="text-xl font-light mb-2">丁寧な手仕事</h3>
                <p className="text-gray-600">
                  熟練の職人による手作業で、一点一点心を込めて制作しています。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <Image
                  src="/about-item02.jpg"
                  alt="Materials"
                  className="w-full h-48 object-cover mb-4"
                  width={800}
                  height={192}
                />
                <h3 className="text-xl font-light mb-2">厳選素材</h3>
                <p className="text-gray-600">
                  自然素材にこだわり、環境に優しい材料を使用しています。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <Image
                  src="about-item03.jpg"
                  alt="Design"
                  className="w-full h-48 object-cover mb-4"
                  width={800}
                  height={192}
                />
                <h3 className="text-xl font-light mb-2">デザイン</h3>
                <p className="text-gray-600">
                  伝統と現代を融合させた、シンプルで美しいデザインを追求しています。
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}