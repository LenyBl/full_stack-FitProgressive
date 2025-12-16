import { SquarePen, Plus, Dumbbell, Clock, Calendar, Target } from "lucide-react"
import { useState } from "react"
import { motion } from "motion/react"

export default function EditProgram({ hoverEdit, setHoverEdit, programId }) {

    const Days = [
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi',
        'Dimanche'
    ];

    const [nameProgram, setNameProgram] = useState('');
    const [goalProgram, setGoalProgram] = useState('Prise de masse');
    const [durationProgram, setDurationProgram] = useState(1);
    const [selectedDays, setSelectedDays] = useState([]);

    return (
        <>
            <motion.div whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }} onMouseEnter={() => setHoverEdit(true)} onMouseLeave={() => setHoverEdit(false)} onClick={() => document.getElementById('edit_program_modal').showModal()} className="bg-neutral-800 ml-2 p-3 rounded-xl hover:bg-yellow-600 cursor-pointer flex items-center">
                <SquarePen className={hoverEdit ? "text-neutral-200" : "text-neutral-600"} />
            </motion.div>
            <dialog id="edit_program_modal" className="modal">
                <div className="modal-box bg-neutral-900 border border-neutral-700 shadow-xs shadow-neutral-800">
                    <form method="dialog">
                        <motion.button whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-neutral-700 hover:text-neutral-200" onClick={() => setSelectedDays([])}>✕</motion.button>
                    </form>
                    <div className="flex justify-center items-center">
                        <Target className="text-green-600 w-8 h-8 mr-4" />
                        <h3 className="font-bold text-lg text-neutral-200">Modifier le programme</h3>
                    </div>
                    <hr className="mt-4" />
                    <div className="mt-6 flex flex-col gap-4">
                        <label htmlFor="program_name" className="text-neutral-400 self-start">Nom du programme *</label>
                        <input id="program_name" type="text" placeholder="Nom du programme" value={nameProgram} onChange={e => setNameProgram(e.target.value)} className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex items-center justify-start gap-2">
                            <Target className="text-neutral-400 w-5 h-5" />
                            <label htmlFor="program_goal" className="text-neutral-400 self-start">Objectif du programme *</label>
                        </div>
                        <select value={goalProgram} onChange={e => setGoalProgram(e.target.value)} className="select select-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600">
                            <option className="bg-neutral-800 hover:bg-green-600">Prise de masse</option>
                            <option className="bg-neutral-800 hover:bg-green-600">Perte de graisse</option>
                            <option className="bg-neutral-800 hover:bg-green-600">Endurance</option>
                            <option className="bg-neutral-800 hover:bg-green-600">Force</option>
                        </select>
                        <div className="flex items-center justify-start gap-2">
                            <Clock className="text-neutral-400 w-5 h-5" />
                            <label htmlFor="program_duration" className="text-neutral-400 self-start">Durée du programme * ( semaines )</label>
                        </div>
                        <input id="program_duration" value={durationProgram} min={1} type="number" onChange={e => setDurationProgram(e.target.value)} className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex items-center justify-start gap-2">
                            <Calendar className="text-neutral-400 w-5 h-5" />
                            <label htmlFor="program_days" className="text-neutral-400 self-start">Jours d'entraînement *</label>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {Days.map((day, index) => (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }}
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
                                        flex items-center justify-center
                                        ${selectedDays.includes(day)
                                            ? 'bg-green-500 border-green-600 text-neutral-900 shadow-md shadow-green-500/20'
                                            : 'bg-neutral-900 border-neutral-700 hover:border-green-600 text-neutral-400'
                                        }
                                    `}>
                                    <span className="text-neutral-200 font-medium">
                                        {day}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        <span className="text-neutral-600 text-center mt-2">{selectedDays.length < 2 ? selectedDays.length + " jour sélectionné" : selectedDays.length + " jours sélectionnés"}</span>
                        <div className="modal-action mt-2">
                            <motion.button whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }} className="bg-green-500 hover:bg-green-600 shadow-md shadow-green-500/20 text-neutral-900 font-medium px-6 py-3 rounded-xl w-full cursor-pointer">Modifier le programme</motion.button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}