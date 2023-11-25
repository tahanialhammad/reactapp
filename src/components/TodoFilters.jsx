import React from 'react';

function TodoClearCompleted(props) {
  return (
    <div>
      <button
         onClick={() => {
          props.setFilter('all');
          props.todosFiltered('all');
        }}
        className={`rounded-lg py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85]
          ${props.filter === 'all' ? 'border border-gray-500' : ''}`}
      >
        All
      </button>
      <button
        onClick={() => {
          props.setFilter('active');
          props.todosFiltered('active');
        }}
        className={`rounded-lg py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85]
           ${props.filter === 'active' ? 'border border-gray-500' : ''}`}
      >
        Active
      </button>
      <button
        onClick={() => {
          props.setFilter('completed');
          props.todosFiltered('completed');
        }}
        className={`rounded-lg py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-gray-200 active:opacity-[0.85]
         ${props.filter === 'completed' ? 'border border-gray-500' : ''}`}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoClearCompleted;
