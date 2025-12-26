import './App.css'
import Navbar from './components/Navbar'
import Program from './components/Program'
import NoProgram from './components/NoProgram'
import NoLogin from './components/NoLogin'
import FormAccount from './components/auth/FormAccount'

export default function App() {

  const Programs = [
    { id: 1, name: 'PPL', goal: 'Prise de masse', duration: 12, days: ['Lundi', 'Mercredi', 'Vendredi'], createdAt: '2024-01-01' },
    { id: 2, name: 'Full Body', goal: 'Perte de graisse', duration: 8, days: ['Mardi', 'Jeudi', 'Samedi'], createdAt: '2024-02-15' },
    { id: 3, name: 'Full Body', goal: 'Endurance musculaire', duration: 10, days: ['Lundi', 'Mardi', 'Jeudi', 'Vendredi'], createdAt: '2024-03-10' }
  ];

  const isLogin = false;

  return (
    <div className="bg-neutral-950 min-h-screen w-full text-neutral-200">
      {
        isLogin ? (
          <>
            <Navbar />
            {
              Programs.length > 0 ? (
                <Program programs={Programs} />
              ) : (
                <NoProgram />
              )
            }
          </>
        ) : (
          <FormAccount />
        )
      }
    </div>
  )
}
