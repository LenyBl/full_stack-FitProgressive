import { Plus, Trash } from 'lucide-react'
import { useState } from 'react'

export default function Program() {

    const Program = [
        'PPL',
        'Upper Lower'
    ];

    const [hoverTrash, setHoverTrash] = useState(false);

    return (
        <div className="bg-neutral-900 p-10 m-10 rounded-xl shadow-xs border border-neutral-700 shadow-neutral-800 lg:w-1/2 lg:mx-auto">
            <label className="block mb-4 font-medium">Programme</label>
            <div className="flex items-center">
                <select className="select select-lg bg-neutral-800 w-full p-3 rounded-xl border-neutral-700 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-green-600">
                    {
                        Program.map((program, index) => (
                            <option key={index} className="bg-neutral-800 hover:bg-green-600">{program}</option>
                        ))
                    }
                </select>
                <div onMouseEnter={() => setHoverTrash(true)} onMouseLeave={() => setHoverTrash(false)} className="bg-neutral-800 p-3 rounded-xl ml-4 hover:bg-red-600 transition hover:text-neutral-200 cursor-pointer flex items-center">
                    <Trash className={hoverTrash ? 'text-neutral-200' : 'text-neutral-600'} />
                </div>
                <div className="bg-green-500 p-3 rounded-xl hover:bg-green-600 cursor-pointer flex items-center ml-4">
                    <Plus className="text-neutral-900 mr-0 lg:mr-2 md:mr-2" />
                    <span className="hidden lg:inline md:inline text-neutral-900 font-medium">
                        Nouveau
                    </span>
                </div>
            </div>
        </div>
    )
}