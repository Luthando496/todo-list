import { useState } from 'react'

import {FaPlusCircle} from 'react-icons/fa'
import {BsTrash} from 'react-icons/bs'

function App() {
  let [name, setName] = useState('')
  let [todos, setTodos] = useState([])

  const Submit =()=>{
    setTodos([...todos, {task:name,isCompleted:false,id:crypto.randomUUID()}])
    setName('')
    console.log(crypto.randomUUID())
  }

  const toggle =(id)=>{
    setTodos(todos.map(todo=>{
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    }))
  }
  

  return (
    <>
    <div className='w-full h-full absolute top-0 bg-slate-800'>
      <header className='w-full relative h-40 bg-black'>

      <h2 className='text-2xl text-white text-center pt-20 tracking-[7px]'><span className='text-pink-800 font-bold'>to</span><span className='text-sky-800 font-bold'>do</span><span className='text-emerald-800 font-bold'> li</span><span className='text-orange-800 font-bold'>st</span></h2>

      <div className='w-full flex justify-center absolute -bottom-8'>
      <input className='rounded-xl focus:border-none focus:border-orange-500 focus:border py-5 px-10 lg:w-[30rem] w-[15rem] sm:w-[19rem]' placeholder='Enter your todo item to list..... ' value={name} onChange={(e)=> setName(e.target.value)}  />
      <button className='px-6 flex items-center gap-5 py-4 bg-orange-500 ml-4 font-mono font-semibold rounded-lg text-emerald-400' onClick={Submit} >
        Create <FaPlusCircle className='text-sky-500 text-2xl' />
      </button>
      </div>


      <div className="mt-36 flex justify-center w-full">
        <ul className="flex flex-col gap-8">
        {todos && todos.map((item)=>(
          <li key={item.id} className='rounded-xl bg-yellow-800 shadow-lg  flex items-center justify-between py-3 px-10 lg:w-[30rem] w-[15rem] sm:w-[19rem]'>
            <span onClick={()=>toggle(item.id)} className={`rounded-full p-2 border-2 ${item.isCompleted && 'bg-red-500'} border-red-600 mr-4`}></span>
            <span className={`text-xl tracking-[4px] ${item.isCompleted && 'line-through'} font-semibold text-emerald-400`}>{item.task}</span>
            <BsTrash className='text-2xl font-bold' onClick={() => setTodos(todos.filter(todo=>todo.name !== item.task))}/>
          </li>
        ))}
          
        </ul>
      </div>
    

      </header>

    </div>
      
    </>
  )
}

export default App
