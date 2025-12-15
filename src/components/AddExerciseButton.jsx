import { Plus, Dumbbell } from 'lucide-react'
import { Barbell, Person, Gear, Hash, TrendUp } from "phosphor-react"
import { useState } from 'react'

export default function AddExerciseButton() {

    const TypeExercise = [
        {
            name: 'Poids du corps',
            icon: 'Person',
        },
        {
            name: 'Libre',
            icon: 'Barbell',
        },
        {
            name: 'Machine',
            icon: 'Gear',
        },
    ];

    const [selectedType, setSelectedType] = useState(null);

    return (
        <>
            <div className="lg:flex lg:justify-start lg:w-1/2 lg:mx-auto">
                <div className="bg-green-500 cursor-pointer rounded-2xl p-4 mt-8 shadow-md shadow-green-500/20 hover:bg-green-600 transition lg:px-14" onClick={() => document.getElementById('exercise_modal').showModal()}>
                    <div className="flex items-center justify-center">
                        <button className="flex items-center gap-2 text-neutral-900 font-medium cursor-pointer">
                            <Plus className="w-5 h-5" />
                            Ajouter un exercice
                        </button>
                    </div>
                </div>
            </div>
            <dialog id="exercise_modal" className="modal">
                <div className="modal-box bg-neutral-900 border border-neutral-700 shadow-xs shadow-neutral-800">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-neutral-700 hover:text-neutral-200" onClick={() => setSelectedType(null)}>✕</button>
                    </form>
                    <div className="flex justify-center items-center">
                        <Dumbbell className="text-green-600 w-8 h-8 mr-4" />
                        <h3 className="font-bold text-lg">Ajouter un exercice</h3>
                    </div>
                    <hr className="mt-4" />
                    <div className="flex flex-col gap-4 mt-6">
                        <label htmlFor="exercise_name" className="text-neutral-400 self-start">Nom de l'exercice *</label>
                        <input id="exercise_name" type="text" required placeholder="Nom de l'exercice" className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <label htmlFor="exercise_type" className="text-neutral-400 self-start">Type d'exercice *</label>
                        <div className="grid grid-cols-3 gap-4">
                            {TypeExercise.map((type, index) => (
                                <div key={index} className={selectedType === type.name ? "p-6 rounded-xl shadow-xs cursor-pointer flex flex-col items-center justify-center transition bg-neutral-900 text-neutral-900 border border-green-600" : "p-6 rounded-xl shadow-xs border cursor-pointer flex flex-col items-center justify-center transition bg-neutral-900 border-neutral-700 hover:border-green-600 text-neutral-400"} onClick={() => setSelectedType(type.name)}>
                                    {type.icon === 'Person' && <Person className="text-green-600 w-8 h-8 mb-2" />}
                                    {type.icon === 'Barbell' && <Barbell className="text-green-600 w-8 h-8 mb-2" />}
                                    {type.icon === 'Gear' && <Gear className="text-green-600 w-8 h-8 mb-2" />}
                                    <span className={selectedType === type.name ? "font-medium text-green-600 transition text-center" : "font-medium text-center transition"}>{type.name}</span>
                                </div>
                            ))}
                        </div>
                        <label htmlFor="exercise_mark" className="text-neutral-400 self-start">Marque ( optionnel )</label>
                        <input id="exercise_mark" type="text" placeholder="Marque de l'équipement" className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex">
                            <Hash className="text-neutral-400 w-5 h-5 mr-2 mt-3" />
                            <span className="text-neutral-400 self-start mt-3">Séries *</span>
                        </div>
                        <input id="exercise_series" type="number" min={1} defaultValue={3} required className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex">
                            <TrendUp className="text-neutral-400 w-5 h-5 mr-2 mt-3" />
                            <span className="text-neutral-400 self-start mt-3">Répétitions *</span>
                        </div>
                        <input id="exercise_repetitions" type="number" min={1} defaultValue={10} required className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex">
                            <Dumbbell className="text-neutral-400 w-5 h-5 mr-2 mt-3" />
                            <span className="text-neutral-400 self-start mt-3">Charge initiale ( kg ) *</span>
                        </div>
                        <input id="exercise_weight" step={2.5} type="number" required min={0} defaultValue={0} className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex">
                            <Plus className="text-neutral-400 w-5 h-5 mr-2 mt-3" />
                            <span className="text-neutral-400 self-start mt-3">Incrément de charge ( kg ) *</span>
                        </div>
                        <input id="exercise_weight_increment" step={2.5} type="number" required min={0} defaultValue={2.5} className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                    </div>
                    <div className="modal-action">
                        <button className="bg-green-500 hover:bg-green-600 shadow-md shadow-green-500/20 transition text-neutral-900 font-medium px-6 py-3 rounded-xl w-full cursor-pointer">Ajouter l'exercice</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}