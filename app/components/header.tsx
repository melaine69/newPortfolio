import Button from "./button";
import Link from "next/link";
import Download from "./icons/download";

export default function Header() {
    
    return (
        <header>
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 mx-auto p-6 max-w-6xl text-lg">
                <div className="sm:flex-1 flex sm:justify-start">
                    <Link title="Mélaine.dev" className="font-bold" href="/">Mélaine.dev</Link>
                </div>
                <nav className="sm:flex-1 flex sm:justify-center">
                    <ul className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                        <li><a className="transition hover:text-primary hover:font-medium" href="/#hero">Accueil</a></li>
                        <li><a className="transition hover:text-primary hover:font-medium" href="/#about">À propos</a></li>
                        <li><a className="transition hover:text-primary hover:font-medium" href="/#project">Réalisations</a></li>
                    </ul>
                </nav>
                <div className="absolute top-6 right-6 sm:relative sm:top-0 sm:right-6 sm:flex-1 sm:flex sm:justify-end">
                    <div>
                    <Button>
                        <Download className="w-5" />
                        <a href="/assets/CV.pdf" target="_blank" download>CV</a>
                    </Button>
                    </div>
                 
                </div>
            </div>
        </header>
    )


}