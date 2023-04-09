import { useNavigate } from "react-router-dom"
import { userName } from "../store/AppStore"
import { useStore } from "@nanostores/react"

const Navbar = () => {
    const navigate = useNavigate()
    const UserName = useStore(userName)

    return (
        <nav className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 ">

                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                    <span className='text-2xl text-indigo-600 mr-1 pt-2'>
                        <i class="fa-solid fa-list"></i>
                    </span>
                    &nbsp;<h2 onClick={() => {
                        navigate("/todosList")
                    }}>ToDo App</h2>
                </div>

                <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                    <li className="mx-4 my-6 md:my-0 cursor-pointer text-gray-800 hover:text-indigo-600 duration-500 font-bold">{UserName}</li>
                    <li className="mx-4 my-6 md:my-0 cursor-pointer text-gray-800 hover:text-indigo-600 duration-500 font-bold"
                        onClick={() => {
                            navigate("/todosHistory")
                        }}>History</li>
                    <li className="mx-4 my-6 md:my-0 cursor-pointer  text-gray-800 hover:text-indigo-600 duration-500 font-bold"
                        onClick={() => {
                            localStorage.clear()
                            navigate("/")
                        }}>Logout</li>
                </ul>
            </div>
        </nav >
    )
}

export default Navbar