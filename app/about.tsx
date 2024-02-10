
export default function About() {

    return (
        <section
        id="about"
        className="mx-auto my-10 py-32 border-y"
    
        >
        <div className="mx-auto px-6 max-w-6xl">
          <h2 className="mb-12 text-4xl font-medium">À propos</h2>
          <div className="space-y-10">
            <p className="text-3xl md:text-4xl leading-snug md:leading-snug"
             >
              Je suis développeuse full-stack. J'aime l'aspect <span className="font-semibold text-primary">créatif</span> du métier, le fait de <span className="text-primary font-semibold italic">construire</span> un projet brique par brique et collaborer avec une équipe pluridisciplinaire. Je suis actuellement en formation chez la Wild Code School et je recherche une <span className="bg-primary rounded-xl px-3 text-white font-semibold">alternance</span> pour cette année ! {" "}
            </p>

            <p className="text-2xl leading-relaxed text-gray-600"
          >
              Je m'épanouis pleinement dans les environnements <span className="text-orange-400 underline">collaboratifs</span>. Ma flexibilité me permet d'alterner entre des tâches individuelles, où je peux exprimer ma créativité, et des projets collectifs, où la synergie des idées s'épanouit.
            </p>
          </div>
        </div>
      </section>
    )
}