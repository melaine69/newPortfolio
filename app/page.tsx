import ProjectCard from "./components/projectCard";
import About from "./about";
import Hero from "./components/hero";

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

export default function Home() {

  return (
    <div>

      <Hero />

      <About />

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
