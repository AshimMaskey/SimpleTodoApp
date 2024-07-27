import React from 'react'
import { useState } from 'react';

function Form({todos, setTodos}) {
	const [todo, setTodo]=useState({name:'',done:false});
	const handleSubmit=(e)=>{
		e.preventDefault();
		setTodos([...todos,todo]);
		setTodo({name:'', done:false});
	}
  return (
		<div className='w-96 m-auto'>
			<form className='flex mt-5 mb-2' onSubmit={(e)=>handleSubmit(e)}>
				<input required placeholder='Enter the item....' className='border-2 w-96 p-2 text-lg mr-4 rounded-md border-black' type="text" onChange={(e)=>setTodo({name:e.target.value,done:false})} value={todo.name} />

				<button className='bg-black text-lg text-white px-4 hover:bg-gray-900 duration-200 cursor-pointer py-1 rounded-md' type='submit'>Add</button>
			</form>
			{/* <span className='text-red-600 text-lg'>{error}</span> */}
		</div>
  )
}

export default Form