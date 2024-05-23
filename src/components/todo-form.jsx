import React,{useState} from "react"
import {v4 as uuidv4} from "uuid"

const MyTodoForm = () =>{

    const [input,setInput] = useState('')

    const changeHandler = e =>{
        setInput(e.target.value)
        console.log(e.target.value)
    }

    const sendHandler = e =>{
        e.preventDefault()
        console.log("sending form...")

        const newTodo = {
            id: uuidv4(),
            title: input,
            completed: false
        }
        console.log(newTodo);


       
    }


    return (
      <form
      onSubmit={sendHandler}>
        <input
        type='text'
        placeholder='send to-do'
        name = 'text'
        onChange={changeHandler}
        />
        <input
        type='text'
        placeholder='description'
        name = 'text'
        />
        <button>
          send to-do
        </button>
      </form>
    )
  }

export default MyTodoForm