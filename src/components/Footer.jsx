import React from 'react'

function Footer({done,total}) {
  return (
	<div className='fixed bottom-0 flex justify-around w-full bg-black text-white text-2xl p-5'>
		<span>Total Todos: {total}</span>
		<span>Completed Todos: {done}</span>
	</div>
  )
}

export default Footer