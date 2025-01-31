"use client";

import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://images.unsplash.com/photo-1580974928064-f0aeef70895a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2560&q=80"
            alt="Hero"
            className="object-cover w-full h-full"
            fill
          />
        </AspectRatio>
      </motion.div>
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center text-white space-y-4"
        >
          <h1 className="text-5xl font-light tracking-wider">手作りの温もり</h1>
          <p className="text-lg font-light tracking-wide">
            一つ一つ丁寧に作り上げる、心を込めた手仕事
          </p>
        </motion.div>
      </div>
    </section>
  );
}