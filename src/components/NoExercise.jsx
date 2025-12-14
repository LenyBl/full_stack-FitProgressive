import { Dumbbell } from 'lucide-react'

export default function NoExercise({ day }) {
    return (
        <div className="bg-neutral-900 rounded-2xl p-6 mt-8 shadow-xs border border-neutral-700 lg:w-1/2 lg:mx-auto">
            <div className="my-6">
                <div className="bg-neutral-800 rounded-full flex items-center justify-center w-16 h-16 mx-auto">
                    <Dumbbell className="text-neutral-600 w-8 h-8" />
                </div>
                <div className="text-center mt-4">
                    <h2 className="font-medium text-neutral-400">Aucun exercice pour {day}</h2>
                    <p className="text-neutral-500 mt-2">Commencez par ajouter votre premier exercice</p>
                </div>
            </div>
        </div>
    )
}