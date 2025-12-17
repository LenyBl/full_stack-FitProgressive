import { Dumbbell, Trash, SquarePen, Plus, Minus } from "lucide-react"
import { useState } from "react"
import { Barbell, Person, Gear } from "phosphor-react"
import { motion } from "motion/react";
import DeleteExercise from "./modals/DeleteExercise"
import EditExercise from "./modals/EditExercise.jsx"

export default function ExerciseCard({ exercise }) {

    const [hoverTrash, setHoverTrash] = useState(false);
    const [hoverEdit, setHoverEdit] = useState(false);
    const [hoverMinus, setHoverMinus] = useState(false);
    const [hoverPlus, setHoverPlus] = useState(false);


    const [weight, setWeight] = useState(exercise.weight);

    return (
        <div className="bg-neutral-900 rounded-2xl p-6 mt-8 shadow-xs border border-neutral-700 lg:w-full">
            <div className="flex items-center mb-4">
                <div className="bg-neutral-800 rounded-xl  flex items-center w-1/4 justify-center lg:w-1/6 h-20 md:w-1/6 ">
                    {exercise.type === "Libre" && <Barbell className="text-green-600 w-8 h-8 inline-block m-4" />}
                    {exercise.type === "Poids du corps" && <Person className="text-green-600 w-8 h-8 inline-block m-4" />}
                    {exercise.type === "Machine" && <Gear className="text-green-600 w-8 h-8 inline-block m-4" />}
                </div>
                <div className="ml-4 flex flex-col">
                    <div className="flex flex-col">
                        <span className="font-medium text-neutral-200 lg:mb-2 md:mb-2">{exercise.name}</span>

                    </div>
                    <span className="text-neutral-400 text-sm mt-2">{exercise.type}</span>
                </div>
                <div className="ml-auto flex gap-2 lg:gap-4">
                    <EditExercise hoverEdit={hoverEdit} setHoverEdit={setHoverEdit} exerciseId={exercise.id} />
                    <DeleteExercise hoverTrash={hoverTrash} setHoverTrash={setHoverTrash} exerciseId={exercise.id}/>
                </div>
            </div>
            <div className="flex justify-center items-center mt-2">
                <div className="flex justify-between items-center w-full lg:w-1/2 md:w-1/2 gap-6">
                    <span className="text-neutral-400">Séries : <span className="text-neutral-200 font-medium">{exercise.series}</span></span>
                    <span className="text-neutral-400">Répétitions : <span className="text-neutral-200 font-medium">{exercise.reps}</span></span>
                </div>
            </div>
            <div className="bg-neutral-900 rounded-2xl p-4 mt-4 shadow-xs border border-neutral-700">
                <span className="text-neutral-400">Charge :</span>
                <div className="flex justify-between items-center mt-6 mb-4 md:mx-10 lg:mx-10">
                    <motion.button whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }} onClick={() => setWeight(weight - exercise.weightIncrement)} onMouseEnter={() => setHoverMinus(true)} onMouseLeave={() => setHoverMinus(false)} className={hoverMinus ? "bg-green-500 p-2 rounded-xl cursor-pointer flex items-center" : "bg-neutral-800 p-2 rounded-xl hover:bg-neutral-700 cursor-pointer flex items-center"}>
                        <Minus className={hoverMinus ? "text-neutral-900" : "text-neutral-300"} />
                    </motion.button>
                    <span className="text-neutral-200 font-medium text-xl lg:text-2xl mx-4">{weight} kg</span>
                    <motion.button whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }} onClick={() => setWeight(weight + exercise.weightIncrement)} onMouseEnter={() => setHoverPlus(true)} onMouseLeave={() => setHoverPlus(false)} className={hoverPlus ? "bg-green-500 p-2 rounded-xl cursor-pointer flex items-center" : "bg-neutral-800 p-2 rounded-xl hover:bg-neutral-700 cursor-pointer flex items-center"}>
                        <Plus className={hoverPlus ? "text-neutral-900" : "text-neutral-300"} />
                    </motion.button>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                {exercise.mark && <span className="text-neutral-500 text-sm">( {exercise.mark} )</span>}
            </div>
        </div>
    )
}