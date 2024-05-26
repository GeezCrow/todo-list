import React from "react";
import '../style-sheets/Todo.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Todo({id,title,detail,completed, completeTodo, deleteTodo}){
  return (
        <div className={completed ? "todo-container completed": "todo-container"}>
          <div
            className="todo-text"
            onClick = {() => completeTodo(id)}>
            <div className="todo-title">
            {title}
            </div>
            <div className="todo-det">
              {detail}
            </div>
          </div>
          <div
           onClick={()=>deleteTodo(id)}
          > <AiOutlineCloseCircle/>
          </div>

        </div>
    )
}

export default Todo

/*<Todo title='holas ' detail='k hace'/>
*/