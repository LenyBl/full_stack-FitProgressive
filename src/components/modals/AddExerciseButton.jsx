import { Plus, Dumbbell, Calendar } from 'lucide-react'
import { Barbell, Person, Gear, Hash, TrendUp } from "phosphor-react"
import { motion } from 'motion/react'
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

    const Days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    const [selectedType, setSelectedType] = useState(null);
    const [selectedDays, setSelectedDays] = useState([]);
    const [nameExercise, setNameExercise] = useState('');
    const [markExercise, setMarkExercise] = useState('');
    const [seriesExercise, setSeriesExercise] = useState(3);
    const [repetitionsExercise, setRepetitionsExercise] = useState(10);
    const [weightExercise, setWeightExercise] = useState(0);
    const [weightIncrementExercise, setWeightIncrementExercise] = useState(2.5);

    return (
        <>
            <div className="lg:flex lg:justify-start lg:w-1/2 lg:mx-auto">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-500 cursor-pointer rounded-2xl p-4 mt-8 shadow-md shadow-green-500/20 hover:bg-green-600 lg:px-14" onClick={() => document.getElementById('exercise_modal').showModal()}>
                    <div className="flex items-center justify-center">
                        <button className="flex items-center gap-2 text-neutral-900 font-medium cursor-pointer">
                            <Plus className="w-5 h-5" />
                            Ajouter un exercice
                        </button>
                    </div>
                </motion.div>
            </div>
            <dialog id="exercise_modal" className="modal">
                <div className="modal-box bg-neutral-900 border border-neutral-700 shadow-xs shadow-neutral-800 h-5/6 lg:h-8/9 md:h-5/6">
                    <form method="dialog">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-neutral-700 hover:text-neutral-200" onClick={() => setSelectedType(null)}>✕</motion.button>
                    </form>
                    <div className="flex justify-center items-center">
                        <Dumbbell className="text-green-600 w-8 h-8 mr-4" />
                        <h3 className="font-bold text-lg">Ajouter un exercice</h3>
                    </div>
                    <hr className="mt-4" />
                    <div className="flex flex-col gap-4 mt-6">
                        <label htmlFor="exercise_name" className="text-neutral-400 self-start">Nom de l'exercice *</label>
                        <input id="exercise_name" type="text" value={nameExercise} onChange={e => setNameExercise(e.target.value)} required placeholder="Nom de l'exercice" className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <label htmlFor="exercise_type" className="text-neutral-400 self-start">Type d'exercice *</label>
                        <div className="grid grid-cols-3 gap-4">
                            {TypeExercise.map((type, index) => (
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} key={index} className={selectedType === type.name ? "p-6 rounded-xl shadow-xs cursor-pointer flex flex-col items-center justify-center bg-neutral-900 text-neutral-900 border border-green-600" : "p-6 rounded-xl shadow-xs border cursor-pointer flex flex-col items-center justify-center bg-neutral-900 border-neutral-700 hover:border-green-600 text-neutral-400"} onClick={() => setSelectedType(type.name)}>
                                    {type.icon === 'Person' && <Person className="text-green-600 w-8 h-8 mb-2" />}
                                    {type.icon === 'Barbell' && <Barbell className="text-green-600 w-8 h-8 mb-2" />}
                                    {type.icon === 'Gear' && <Gear className="text-green-600 w-8 h-8 mb-2" />}
                                    <span className={selectedType === type.name ? "font-medium text-green-600 transition text-center" : "font-medium text-center transition"}>{type.name}</span>
                                </motion.div>
                            ))}
                        </div>
                        <label htmlFor="exercise_mark" className="text-neutral-400 self-start">Marque ( optionnel )</label>
                        <input id="exercise_mark" type="text" value={markExercise} onChange={e => setMarkExercise(e.target.value)} required placeholder="Marque de l'équipement" className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex items-center">
                            <Hash className="text-neutral-400 w-5 h-5 mr-2 mt-3" />
                            <span className="text-neutral-400 self-start mt-3">Séries *</span>
                        </div>
                        <input id="exercise_series" type="number" min={1} value={seriesExercise} onChange={e => setSeriesExercise(e.target.value)} required className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex items-center">
                            <TrendUp className="text-neutral-400 w-5 h-5 mr-2 mt-3" />
                            <span className="text-neutral-400 self-start mt-3">Répétitions *</span>
                        </div>
                        <input id="exercise_repetitions" type="number" min={1} value={repetitionsExercise} onChange={e => setRepetitionsExercise(e.target.value)} required className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex items-center">
                            <Dumbbell className="text-neutral-400 w-5 h-5 mr-2 mt-3" />
                            <span className="text-neutral-400 self-start mt-3">Charge initiale ( kg ) *</span>
                        </div>
                        <input id="exercise_weight" step={2.5} type="number" required min={0} value={weightExercise} onChange={e => setWeightExercise(e.target.value)} className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex items-center">
                            <Plus className="text-neutral-400 w-5 h-5 mr-2 mt-3" />
                            <span className="text-neutral-400 self-start mt-3">Incrément de charge ( kg ) *</span>
                        </div>
                        <input id="exercise_weight_increment" step={2.5} type="number" required min={0} value={weightIncrementExercise} onChange={e => setWeightIncrementExercise(e.target.value)} className="input input-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600" />
                        <div className="flex items-center">
                            <Calendar className="text-neutral-400 w-5 h-5 mr-2 mt-3" />
                            <span className="text-neutral-400 self-start mt-3">Jours d'entraînement *</span>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {Days.map((day, index) => (
                                <motion.div
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                    key={index} onClick={() => {
                                        setSelectedDays(prev =>
                                            prev.includes(day)
                                                ? prev.filter(d => d !== day)
                                                : [...prev, day]
                                        )
                                    }} className={`
                                    p-3 rounded-xl shadow-xs border cursor-pointer
                                    flex items-center justify-center
                                    ${selectedDays.includes(day)
                                            ? 'bg-green-500 border-green-600 text-neutral-900 shadow-md shadow-green-500/20'
                                            : 'bg-neutral-900 border-neutral-700 hover:border-green-600 text-neutral-400'
                                        }
                                    `}>
                                    {day}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="modal-action">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-500 hover:bg-green-600 shadow-md shadow-green-500/20 text-neutral-900 font-medium px-6 py-3 rounded-xl w-full cursor-pointer">Ajouter l'exercice</motion.button>
                    </div>
                </div>
            </dialog>
        </>
    )
}