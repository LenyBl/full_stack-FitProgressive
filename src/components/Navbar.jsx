import { Dumbbell } from 'lucide-react'
import { UserRound } from 'lucide-react'

export default function Navbar() {
    return (
        <div className="bg-neutral-900 shadow-xs shadow-neutral-800">
            <div className="container mx-auto flex items-center p-2">
                <div className="bg-green-500 items-center flex p-2 rounded-md m-2">
                    <Dumbbell className="text-neutral-900"/>
                </div>
                <h1 className="font-bold p-4">FitProgressive</h1>
                <div className="bg-neutral-800 rounded-full ml-auto hover:bg-green-600 hover:text-neutral-900 cursor-pointer">
                    <UserRound className="text-neutral-200 m-2"/>
                </div>
            </div>
        </div>
    )
}