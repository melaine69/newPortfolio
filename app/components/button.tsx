interface Props {
    children: React.ReactNode;
}
export default function Button ({children}:Props) {
    return (
        <button className="px-4 py-2 rounded-full bg-primary">{children}</button>

    )
}