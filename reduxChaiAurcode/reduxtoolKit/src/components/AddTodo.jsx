import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo} from '../features/todo/todoSlice.js'

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <form onSubmit={addTodoHandler}>
        <input type="text" placeholder="Add todo..." value={input} onChange={(e) => setInput (e.target.value)} />
        <input type="submit" value="Submit"/>
        <button type='submit'>add todo </button>
    </form>
  )
}

export default AddTodo