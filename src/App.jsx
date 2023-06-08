import { useEffect, useState } from 'react'

import {FaPlusCircle} from 'react-icons/fa'
import {BsTrash} from 'react-icons/bs'


const LOCALSTORAGEKEY = 'todo-list'

function App() {
  let [name, setName] = useState('')
  let [todos, setTodos] = useState([])

  const Submit =(e)=>{
    e.preventDefault()
    if(!name){
      return;
    }
    saveToLocalStorage([...todos, {task:name,isCompleted:false,id:crypto.randomUUID()}])
    setName('')
    console.log(crypto.randomUUID())
  }

  const saveToLocalStorage = (newTask) => {
    setTodos(newTask)
    localStorage.setItem(LOCALSTORAGEKEY,JSON.stringify(newTask))
  }
  const completed = todos.filter(todo=>todo.isCompleted).length

  const toggle =(id)=>{
    saveToLocalStorage(todos.map(todo=>{
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    }))
  }


  useEffect(()=>{
    const localTodos = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
    if(localTodos){
      setTodos(localTodos)
    }
  },[])
  

  return (
    <>
    <div className='w-full  min-h-screen  bg-slate-800'>
      <header className='w-full py-12'>

      <h2 className='text-2xl my-8 text-white text-center pt-20 tracking-[7px]'><span className='text-pink-800 font-bold'>to</span><span className='text-sky-800 font-bold'>do</span><span className='text-emerald-800 font-bold'> li</span><span className='text-orange-800 font-bold'>st</span></h2>

      <div className='w-full flex justify-center '>
      <form onSubmit={Submit}>
      <input className='rounded-xl focus:border-none focus:border-orange-500 focus:border py-5 px-10 lg:w-[30rem] w-[15rem] sm:w-[19rem]' placeholder='Enter your todo item to list..... ' value={name} onChange={(e)=> setName(e.target.value)}  />
      </form>
      <button className='px-6 flex items-center gap-5 py-4 bg-orange-500 ml-4 font-mono font-semibold rounded-lg text-emerald-400' onClick={Submit} >
        Create <FaPlusCircle className='text-sky-500 text-2xl' />
      </button>
      </div>
      <div className="flex justify-between items-center mt-7 w-[60%] mx-auto">
        <h2 className="text-blue-500">Created Tasks <span className='bg-gray-400 px-2 py-1 rounded-lg'>{todos.length}</span></h2>
        <h2 className="text-orange-700 font-semibold">Completed <span className='bg-gray-400 rounded-lg px-2 py-1'>{completed} of {todos.length}</span></h2>
   </div>


      <div className="mt-[5rem] flex justify-center w-full">
        <ul className="flex flex-col gap-8">
        {todos && todos.map((item)=>(
          <li key={item.id} className='rounded-xl bg-yellow-800 shadow-lg  flex items-center justify-between py-3 px-10 lg:w-[30rem] w-[15rem] sm:w-[19rem]'>
            <span onClick={()=>toggle(item.id)} className={`rounded-full cursor-pointer p-2 border-2 ${item.isCompleted && 'bg-red-800'} border-red-800 mr-4`}></span>
            <span className={`text-xl tracking-[4px] ${item.isCompleted && 'line-through'} font-semibold text-white`}>{item.task}</span>
            <BsTrash className='text-4xl cursor-pointer font-bold' onClick={() => saveToLocalStorage(todos.filter(todo=>todo.id !== item.id))}/>
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
