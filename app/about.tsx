"use client";

import { motion} from "framer-motion";

export default function About() {
  const initial = {
    opacity: 0,
    y: 50,
  };

  const whileInView = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  };

    return (
      <section id="about" className="my-10 py-32 border-y">
      <div className="mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={initial}
          whileInView={whileInView}
          viewport={{ once: true }}
          className="mb-12 text-3xl md:text-4xl font-medium"
        >
          À propos
        </motion.h2>

        <div className="space-y-10">
          <motion.p
            initial={initial}
            whileInView={{
              ...whileInView,
              transition: { delay: 0.2, duration: 0.8 },
            }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl leading-snug md:leading-snug wavy"
          >
              Je suis développeuse full-stack. J&#39;aime l'aspect <span className="font-semibold text-primary">créatif</span> du métier, le fait de <span className="text-primary font-semibold italic">construire</span> un projet brique par brique et collaborer avec une équipe pluridisciplinaire. Je suis actuellement en formation chez la Wild Code School et je recherche une <span className="bg-primary rounded-xl px-3 text-white font-semibold">alternance</span> pour cette année ! {" "}
            </motion.p>

            <motion.p className="text-2xl leading-relaxed text-gray-600"
            initial={initial}
            whileInView={{
              ...whileInView,
              transition: { delay: 0.4, duration: 0.8 },
            }}
            viewport={{ once: true }}
          >
              Je m&#39;épanouis pleinement dans les environnements <span className="text-orange-400 underline">collaboratifs</span>. Ma flexibilité me permet d&#39;alterner entre des tâches individuelles, où je peux exprimer ma créativité, et des projets collectifs, où la synergie des idées s&#39;épanouit.
            </motion.p>
          </div>
        </div>
      </section>
    )
}