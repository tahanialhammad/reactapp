import React, { useState } from 'react';
// https://laracasts.com/series/beginning-react/episodes/1

function Counter() {
  const [count, setCount] = useState(0);
  function decrement() {
    // setCount(count - 1);
    setCount(prevCount => prevCount - 1);
  }

  function increment() {
    // setCount(count + 1); beter
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <div class="h-10 w-32">
        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            onClick={decrement}
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <span class="text-center bg-gray-300 flex items-center text-gray-700">
            {count}
          </span>

          <button
            onClick={increment}
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
