import { useState } from "react"
import FormSignIn from "./FormSignIn.jsx"
import FormSignUp from "./FormSignUp.jsx"


export default function FormAuth() {

  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center px-4">
      {
        isSignIn ? (
            <FormSignIn isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
        ) : (
            <FormSignUp isSignUp={isSignIn} setIsSignUp={setIsSignIn} />
        )
      }
    </div>
  )
}