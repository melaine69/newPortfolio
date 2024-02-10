import Image from "next/image";
import Ping from "./components/ping";
import ProjectCard from "./components/projectCard";

const projects = [
  {
    name: "Garage Parrot",
    description: "Description du projet",
    urlGithub: "/",
    urlSite: "/"
  },
  {
    name: "Agence de Voyages",
    description: "Description du projet",
    urlGithub: "/",
    urlSite: "/"
  },
  {
    name: "Portfolio Photographe",
    description: "Description du projet",
    urlGithub: "/",
    urlSite: "/"
  },
  {
    name: "Sandrine diététique",
    description: "Description du projet",
    urlGithub: "/",
    urlSite: "/"
  },
  {
    name: "Mon ancien Portfolio",
    description: "Description du projet",
    urlGithub: "/",
    urlSite: "/"
  },

]

export default function Home() {

  return (
    <div>
      <section id="hero" className="grid md:grid-cols-2 py-20 gap-12 mx-auto px-6 max-w-6xl">
        <div className="py-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/5">
            <Ping />
            <span className="font-bold text-primary">Disponible pour une alternance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-tight sm:leading-tight">Mélaine Dewitte - Développeuse web passionnée.</h1>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto my-10 py-32 border-y">
        <div className="mx-auto px-6 max-w-6xl">
          <h2 className="mb-12 text-4xl font-medium">À propos</h2>
          <div className="space-y-10">
            <p className="text-3xl md:text-4xl leading-snug md:leading-snug">
              Je suis développeuse full-stack. J'aime l'aspect <span className="font-semibold text-primary">créatif</span> du métier, le fait de <span className="text-primary font-semibold italic">construire</span> un projet brique par brique et collaborer avec une équipe pluridisciplinaire. Je suis actuellement en formation chez la Wild Code School et je recherche une <span className="bg-primary rounded-xl px-3 text-white font-semibold">alternance</span> pour cette année ! {" "}
            </p>

            <p className="text-2xl leading-relaxed text-gray-600">
              <span>Je m'épanouis pleinement dans les environnements <span className="decoration-orange-400">collaboratifs</span>. Ma flexibilité me permet d'alterner entre des tâches individuelles, où je peux exprimer ma créativité, et des projets collectifs, où la synergie des idées s'épanouit</span>
            </p>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="py-32">
        <div className="mx-auto mb-12 px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-medium">Réalisations</h2>

        </div>

        <div className="divide-y border-y">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
