"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Ping from "./ping";

export default function Hero() {
  const initial = {
    opacity: 0,
    y: 50,
  };

  const whileInView = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  };

  return (
    <section
      id="hero"
      className="grid md:grid-cols-2 gap-12 mx-auto px-6 max-w-6xl"
    >
      <div className="py-20 space-y-6">
        <motion.div
          initial={initial}
          whileInView={whileInView}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-2 text-primary rounded-full border border-black/5"
        >
          <Ping />
          <span>Disponible pour un stage</span>
        </motion.div>

        <motion.h1
          initial={initial}
          whileInView={{
            ...whileInView,
            transition: { delay: 0.2, duration: 1 },
          }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-tight md:leading-tight"
        >
          Mélaine Dewitte—Développeuse web passionnée.
        </motion.h1>
      </div>

      <div className="px-20 py-10">
        <div className="relative">
          <motion.div
            initial={{
              ...initial,
              rotate: -6,
            }}
            whileInView={{
              ...whileInView,
              rotate: 0,
              transition: { delay: 0.4, duration: 1 },
            }}
            viewport={{ once: true }}
          >
            <Image
              className="z-10 w-full h-[400px] object-cover rounded-2xl"
              src="/assets/photoPro.png"
              width={3888}
              height={5833}
              alt="Mélaine Dewitte"
            />
          </motion.div>

          <div className="-z-[1] absolute top-0 right-0 w-full h-full wavy-bg transform translate-x-10 translate-y-10" />
        </div>
      </div>
    </section>
  );
}