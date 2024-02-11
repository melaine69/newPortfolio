"use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./projectCard"

export default function Project() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, once: true });

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
        hidden: { y: 100, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stifness: 100, duration: 0.3 } },
    };
    
    const projects = [
        {
            name: "Garage Parrot",
            description: "Site d'un garage qui propose des véhicules d'occasions à la vente",
            urlGithub: "/",
            urlSite: "/"
        },
        {
            name: "Agence de Voyages",
            description: "Site vitrine de Colibri Voyages qui présente des activités, circuits et séjours nationaux et internationaux",
            urlGithub: "/",
            urlSite: "/"
        },
        {
            name: "Portfolio Photographe",
            description: "Site vitrine pour le portfolio d'un photographe avec galerie et tarifications",
            urlGithub: "/",
            urlSite: "/"
        },
        {
            name: "Sandrine diététique",
            description: "Site vitrine d'une diététicienne proposant des recettes en fonction des allergènes de ses patients",
            urlGithub: "/",
            urlSite: "/"
        },
    ]

    return (
        <motion.section
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            ref={ref}
            variants={container}
            id="projects"
            className="py-32"
        >
            <motion.div variants={item} className="mx-auto mb-12 px-6 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-medium">Réalisations</h2>
            </motion.div>

            <div className="divide-y border-y">
                {projects.map((project) => (
                    <motion.div variants={item} key={project.name}>
                        <ProjectCard  {...project} />
                    </motion.div>
                ))}
            </div>
        </motion.section>
    )
}