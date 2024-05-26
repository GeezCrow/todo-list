import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import '../style-sheets/TodoForm.css'

const MyTodoForm = (props) => {

  const [input, setInput] = useState('')
  const [det, setDet] = useState('')



  const changeHandler = e => {
    setInput(e.target.value)
    console.log(e.target.value)
  }
  const detHandler = e => {
    setDet(e.target.value)
    console.log(e.target.value)
  }


  const sendHandler = e => {
    e.preventDefault()
    console.log("sending form...")

    const newTodo = {
      id: uuidv4(),
      title: input,
      detail: det,
      completed: false,
    }
    console.log(newTodo);

    props.onSubmit(newTodo)


  }


  return (
    <form className="todo-form"
      onSubmit={sendHandler}>
      <input className="todo-input-title"
        type='text'
        placeholder='write your todo'
        name='text'
        onChange={changeHandler}
      />
      <input className="todo-input-detail"
        type='text'
        placeholder='description'
        name='text'
        onChange={detHandler}
      />
      <button className="todo-button">
        send to-do
      </button>
    </form>
  )
}

export default MyTodoForm