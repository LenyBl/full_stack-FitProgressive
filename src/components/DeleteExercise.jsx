import { Trash } from "lucide-react";
import { motion } from "motion/react";

export default function DeleteExercise({ hoverTrash, setHoverTrash, exerciseId }) {
    return (
        <>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onMouseEnter={() => setHoverTrash(true)} onMouseLeave={() => setHoverTrash(false)} onClick={() => {
                document.getElementById('delete_exercise_modal').showModal();
            }} className="bg-neutral-800 p-2 rounded-xl hover:bg-red-600 cursor-pointer flex items-center">
                <Trash className={hoverTrash ? "text-neutral-200" : "text-neutral-400"} />
            </motion.div>
            <dialog id="delete_exercise_modal" className="modal">
                <div className="modal-box bg-neutral-900 border border-neutral-700 shadow-xs shadow-neutral-800">
                    <h3 className="font-bold text-lg text-neutral-200">Supprimer l'exercice</h3>
                    <hr className="mt-4" />
                    <p className="mt-4 text-neutral-400">Êtes-vous sûr de vouloir supprimer cet exercice ? Cette action est irréversible.</p>
                    <div className="modal-action flex justify-center">
                        <form method="dialog">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn">Non</motion.button>
                        </form>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-error ml-4">Oui</motion.button>
                    </div>
                </div>
            </dialog>
        </>
    )
}