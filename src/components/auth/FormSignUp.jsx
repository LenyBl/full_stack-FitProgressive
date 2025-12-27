export default function FormSignUp() {
    return (
        <div className="flex flex-col items-center justify-center h-lvh px-4">
            <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
            <form className="w-full max-w-sm bg-neutral-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-neutral-200 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>
                <div className="mb-4">
                    <label className="block text-neutral-200 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-900 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-neutral-200 text-sm font-bold mb-2" htmlFor="password">
                        Password    
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-neutral-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">   
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}