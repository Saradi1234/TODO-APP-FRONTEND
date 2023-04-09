import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import { todoList } from "../store/AppStore"
import { useStore } from '@nanostores/react'
import { deleteOneTodo, clearHistory } from "../api/api"
import { useNavigate } from 'react-router-dom'

const History = () => {
  const [todos, setTodos] = useState([])
  const list = useStore(todoList)

  const navigate = useNavigate()

  useEffect(() => {
    setTodos(list)
  }, [])

  return (
    <>
      <Navbar />
      <h1 className='text-center text-5xl mt-32 font-[Poppins] text-blue-700'>History</h1>
      <div>
        <div className='flex justify-center items-center'>
          <button
            className='mt-20  bg-blue-700 w-28 p-2 shadow-lg rounded-md text-white font-bold text-center mb-16'
            onClick={() => {
              clearHistory()
              setTodos([])
            }}>CLEAR ALL</button>
        </div>

        <div className='flex justify-center items-center h-auto'>
          <table className='shadow-2xl font-[Poppins] border-2 border-blue-700 w-6/12 overflow-hidden'>
            <thead className="bg-white">
              <tr>
                <th className="text-blue-700 py-3 text-left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Activity</th>
                <th className="text-blue-700 py-3 text-left">Time Taken</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map((todo, index) => {
                  if (todo.isDeleted) {
                    return <tr
                      key={index}
                      className="bg-blue-100 hover:bg-blue-400 hover:scale-105 cursor-pointer duration-300"
                    >
                      <td className="py-3 px-6">{todo.activity}</td>
                      <td className="py-3 px-6">{todo.time_taken}</td>
                      <td className="py-3 px-6">
                        <button onClick={() => {
                          const newList = todos.filter((t) => t._id !== todo._id)
                          setTodos(newList)
                          deleteOneTodo(todo._id)
                        }}
                        >CLEAR</button>
                      </td>
                    </tr>
                  }
                })
              }
            </tbody>
          </table>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <button
          className='mt-20  bg-blue-700 w-20 p-2 shadow-lg rounded-md text-white font-bold text-center mb-16'
          onClick={() => {
            navigate("/todosList")
          }}>BACK</button>
      </div>
    </>
  )
}

export default History