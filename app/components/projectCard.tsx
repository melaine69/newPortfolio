interface Props {
    name: string,
    description: string,
  }
export default function ProjectCard({ name, description}: Props) {
    return (
        <div className="group py-4 transition hover:bg-orange-200">
            <div className="mx-auto px-6 max-w-6xl">
                <h2 className="mb-2 text-xl">{name}</h2>
                <p className="">{description}</p>

            </div>
        </div>
    )
}