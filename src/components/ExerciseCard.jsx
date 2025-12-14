import { Dumbbell, Trash, SquarePen, Plus, Minus } from "lucide-react"
import { useState } from "react"
import { Barbell, Person, Gear} from "phosphor-react"

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
                    <div>
                        <span className="font-medium text-neutral-200 lg:mb-2 md:mb-2">{exercise.name}</span>
                        {exercise.Mark && <span className="text-neutral-500 text-sm ml-2">( {exercise.Mark} )</span>}
                    </div>
                    <span className="text-neutral-400 text-sm">{exercise.type}</span>
                </div>
                <div className="ml-auto flex gap-2 lg:gap-4">
                    <div onMouseEnter={() => setHoverEdit(true)} onMouseLeave={() => setHoverEdit(false)} className="bg-neutral-800 p-2 rounded-xl hover:bg-yellow-600 transition cursor-pointer flex items-center">
                        <SquarePen className={hoverEdit ? "text-neutral-200" : "text-neutral-400"} />
                    </div>
                    <div onMouseEnter={() => setHoverTrash(true)} onMouseLeave={() => setHoverTrash(false)} className="bg-neutral-800 p-2 rounded-xl hover:bg-red-600 transition cursor-pointer flex items-center">
                        <Trash className={hoverTrash ? "text-neutral-200" : "text-neutral-400"} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex md:flex-row gap-8 md:gap-20 lg:gap-96 justify-center w-full">
                    <span className="text-neutral-400">Séries : <span className="text-neutral-200 font-medium">{exercise.series}</span></span>
                    <span className="text-neutral-400">Répétitions : <span className="text-neutral-200 font-medium">{exercise.reps}</span></span>
                </div>
            </div>
            <div className="bg-neutral-900 rounded-2xl p-4 mt-4 shadow-xs border border-neutral-700">
                <span className="text-neutral-400">Charge :</span>
                <div className="flex justify-between items-center mt-6 mb-4 md:mx-10 lg:mx-10">
                    <button onClick={() => setWeight(weight - exercise.weightIncrement)} onMouseEnter={() => setHoverMinus(true)} onMouseLeave={() => setHoverMinus(false)} className={hoverMinus ? "bg-green-500 transition p-2 rounded-xl cursor-pointer flex items-center" : "bg-neutral-800 transition p-2 rounded-xl hover:bg-neutral-700 cursor-pointer flex items-center"}>
                        <Minus className={hoverMinus ? "text-neutral-900" : "text-neutral-300"} />
                    </button>
                    <span className="text-neutral-200 font-medium text-xl lg:text-2xl mx-4">{weight} kg</span>
                    <button onClick={() => setWeight(weight + exercise.weightIncrement)} onMouseEnter={() => setHoverPlus(true)} onMouseLeave={() => setHoverPlus(false)} className={hoverPlus ? "bg-green-500 transition p-2 rounded-xl cursor-pointer flex items-center" : "bg-neutral-800 transition p-2 rounded-xl hover:bg-neutral-700 cursor-pointer flex items-center"}>
                        <Plus className={hoverPlus ? "text-neutral-900" : "text-neutral-300"} />
                    </button>
                </div>
            </div>
        </div>
    )
}