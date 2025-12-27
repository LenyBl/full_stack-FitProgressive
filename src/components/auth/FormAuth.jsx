import { motion } from "motion/react"
import { useState } from "react"
import FormSignIn from "./FormSignIn.jsx"
import FormSignUp from "./FormSignUp.jsx"


export default function FormAuth() {

  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center px-4">
      {
        isSignIn ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FormSignIn />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FormSignUp />
          </motion.div>
        )
      }
    </div>
  )
}