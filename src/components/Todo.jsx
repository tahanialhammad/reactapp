import React, { useState } from 'react';

function Todo() {
  //array of destructuring
  const [todos, setTodos] = useState([
    // arrray of objects
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: true,
    },
    {
      id: 3,
      title: 'Take over world',
      isComplete: false,
    },
  ]);

  return (
    <div className="w-50 bg-gray-200">
      <div className="w-1/3">
        <h2>Todo App</h2>
        <form action="#">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
          {todos.map((todo, index) => (
            <li className="flex px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
              <div className="">
                <input type="checkbox" />
                <span className="ml-4">{todo.title}</span>
                {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
              </div>
              <button className="mx-4 bg-red-500">x</button>
            </li>
          ))}

          <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label line-through">
                Go to Grocery
              </span>
              {/* <input type="text" className="todo-item-input" value="Go to Grocery" /> */}
            </div>
            <button className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        </ul>

        <div className="flex">
          <div>
            <div className="mx-4 center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
              Check All
            </div>
          </div>
          <span>3 items remaining</span>
        </div>

        <div className="flex  items-center gap-2">
          <div>
            <button className="rounded-lg border border-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85]">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="rounded-lg border border-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85]">
              Clear completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
