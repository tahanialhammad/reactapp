import React from 'react'
import Todo from "../components/Todo";
import TodoRef from "../components/TodoRef";


export default function TodoApp() {
  return (
    <div>
        <h1>TodoApp</h1>

        
          {/* https://laracasts.com/series/beginning-react/episodes/3 */}
         <Todo /> 
         <hr />
          <TodoRef />
          <hr />
    </div>
  )
}
