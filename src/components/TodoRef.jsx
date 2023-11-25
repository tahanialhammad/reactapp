import React, { useState } from 'react';
import NoTodos from './NoTodos';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
//Refacturing https://laracasts.com/series/beginning-react/episodes/6?autoplay=true

// modren react dont use class base component , but the new is with functional component and hock
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

  const [idForTodo, setIdForTodo] = useState(4);

  function addTodo(todo) {
    // or push to array or use array sperater and set value
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todo,
        isComplete: false,
      },
    ]);
    setIdForTodo(prevIdForTodo => prevIdForTodo + 1);
  }

  function deleteTodo(id) {
    // take copy from todos array and filter all item != item what we clicked => se this item wil be deleted
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      // reteurn after the map
      return todo;
    });

    setTodos(updatedTodos);
  }

  function markAsEditing(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = true;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function updateTodo(event, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        // must be not empty
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function cancelEdit(event, id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isEditing = false;
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  // paas this func to list and then to TodoItemsRemaining
  function remaining() {
    return todos.filter(todo => !todo.isComplete).length;
  }

  function clearCompleted() {
    setTodos([...todos].filter(todo => !todo.isComplete));
  }


  return (
    <div className="w-50 bg-gray-200">
      <div className="w-1/3">
        <h2>Todo App</h2>
        {/* pass function as props */}
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 ? (
          // pass al props to child
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            markAsEditing={markAsEditing}
            updateTodo={updateTodo}
            cancelEdit={cancelEdit}
            deleteTodo={deleteTodo}
            remaining={remaining}
            clearCompleted={clearCompleted}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default Todo;
