import { Dumbbell } from "lucide-react"

export default function FormSignIn() {
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="bg-green-500 p-4 rounded-2xl mb-4 shadow-lg shadow-green-700/50">
                    <Dumbbell className="text-neutral-950" size={36} />
                </div>
                <span className="text-xl">FitProgressive</span>
                <p className="mt-4 text-neutral-400">Suivez votre progression en musculation</p>
            </div>
            <form className="bg-neutral-900 mt-6 p-6 rounded-lg shadow-md flex flex-col gap-4 border border-neutral-800 max-w-sm">
                <span>Connexion</span>
                <div className="flex flex-col">
                    <label className="mb-2 text-sm" htmlFor="email">Email</label>
                    <input className="p-2 rounded bg-neutral-800 border border-neutral-700 focus:outline-none focus:border-green-500" id="email" type="email" placeholder="Votre email" />
                </div>
            </form>
        </>
    )
}