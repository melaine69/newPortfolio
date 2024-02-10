import clsx from "clsx"
import ArrowRight from "./icons/arrowRight"
import Email from "./icons/email"
import Github from "./icons/github"
import Linkedin from "./icons/linkedin"
export default function Footer() {

    const links = [
        {
            href: "https://www.linkedin.com/in/melaine-dewitte/",
            label: "Linkedin",
            icon: Linkedin,
        },
        {
            href: "https://github.com/melaine69",
            label: "Github",
            icon: Github,
        },
        {
            href: "mailto:melaine.dewitte@icloud.com",
            label: "Email",
            icon: Email,
        },

    ]

    function getDayName(date = new Date(), locale = "fr-FR") {
        return date.toLocaleDateString(locale, { weekday: "long" })
    }
    return (
        <footer className="flex-shrink-0">
            <div className="mx-auto px-6 p-20 max-w-6xl space-y-20 text-lg">
                <div className="grid sm:grid-cols-3 gap-12 mx-auto max-w-4xl">
                    {links.map((link) => (
                        <a
                            className={clsx("group flex items-center gap-2 text-gray-800 py-3 border-b transition transform hover:-translate-y-1",
                                {
                                    "hover:text-[#0D74CE]": link.label === "Linkedin",
                                    "hover:text-black": link.label === "Github",
                                    "hover:text-primary": link.label === "Email",
                                })}
                            href={link.href}
                            key={link.href}
                        >
                            <link.icon className="w-6" />
                            <span>{link.label}</span>
                            <ArrowRight className="ml-auto w-6 text-gray-800 transition tranform rotate-[-45deg] group-hover:-rotate-0" />
                        </a>
                    ))}
                </div>
                <p className="text-gray-500 text-center">
                    © {new Date().getFullYear()} Mélaine Dewitte - Bon {getDayName()} !
                </p>
            </div>
        </footer >
    )
}