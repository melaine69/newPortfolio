import Button from "./button";
import Link from "next/link";

export default function Header() {
    return (
        <header>

            <div className="flex items-center mx-auto p-6 max-w-6xl text-lg">
                <div className="flex-1 flex justify-start">
                    <Link title="Mélaine.dev" className="font-bold" href="/">Mélaine.dev</Link>
                </div>
                <nav className="flex-1 flex justify-center">
                    <ul className="flex-shrink-0 flex items-center gap-6">
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/">À propos</Link></li>
                        <li><Link href="/">Réalisations</Link></li>
                    </ul>
                </nav>
                <div className="flex-1 flex justify-end">
                    <Button>Contact</Button>
                </div>
            </div>
        </header>
    )


}