import React, { useState } from 'react';

function TodoForm(props) {
  const [todoInput, setTodoInput] = useState('');

  function handleInput(event) {
    setTodoInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); 

    if (todoInput.trim().length === 0) {
      return;
    }
// accepet what user input via props in parent component
    props.addTodo(todoInput);

    setTodoInput('');
  }

  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoInput}
          onChange={handleInput}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
          placeholder="What do you need to do?"
        />
      </form>
    </div>
  );
}

export default TodoForm;
