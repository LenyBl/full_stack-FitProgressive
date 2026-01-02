import Navbar from '../components/Navbar'
import Program from '../components/Program'
import NoProgram from '../components/NoProgram'
import { useState, useEffect } from 'react'
import api from '../services/api.js'

export default function App() {

  const [Programs, setPrograms] = useState([])

  useEffect(() => {
    document.title = "Accueil - FitProgressive"
      api.get(`/programs/user`)
        .then(res => setPrograms(res.data))
        .catch(err => {
          console.error(err)
        })
  }, [])

  return (
    <div className="bg-neutral-950 min-h-screen w-full text-neutral-200">
      <Navbar />
      {
        Programs.length > 0 ? (
          <Program programs={Programs} />
        ) : (
          <NoProgram />
        )
      }
    </div>
  )
}
