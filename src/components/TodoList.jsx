import React from 'react';
import TodoItemsRemaining from './TodoItemsRemaining';

function TodoList(props) {
  return (
    <>
      <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
        {props.todos.map((todo, index) => (
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
              className="mx-4 bg-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </li>
        ))}
      </ul>
      
      <div className="flex justify-between items-center my-4">
        <div>
          <div className="center rounded-lg bg-pink-500 py-1 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
            Check All
          </div>
        </div>
       
        <TodoItemsRemaining remaining={props.remaining} />
      </div>

      <div className="flex justify-between items-center gap-2">
        <div>
          <button className="rounded-lg border border-pink-500 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85]">
            All
          </button>
          <button className="button filter-button">Active</button>
          <button className="button filter-button">Completed</button>
        </div>
        <div>
          {/* we can also make it as componentn and call props */}
          <button onClick={props.clearCompleted} className="rounded-lg border border-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85]">
            Clear completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoList;
