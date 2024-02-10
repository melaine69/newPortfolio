export default function Footer() {

    function getDayName(date = new Date(), locale = "fr-FR") {
        return date.toLocaleDateString(locale, {weekday: "long"})
    }
    return (
        <footer className="flex-shrink-0">
            <div className="mx-auto p-6 max-w-6xl text-lg">
                <p className="text-gray-500 text-center">
                © {new Date().getFullYear()} Mélaine Dewitte - Bon {getDayName()} !
                </p>
            </div>
        </footer>
    )
}