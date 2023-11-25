import React from 'react'

function TodoItemsRemaining(props) {
    // call the method
    return <span>{props.remaining()} items remaining</span>;
}

export default TodoItemsRemaining