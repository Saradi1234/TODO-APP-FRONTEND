import { Link, useNavigate } from "react-router-dom"
import { onSignupHandler } from "../utils/onSignupHandler"

const Login = () => {
    const navigateToLogin = useNavigate()
    return (
        <div className="flex justify-center items-center h-screen background">
            <form
                className="w-96 p-6 shadow-lg bg-white rounded-md"
                onSubmit={(event) => {
                    event.preventDefault()
                    onSignupHandler(event.target, navigateToLogin)
                }}>

                <h1 className="text-3xl block text-center font-semibold text-indigo-700">
                    <i className="fa-solid fa-user" />&nbsp;&nbsp;Signup
                </h1>

                <hr className="mt-3" />

                <div className="mt-3">
                    <label htmlFor="username" className="block text-base mb-2">
                        Username
                    </label>
                    <input
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Username..."
                    />
                </div>

                <div className="mt-3">
                    <label htmlFor="password" className="block text-base mb-2">
                        Password
                    </label>
                    <input
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password..."
                    />
                </div>

                <div className="mt-3">
                    <label htmlFor="conf_password" className="block text-base mb-2">
                        Confirm Password
                    </label>
                    <input
                        className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        type="password"
                        name="conf_password"
                        id="conf_password"
                        placeholder="Enter Same Password..." />
                </div>

                <div className="mt-5">
                    <button
                        type="submit"
                        className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
                    >
                        <i className="fa-solid fa-right-to-bracket" />
                        &nbsp;&nbsp;Signup
                    </button>
                </div>

                <div className="mt-5 text-center">Already Registered?&nbsp;
                    <Link to="/" style={{ color: "rgb(55 48 163)" }}>
                        <b>Login here </b>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login