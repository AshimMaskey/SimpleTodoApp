import React from 'react'

function Todoitem({item, todos, setTodos}) {
	const handleUpdate=(name)=>{
		const newTodos=todos.map((todo)=>todo.name==name?{...todo, done:!todo.done}:todo);
		setTodos(newTodos);
	}
	const handleDelete=(item)=>{
		setTodos(todos.filter((todo)=>todo!==item));
	}

  return (
	<div className='border-2 w-96 flex justify-between rounded-lg p-4 mb-3 text-lg border-slate-400'>
		<h3 onClick={()=>handleUpdate(item.name)} key={item}>
			<span className={`${item.done==true?'line-through':''} cursor-pointer`}>
			{item.name}
			</span>
		</h3>
		<span >
			<button onClick={()=>handleDelete(item)} className=' bg-red-500 hover:bg-red-600 duration-200 text-white rounded-md px-3 py-1 '>X</button>
		</span>
	</div>
  )
}

export default Todoitem