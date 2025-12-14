import './App.css'
import Navbar from './components/Navbar'
import Program from './components/Program'
import ProgramView from './components/ProgramView'

export default function App() {

  return (
    <div className="bg-neutral-950 min-h-screen w-screen text-neutral-200">
      <Navbar />
      <Program />
      <ProgramView />
    </div>
  )
}


