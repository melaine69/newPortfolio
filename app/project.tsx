"use client"

import { motion } from "framer-motion";
import ProjectCard from "./components/projectCard";

const projects = [
  {
    name: "Envolia",
    description: "Site vitrine d'une accompagnatrice VAE, services avec formules et articles de blog optimisés",
    urlSite: "https://envolia.melaine.dev/",
    technos: [
        { title: "Wordpress", photo_url: "/assets/wordpress.svg" },
    ]
  },
    {
        name: "Garage Parrot",
        description: "Site d'un garage qui propose des véhicules d'occasions à la vente",
        urlGithub: "https://github.com/melaine69/garage-app",
        urlSite: "https://studi-garage.melaine.dev/",
        technos: [
            { title: "Laravel", photo_url: "/assets/laravel.svg" },
            { title: "Tailwind CSS", photo_url: "/assets/tailwind.svg" }
        ]
    
    },
    {
        name: "Agence de Voyages",
        description: "Site vitrine de Colibri Voyages qui présente des activités, circuits et séjours nationaux et internationaux",
        urlSite: "https://colibri-voyages.melaine.dev/",
        technos: [
            { title: "Wordpress", photo_url: "/assets/wordpress.svg" },
        ]
    },
    {
        name: "Portfolio Photographe",
        description: "Site vitrine pour le portfolio d'un photographe avec galerie et tarifications",
        urlGithub: "https://github.com/melaine69/charles-photographe",
        urlSite: "https://strong-gecko-44e3b1.netlify.app/",
        technos: [
            { title: "Nextjs", photo_url: "/assets/nextjs.svg" },
        ]
    },
    {
        name: "Sandrine diététique",
        description: "Site vitrine d'une diététicienne proposant des recettes en fonction des allergènes de ses patients",
        urlGithub: "https://github.com/melaine69/dieteticien-app",
        urlSite: "/",
        technos: [
            { title: "Laravel", photo_url: "/assets/laravel.svg" },
            { title: "Tailwind CSS", photo_url: "/assets/tailwind.svg" }
        ]
    },
]

export default function Project() {
    const initial = {
        opacity: 0,
        y: 50,
    };

    const whileInView = {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 60,
            mass: 1,
            duration: 0.6,
        },
    };
    return (
        <section id="projects" className="py-32">
        <motion.div
          initial={initial}
          whileInView={whileInView}
          viewport={{ once: true }}
          className="mx-auto mb-12 px-6 max-w-6xl"
        >
          <h2 className="text-3xl md:text-4xl font-medium">Réalisations</h2>
        </motion.div>
  
        <div className="divide-y border-y">
          {projects.map((project, i) => (
            <motion.div
              initial={{
                ...initial,
                x: 100,
                y: 0,
              }}
              whileInView={{
                ...whileInView,
                x: 0,
                transition: {
                  ...whileInView.transition,
                  delay: i * 0.2,
                },
              }}
              viewport={{ once: true }}
              key={project.name}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </section>
    )
}