import { User } from "lucide-react"

export default function NoLogin() {
    return (
        <div className="flex flex-col items-center justify-center h-lvh">
            <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 shadow-xs shadow-neutral-800 text-center lg:">
                <User className="text-green-500 mx-auto" size={64} />
            </div>
            <h2 className="text-2xl font-bold mt-6">Vous n'êtes pas connecté</h2>
            <p className="text-neutral-400 mt-4 text-center">Veuillez vous connecter à votre compte pour accéder à vos programmes d'entraînement et suivre votre progression</p>
            {/* google sign in button to be added here later */}
        </div>
    )
}