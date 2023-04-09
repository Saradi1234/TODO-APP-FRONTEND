import React from 'react'
import { updateTodoStatusTime } from "../api/api"

const EndButton = ({ setTodo, id, setIsStart, timeTaken }) => {
  const onEndHandler = () => {
    setIsStart(false)
    setTodo(rest => {
      return {
        ...rest,
        "status": "Completed",
        "time_taken": timeTaken
      }
    })
    updateTodoStatusTime(id, "Completed", timeTaken)
  }
  return (
    <div>
      <button onClick={onEndHandler}>END</button>
    </div>
  )
}

export default EndButton