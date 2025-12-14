import { Plus, Target, Clock, Calendar } from "lucide-react"
import { useState } from "react"

export default function AddProgramButton() {

    const Days = [
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
        'Dimanche'
    ];

    const [selectedDays, setSelectedDays] = useState([]);

    return (
        <>
            <div className="bg-green-500 p-3 rounded-xl hover:bg-green-600 cursor-pointer flex items-center ml-4" onClick={() => document.getElementById('form_program').showModal()}>
                <Plus className="text-neutral-900 mr-0 lg:mr-2 md:mr-2" />
                <span className="hidden lg:inline md:inline text-neutral-900 font-medium">
                    Nouveau
                </span>
            </div>
            <dialog id="form_program" className="modal">
                <div className="modal-box bg-neutral-900 border border-neutral-700 shadow-xs shadow-neutral-800">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-neutral-700 hover:text-neutral-200">✕</button>
                    </form>
                    <div className="flex justify-center items-center">
                        <Target className="text-green-600 w-8 h-8 mr-4" />
                        <h3 className="font-bold text-lg text-neutral-200">Ajouter un nouveau programme</h3>
                    </div>
                    <hr className="mt-4" />
                    <div className="mt-6 flex flex-col gap-4">
                        <label htmlFor="program_name" className="text-neutral-400 self-start">Nom du programme *</label>
                        <input id="program_name" type="text" placeholder="Nom du programme" className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex items-center justify-start gap-2">
                            <Target className="text-neutral-400 w-5 h-5" />
                            <label htmlFor="program_goal" className="text-neutral-400 self-start">Objectif du programme *</label>
                        </div>
                        <select className="select select-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600">
                            <option className="bg-neutral-800 hover:bg-green-600">Prise de masse</option>
                            <option className="bg-neutral-800 hover:bg-green-600">Perte de graisse</option>
                            <option className="bg-neutral-800 hover:bg-green-600">Endurance</option>
                            <option className="bg-neutral-800 hover:bg-green-600">Force</option>
                        </select>
                        <div className="flex items-center justify-start gap-2">
                            <Clock className="text-neutral-400 w-5 h-5" />
                            <label htmlFor="program_duration" className="text-neutral-400 self-start">Durée du programme * ( semaines )</label>
                        </div>
                        <input id="program_duration" defaultValue={1} min={1} type="number" className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex items-center justify-start gap-2">
                            <Calendar className="text-neutral-400 w-5 h-5" />
                            <label htmlFor="program_days" className="text-neutral-400 self-start">Jours d'entraînement *</label>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {Days.map((day, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setSelectedDays(prev =>
                                            prev.includes(day)
                                                ? prev.filter(d => d !== day)
                                                : [...prev, day]
                                        )
                                    }}
                                    className={`
                                        p-3 rounded-xl shadow-xs border cursor-pointer
                                        flex items-center justify-center transition
                                        ${selectedDays.includes(day)
                                            ? 'bg-green-500 border-green-600 text-neutral-900 shadow-md shadow-green-500/20'
                                            : 'bg-neutral-900 border-neutral-700 hover:border-green-600 text-neutral-400'
                                        }
                                    `}>
                                    <span className="text-neutral-200 font-medium">
                                        {day}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <span className="text-neutral-600 text-center mt-2">{selectedDays.length < 2 ? selectedDays.length + " jour sélectionné" : selectedDays.length + " jours sélectionnés"}</span>
                        <div className="modal-action mt-2">
                            <button className="bg-green-500 hover:bg-green-600 shadow-md shadow-green-500/20 transition text-neutral-900 font-medium px-6 py-3 rounded-xl w-full cursor-pointer">Créer le programme</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}