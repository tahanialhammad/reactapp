import React, { useState } from 'react';
import TodoItemsRemaining from './TodoItemsRemaining';
import TodoFilters from './TodoFilters';

function TodoList(props) {
  // defauilt selected filter and useState 
  const [filter, setFilter] = useState('all');

  return (
    <>
      <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
        {/* we need to user filter from todofilter */}
        {/* {props.todos.map((todo, index) => ( */}
        {props.todosFiltered(filter).map((todo, index) => (
          <li
            key={todo.id}
            className="flex justify-between  px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out"
          >
            <div className="">
              <input
                type="checkbox"
                onChange={() => props.completeTodo(todo.id)}
                checked={todo.isComplete ? true : false}
              />
              {/* ther is more for editing todo in https://laracasts.com/series/beginning-react/episodes/5?autoplay=true */}

              {!todo.isEditing ? (
                <span
                  onDoubleClick={() => props.markAsEditing(todo.id)}
                  className={`ml-4  ${todo.isComplete ? 'line-through' : ''}`}
                >
                  {todo.title}
                </span>
              ) : (
                <input
                  type="text"
                  onBlur={event => props.updateTodo(event, todo.id)}
                  // to update when enter
                  onKeyDown={event => {
                    if (event.key === 'Enter') {
                      props.updateTodo(event, todo.id);
                    } else if (event.key === 'Escape') {
                      props.cancelEdit(event, todo.id);
                    }
                  }}
                  className="todo-item-input"
                  defaultValue={todo.title}
                  autoFocus
                />
              )}
            </div>
            <button
              onClick={() => props.deleteTodo(todo.id)}
              className="mx-4 bg-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    <hr />
<div>
  <h2>Custom Hooks </h2>
  {/* https://laracasts.com/series/beginning-react/episodes/9?autoplay=true */}
  <button className="rounded-lg border border-gray-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85]">
    feature on toggle 
    </button>
    <button className="rounded-lg border border-gray-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85]">
    feature tow toggle 
    </button>
</div>

    <hr />  
      <div className="flex justify-between items-center my-4">
        <div>
          <div onClick={props.completeAllTodos} className="center rounded-lg bg-gray-500 py-1 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
            Check All
          </div>
        </div>
       
        <TodoItemsRemaining remaining={props.remaining} />
      </div>

      <div className="flex justify-between items-center gap-2">
        {/* we need to paas method of filter , selected filter */}
      <TodoFilters
          todosFiltered={props.todosFiltered}
          filter={filter}
          setFilter={setFilter}
        />

        <div>
          {/* we can also make it as componentn and call props */}
          <button onClick={props.clearCompleted} className="rounded-lg border border-gray-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85]">
            Clear completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
