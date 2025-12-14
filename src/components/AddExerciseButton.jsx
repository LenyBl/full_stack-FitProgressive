import { Plus } from 'lucide-react'

export default function AddExerciseButton() {
    return (
        <>
            <div className="lg:flex lg:justify-start lg:w-1/2 lg:mx-auto" onClick={() => document.getElementById('exercise_modal').showModal()}>
                <div className="bg-green-500 rounded-2xl p-4 mt-8 shadow-md shadow-green-500/20 hover:bg-green-600 transition lg:px-14">
                    <div className="flex items-center justify-center">
                        <button className="flex items-center gap-2 text-neutral-900 font-medium cursor-pointer">
                            <Plus className="w-5 h-5" />
                            Ajouter un exercice
                        </button>
                    </div>
                </div>
            </div>
            <dialog id="exercise_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>
        </>
    )
}