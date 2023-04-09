import React from 'react'

const StartButton = ({ setTodo, setIsStart }) => {

  const onStartHandler = () => {
    setIsStart(true)
    setTodo(rest => {
      return {
        ...rest,
        "status": "Ongoing"
      }
    })
  }

  return (
    <div>
      <button onClick={() => onStartHandler()}>START</button>
    </div>
  )
}

export default StartButton