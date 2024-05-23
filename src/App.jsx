import { useState } from 'react'
import MyTodoForm from './components/todo-form'
import TodoList from './components/todo-list'

function App(){
  return(
    <div>
      <div>
        <h1> To-Do List </h1>

        <TodoList/>

      </div>
    </div>
  )
}

export default App
