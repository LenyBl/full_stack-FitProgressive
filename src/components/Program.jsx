import { Plus, Trash } from 'lucide-react'
import { useState } from 'react'
import AddProgramButton from './AddProgramButton';
import ProgramView from './ProgramView';
import DeleteProgram from './DeleteProgram';
import EditProgram from './EditProgram';

export default function Program({ programs: Program }) {

    const [hoverTrash, setHoverTrash] = useState(false);
    const [hoverEdit, setHoverEdit] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState(Program[0]);
    const isOnlyOneProgram = Program.length === 1;

    return (
        <>
            <div className="bg-neutral-900 px-10 pt-10 pb-6 m-10 rounded-xl shadow-xs border border-neutral-700 shadow-neutral-800 lg:w-1/2 lg:mx-auto">
                <label className="block mb-4 font-medium">Programme</label>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <select onChange={e => setSelectedProgram(Program.find(program => program.id === Number(e.target.value)))} disabled={isOnlyOneProgram} className="select select-lg w-full bg-neutral-800 p-3 rounded-xl border-neutral-700 text-neutral-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-600">
                        {
                            Program.map((program, index) => (
                                <option key={program.id} value={program.id} className="bg-neutral-800 hover:bg-green-600">{program.name}</option>
                            ))
                        }
                    </select>
                    <div className=" flex justify-center gap-4 mt-4 lg:mt-0 lg:ml-4 lg:justify-start">
                        <EditProgram hoverEdit={hoverEdit} setHoverEdit={setHoverEdit} programId={selectedProgram.id} />
                        <DeleteProgram isOnlyOneProgram={isOnlyOneProgram} hoverTrash={hoverTrash} setHoverTrash={setHoverTrash} programId={selectedProgram.id} />
                        <AddProgramButton text={"Nouveau"} />
                    </div>
                </div>
                <div className="mt-6 font-medium flex lg:items-center lg:gap-6 text-neutral-400">
                    <span className="text-center">Durée : {selectedProgram.duration} semaines</span>
                    <span className="ml-6 text-center lg:text-left">Objectif : {selectedProgram.goal}</span>
                </div>
            </div>
            <ProgramView programId={selectedProgram.id} programDays={selectedProgram.days} />
        </>
    )
}