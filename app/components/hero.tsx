"use client";

import Image from "next/image";
import Ping from "./ping";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Hero() {
    const ref = useRef(null);
    const inView = useInView(ref);

    const container = {
        hidden: { y: 100, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    };

    return (
        <motion.section
            id="hero"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid md:grid-cols-2 gap-12 mx-auto px-6 max-w-6xl"
            ref={ref}
        >
            <div className="py-20 space-y-6">
                <motion.div
                    variants={item}
                    className="inline-flex items-center gap-3 px-6 py-2 text-primary rounded-full border border-black/5"
                >
                    <Ping />
                    <span>Disponible pour un stage</span>
                </motion.div>

                <motion.h1
                    variants={item}
                    className="text-4xl sm:text-5xl md:text-6xl leading-tight sm:leading-tight md:leading-tight"
                >
                    Mélaine Dewitte—Développeuse web passionnée.
                </motion.h1>
            </div>

            <div className="px-20 py-10">
                <div className="relative">
                    <motion.div variants={item}>
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
        </motion.section>
    );
}
