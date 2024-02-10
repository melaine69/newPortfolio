interface Props {
    children: React.ReactNode;
}
export default function Button ({children}:Props) {
    return (
        <button className="group relative px-5 py-2.5 text-sm font-semibold text-white">
            <div className="z-0 absolute inset-0 w-full h-full rounded-full bg-primary transform transition group-hover:scale-110">
                </div>
                <div className="relative flex items-center gap-2">{children}</div></button>

    )
}