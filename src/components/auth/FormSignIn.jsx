import { Dumbbell, Eye, EyeOff } from "lucide-react"
import { useState, useEffect, use } from "react"
import { motion } from "framer-motion"

export default function FormSignIn({ isSignIn, setIsSignIn }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        document.title = "Connexion - FitProgressive"
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Connexion avec:", email, password)
    }

    return (
        <div className="bg-neutral-950 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center">
                    <div className="bg-green-500 p-4 rounded-2xl mb-4 shadow-lg shadow-green-700/50">
                        <Dumbbell className="text-neutral-950" size={36} />
                    </div>
                    <span className="text-xl text-white">FitProgressive</span>
                    <p className="mt-4 text-neutral-400">Suivez votre progression en musculation</p>
                </div>
                <div className="bg-neutral-900 p-6 md:p-8 lg:p-10 mt-6 rounded-2xl border border-neutral-800 w-full max-w-xl md:max-w-3xl lg:max-w-5xl shadow-lg shadow-black/30">
                    <div className="flex items-center justify-center mb-4">
                        <span className="text-lg font-semibold text-white">Connexion</span>
                    </div>
                    <div className="flex flex-col gap-4 mt-8">
                        <label className="text-neutral-200" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-3 border border-neutral-700 rounded-lg bg-neutral-900 text-neutral-200 focus:outline-none focus:border-green-500 transition-colors"
                        />
                        <label className="text-neutral-200" htmlFor="password">
                            Mot de passe
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 pr-12 border border-neutral-700 rounded-lg bg-neutral-900 text-neutral-200 focus:outline-none focus:border-green-500 transition-colors"
                            />
                            {!showPassword ? (
                                <Eye
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors"
                                    size={20}
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            ) : (
                                <EyeOff
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors"
                                    size={20}
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            )}
                        </div>
                        <motion.span
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-green-500 font-semibold cursor-pointer text-center hover:text-green-400 transition-colors">
                            Mot de passe oublié ?
                        </motion.span>
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleSubmit}
                            className="p-3 bg-green-500 text-neutral-950 rounded-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer "
                        >
                            Se connecter
                        </motion.button>
                        <div className="flex items-center gap-2">
                            <hr className="flex-1 border-neutral-800" />
                            <span className="text-neutral-500 text-sm">ou</span>
                            <hr className="flex-1 border-neutral-800" />
                        </div>
                        <div className="flex items-center justify-center gap-2 text-center">
                            <span className="text-neutral-500 text-sm">Pas encore de compte ?</span>
                            <motion.span
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-green-500 font-semibold cursor-pointer hover:text-green-400 transition-colors"
                                onClick={() => setIsSignIn(false)}>
                                Créer un compte
                            </motion.span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}