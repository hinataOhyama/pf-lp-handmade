"use client";

import { motion } from "framer-motion";
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
        <div className="w-full h-full">
          <Image
            src="/hero-bg.jpg"
            alt="Hero"
            className="object-cover object-center"
            fill
          />
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 top-[30%] lg:top-0 lg:right-[50%] flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white space-y-1 text-center lg:text-left"
        >
          <p className="text-sm font-medium tracking-wider">
            handmade warmth .
          </p>
          <p className="text-xs font-light tracking-wide">
            Handcrafted with heart, carefully crafted one by one .
          </p>
        </motion.div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white space-y-4"
        >
          <h1 className="text-3xl font-medium tracking-wider text-center">
            Handmade
            <span className="text-xl block">Workshop</span>
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
