import { Calendar, Plus, Dumbbell } from 'lucide-react'
import { useState } from 'react'
import NoExercise from './NoExercise.jsx'

export default function ProgramView() {

    const Days = ['Lundi', 'Mercredi', 'Dimanche'];
    const [selectedDay, setSelectedDay] = useState(Days[0]);

    const Exercises = [
        { id: 1, name: 'Développé couché', type: 'Force', series: 4, reps: 8, weight: 80, days: ['Lundi', 'Jeudi'] },
    ];

    return (
        <div className="px-10">
            <div className="flex items-center gap-4 text-lg font-medium mb-6 lg:mx-auto lg:w-1/2">
                <Calendar className="text-green-600" />
                <span>Jours d'entraînement</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4 lg:w-1/2 lg:mx-auto">
                {Days.map((day, index) => (
                    <div key={index} onClick={() => {setSelectedDay(day)}} className={`
                            p-4 rounded-xl shadow-xs border cursor-pointer
                            flex items-center justify-center transition
                            ${selectedDay === day
                            ? 'bg-green-500 border-green-600 text-neutral-900 shadow-md shadow-green-500/20'
                            : 'bg-neutral-900 border-neutral-700 hover:border-green-600 text-neutral-400'
                        }
                        `}>
                        {day}
                    </div>
                ))}
            </div>
            <div className="lg:flex lg:justify-start lg:w-1/2 lg:mx-auto">
                <div className="bg-green-500 rounded-2xl p-4 mt-8 shadow-md shadow-green-500/20 hover:bg-green-600 transition lg:px-14">
                    <div className="flex items-center justify-center">
                        <button className="flex items-center gap-2 text-neutral-900 font-medium">
                            <Plus className="w-5 h-5" />
                            Ajouter un exercice
                        </button>
                    </div>
                </div>
            </div>
            {Exercises.length === 0 && <NoExercise day={selectedDay}/>}
        </div>
    )
};