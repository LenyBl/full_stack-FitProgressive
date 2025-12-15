import { Calendar, Plus, Dumbbell, Weight } from 'lucide-react'
import { useState, useEffect } from 'react'
import NoExercise from './NoExercise.jsx'
import ExerciseCard from './ExerciseCard.jsx'
import AddExerciseButton from './AddExerciseButton.jsx'

export default function ProgramView({ programId, programDays }) {

    const Days = programDays;

    const [selectedDay, setSelectedDay] = useState(Days[0]);

    if (getCurrentDay() && Days.includes(getCurrentDay())) {
        useEffect(() => {
            setSelectedDay(getCurrentDay());
        }, [Days]);
    } else {
        useEffect(() => {
            setSelectedDay(Days[0]);
        }, [Days]);
    }

    function getCurrentDay() {
        const daysOfWeek = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        const today = new Date();
        return daysOfWeek[today.getDay()];
    }

    const Exercises = [
        {
            programId: programId,
            id: 1,
            name: 'Développé couché',
            type: 'Libre',
            mark: 'TechnoGym',
            series: 4,
            reps: 10,
            weight: 60,
            weightIncrement: 2.5,
            days: ['Lundi', 'Jeudi'],
        },
        {
            programId: programId,
            id: 2,
            name: 'Squat',
            type: 'Poids du corps',
            mark: 'Barbell',
            series: 4,
            reps: 8,
            weight: 80,
            weightIncrement: 5,
            days: ['Mardi', 'Vendredi'],
        },
    ];

    return (
        <div className="px-10 pb-6">
            <div className="flex items-center gap-4 text-lg font-medium mb-6 lg:mx-auto lg:w-1/2">
                <Calendar className="text-green-600" />
                <span>Jours d'entraînement</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4 lg:w-1/2 lg:mx-auto">
                {Days.map((day, index) => (
                    <div key={index} onClick={() => { setSelectedDay(day) }} className={`
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
            <AddExerciseButton />
            {Exercises.filter(exercise => exercise.days.includes(selectedDay)).length === 0 && <NoExercise day={selectedDay} />}
            {Exercises.filter(exercise => exercise.days.includes(selectedDay)).length > 0 && <div className="lg:w-1/2 lg:mx-auto mt-8">
                {Exercises.filter(exercise => exercise.days.includes(selectedDay)).map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </div>}
        </div>
    )
};