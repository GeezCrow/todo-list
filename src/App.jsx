import { useState } from 'react'
import MyTodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Todo from './components/Todo'
import './App.css'

function App(){
  return(
    <div className='todo-app'>
      <div className='todo-main-list'>
        <h1> To-Do List </h1>
        <TodoList/>

      </div>
    </div>
  )
}

export default App

/*        <Todo title="holass" detail="huashuas"/>
        <Todo title="ekisde" detail="lol"/>
        <Todo title="uwu" detail="wahahah"/>*/
