import React, { useState } from "react";
import MyTodoForm from "./todo-form";
import Todo from "./todo";

const TodoList = () => {

  const [todos, SetTodo] = useState([])

  const createTodo = todo =>{
    console.log("todo added")
    console.log(todo)
  }

  return (
    <>
      {
        todos.map((todos) =>
            <Todo
              title={todos.title}
              detail={todos.detail}
              completed={todos.completed}
            />
        )
      }


      <MyTodoForm />
    </>
  )
}

export default TodoList