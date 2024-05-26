import React, { useState } from "react";
import MyTodoForm from "./TodoForm";
import Todo from "./Todo";
import '../style-sheets/TodoList.css'


const TodoList = () => {

  const [todos, setTodos] = useState([])


  const createTodo = todo => {
    console.log(todo)
    if (todo.title.trim()) {
      todo.title = todo.title.trim()
      const updatedTodos = [todo, ...todos]
      setTodos(updatedTodos)
    }

    console.log("todo added")
    console.log(todo)
  }

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id ){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      <MyTodoForm onSubmit={createTodo} />
      <div className="todo-list-container">
      {
        todos.map((todo) =>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            detail={todo.detail}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        )
      }
      </div>
    </>
  )
}

export default TodoList