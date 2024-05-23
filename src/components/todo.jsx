import React from "react";

const Todo = (id,title,detail,completed, todoCompleted, deleteTodo , showDetail) => {
  return (
        <div>
          <div
          onClick = {()=> todoCompleted(id)}>

            {title}
          </div>
          <div
           onClick={()=>deleteTodo(id)}
          >
          </div>
          <div
           onClick={()=>showDetail(id)}
          >
          </div>
        </div>
    )
}

export default Todo