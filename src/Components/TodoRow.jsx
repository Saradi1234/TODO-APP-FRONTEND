import React, { useEffect, useState } from 'react'
import StartButton from './StartButton'
import EndButton from './EndButton'
import DeleteButton from './DeleteButton'


const TodoRow = ({ todo: todoItem, setTodos }) => {
  const [todo, setTodo] = useState(todoItem)
  const [seconds, setSeconds] = useState(0)
  const [isStart, setIsStart] = useState(false)

  useEffect(() => {
    if (isStart) {
      const interval = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
      return () => {
        clearInterval(interval)
      }
    }
  }, [isStart])

  const time = (
    (~~(seconds / 60) < 10 ? "0" + ~~(seconds / 60) : ~~(seconds / 60))
    + ":" +
    (~~(seconds % 60) < 10 ? "0" + ~~(seconds % 60) : ~~(seconds % 60))
  )

  return (
      <tr className="bg-blue-100 hover:bg-blue-400 hover:scale-105 cursor-pointer duration-300">
        <td className="py-3 px-6">{todo.activity}</td>
        <td className="py-3 px-6">{todo.status}</td>
        <td className="py-3 px-6 ">
          {todo.time_taken ? todo.time_taken : (seconds ? time : null)}
        </td>
        <td className="py-3 px-6">{getButton(todo.status, setTodo, todo._id, setIsStart, time, setTodos)}</td>
      </tr>
  )
}

export default TodoRow

function getButton(status, setTodo, id, setIsStart, timeTaken, setTodos) {
  switch (status) {
    case "Pending":
      return <StartButton
        setTodo={setTodo}
        setIsStart={setIsStart}
      />

    case "Ongoing":
      return <EndButton
        setTodo={setTodo}
        id={id}
        setIsStart={setIsStart}
        timeTaken={timeTaken}
      />

    case "Completed":
      return <DeleteButton
        id={id}
        setTodos={setTodos}
      />
    default:
      break
  }
}