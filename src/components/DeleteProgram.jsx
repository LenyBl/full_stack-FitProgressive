import { Trash } from "lucide-react";
import { motion } from "motion/react";

export default function DeleteProgram({ isOnlyOneProgram, hoverTrash, setHoverTrash, programId }) {
    return (
        <>
            <motion.div whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }} onMouseEnter={() => !isOnlyOneProgram && setHoverTrash(true)} onMouseLeave={() => setHoverTrash(false)} onClick={() => {
                if (isOnlyOneProgram) return;
                document.getElementById('delete_program_modal').showModal();
            }}
                className={`p-3 rounded-xl ml-2 flex items-center ${isOnlyOneProgram ? 'bg-neutral-700 cursor-not-allowed opacity-50'
                    : 'bg-neutral-800 hover:bg-red-600 cursor-pointer'}`}
            >
                <Trash className={isOnlyOneProgram ? 'text-neutral-500' : hoverTrash ? 'text-neutral-200' : 'text-neutral-600'} />
            </motion.div>
            <dialog id="delete_program_modal" className="modal">
                <div className="modal-box bg-neutral-900 border border-neutral-700 shadow-xs shadow-neutral-800">
                    <h3 className="font-bold text-lg text-neutral-200">Supprimer le programme</h3>
                    <hr className="mt-4" />
                    <p className="mt-4 text-neutral-400">Êtes-vous sûr de vouloir supprimer ce programme ? Cette action est irréversible.</p>
                    <div className="modal-action flex justify-center">
                        <form method="dialog">
                            <motion.button whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }} className="btn">Non</motion.button>
                        </form>
                        <motion.button whileHover={{ scale: 1.05 }}  whileTap={{ scale: 0.95 }} className="btn btn-error ml-4">Oui</motion.button>
                    </div>
                </div>
            </dialog>
        </>
    )
}