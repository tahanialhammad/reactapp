import React, { useState, useRef , useEffect} from 'react';
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
    // console.log('calculating remaining todos. This is slow.'); //run every time component rerendret ???
    return todos.filter(todo => !todo.isComplete).length;
  }

  function clearCompleted() {
    setTodos([...todos].filter(todo => !todo.isComplete));
  }

  // the as markAsEditing
  function completeAllTodos() {
    const updatedTodos = todos.map(todo => {
      todo.isComplete = true;

      return todo;
    });

    setTodos(updatedTodos);
  }

  function todosFiltered(filter) {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete);
    }
  }

  // useing ref hock to refrence dom element  , in https://laracasts.com/series/beginning-react/episodes/8?autoplay=true

  const [name, setName] = useState('');
  const nameInputEl = useRef(null);

  // use effect, first pram is call bacl , second pram also to sepicfiiy array of dependency to tall you when to run 
  // it wil ran after refrsh , or state updated, 
  useEffect(() => {
    // console.log('use effect running');
    //empty array run when componentDitdMount(refresh page)
    nameInputEl.current.focus();

    // componentWillUnmount to return a function , we need to remove aaray
    return function cleanup() {
      // console.log('cleaning up');
    };
  // }, [todos]); //reun efect only when todo updsted , componentDitdUpdate
    }, []); //empty array run when componentDitdMount(refresh page)

    // usememo , caching a value , we can use it bij remaining func ??? in vidio //may be vidio 8 not completed

  return (
    <div className="w-50">
      <div className="w-1/3">
        <h2>Todo App</h2>

        <div className="name-container">
          <h2>What is your name?</h2>
          {/* <button className='border border-gray-500' onClick={()=>{console.log(nameInputEl)}}>get ref</button> */}
          {/* from consol log we see that el is with cuurent so focus must bet for the cuurent el  */}
          {/* insted of that btn we are using  componentDitdMount to fouce to this input when page frefresh*/}
          {/* <button className='border border-gray-500' onClick={()=> nameInputEl.current.focus()}>get ref</button> */}

          <form action="#">
            <input
              type="text"
              ref={nameInputEl}
              className="mb-2 w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700"
              placeholder="What is your name"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </form>
          {/* show this only if name exist */}
          {name && <p className="name-label">Hello, {name}</p>}
        </div>



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
            completeAllTodos={completeAllTodos} 
            todosFiltered={todosFiltered}
          />
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}

export default Todo;
