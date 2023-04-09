import { useState, useRef, useEffect } from "react"
import { setStore } from "../store/AppStore"
import * as api from "../api/api"
import Navbar from "./Navbar"
import TodoTable from "./TodoTable"

const TODO = () => {
    const [todos, setTodos] = useState([])

    const inputRef = useRef(null)

    async function onClickHandler() {
        const todoTask = inputRef.current.value
        if (!todoTask) {
            return
        }
        const response = await api.createTodo(todoTask)
        if (response.status === 200) {
            const updatedTodo = [...todos, response.data.todo]
            setTodos(updatedTodo)
            setStore(updatedTodo)
        }
        else alert(response.data.message)
        inputRef.current.value = ""
    }

    async function fetchTodos() {
        try {
            const response = await api.getTodos()
            setTodos(response.data.activities)
            setStore(response.data.activities)
        } catch (error) {
            if (error.response.status === 401) {
                window.location.href = "/";
            }
        }
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <div>
            <Navbar />
            <div className="flex justify-center items-center h-64">
                <input
                    className="p-2 w-96 shadow-lg bg-white rounded-md"
                    ref={inputRef}
                    type="text"
                    name="todos"
                    placeholder="Add Todo"
                />
                <button
                    className=" w-12 ml-2 p-2 shadow-lg bg-white rounded-md text-indigo-700 font-bold"
                    onClick={() => { onClickHandler() }}
                >
                    Add
                </button>
            </div>
            <TodoTable todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TODO