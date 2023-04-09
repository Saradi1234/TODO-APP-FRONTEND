import React from 'react'
import { todoList, setStore } from "../store/AppStore"
import { useStore } from "@nanostores/react"
import { updateTodoDeleted } from "../api/api"

const DeleteButton = ({ id, setTodos }) => {
  const list = useStore(todoList)

  const onDeleteHandler = () => {
    const updatedList = list.map((todo) => {

      if (todo._id === id) {
        return {
          ...todo,
          isDeleted: true
        }
      }
      return todo
    })
    setStore(updatedList)
    setTodos(updatedList)
    updateTodoDeleted(id, true)
  }

  return (
    <div>
      <button onClick={onDeleteHandler}>DELETE</button>
    </div>
  )
}

export default DeleteButton