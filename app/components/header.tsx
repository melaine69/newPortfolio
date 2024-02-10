import Button from "./button";
import Link from "next/link";

export default function Header() {
    return (
        <header>

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 mx-auto p-6 max-w-6xl text-lg">
                <div className="sm:flex-1 flex justify-start">
                    <Link title="Mélaine.dev" className="font-bold" href="/">Mélaine.dev</Link>
                </div>
                <nav className="sm:flex-1 flex sm:justify-center">
                    <ul className="flex-shrink-0 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/">À propos</Link></li>
                        <li><Link href="/">Réalisations</Link></li>
                    </ul>
                </nav>
                <div className="absolute top-6 right-6 sm:relative sm:top-0 sm:right-6 sm:flex-1 sm:flex sm:justify-end">
                    <Button>Contact</Button>
                </div>
            </div>
        </header>
    )


}