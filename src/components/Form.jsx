import React from 'react'
import { useState } from 'react';

function Form({todos, setTodos}) {
	const [todo, setTodo]=useState('');
	const handleSubmit=(e)=>{
		e.preventDefault();
		setTodos([...todos,todo]);
		setTodo('');		
	}
  return (
		<form className='flex justify-center mt-5' onSubmit={(e)=>handleSubmit(e)}>
			<input className='border-2 w-96 p-2 text-lg mr-4 rounded-md border-black' type="text" onChange={(e)=>setTodo(e.target.value)} value={todo} />
			<button className='bg-black text-lg text-white px-4 hover:bg-gray-800 duration-200 cursor-pointer py-1 rounded-md' type='submit'>Add</button>
		</form>
  )
}

export default Form