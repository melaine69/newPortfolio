import ArrowRight from "./icons/arrowRight";
import Image, { StaticImageData } from "next/image";

interface Techno {
    title: string;
    photo_url: StaticImageData;
}

interface Props {
    name: string;
    description: string;
    technos: Techno[];
    urlGithub: string;
    urlSite: string;
}

export default function ProjectCard({
    name,
    description,
    technos,
    urlGithub,
    urlSite,
}: Props) {
    return (
        <div className="py-6 transition hover:bg-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-0 mx-auto px-6 max-w-4xl">
                <div className="flex flex-col gap-3 leading-none">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>

                <div className="flex flex-col md:items-end gap-4 md:text-right leading-none">
                    <div className="text-gray-500">
                        {technos.map((techno) => (
                            <Image
                                key={techno.title}
                                alt={techno.title}
                                className="rounded-sm"
                                height="24"
                                src={techno.photo_url}
                                title={techno.title}
                                width="24"
                            />
                        ))}
                    </div>
                    <div className="flex items-center gap-6 font-medium text-sm text-primary">
                        <a
                            className="group flex items-center gap-2"
                            href={urlGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Code Source{" "}
                            <ArrowRight className="w-4 h-4 transform -rotate-45 transition group-hover:rotate-0" />
                        </a>
                        <a
                            className="group flex items-center gap-2"
                            href={urlSite}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Siteweb{" "}
                            <ArrowRight className="w-4 h-4 transform -rotate-45 transition group-hover:rotate-0" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}