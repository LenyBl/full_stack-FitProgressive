import { Target } from 'lucide-react'
import AddProgramButton from './AddProgramButton'

export default function NoProgram() {
    return (
        <div className="flex flex-col items-center justify-center h-lvh">
            <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 shadow-xs shadow-neutral-800 text-center lg:">
                <Target className="text-green-500 mx-auto" size={64} />
            </div>
            <h2 className="text-2xl font-bold mt-6">Aucun programme trouvé</h2>
            <p className="text-neutral-400 mt-4 text-center">Commencez par créer votre premier programme d'entraînement pour suivre votre progression</p>
            <div className="mt-6">
                <AddProgramButton />
            </div>
        </div>
    )
}
