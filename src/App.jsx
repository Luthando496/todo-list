import { useState } from 'react'

import {FaPlusCircle} from 'react-icons/fa'

function App() {
  let [name, setName] = useState('')


  

  return (
    <>
    <div className='w-full h-screen bg-slate-800'>
      <header className='w-full relative h-40 bg-black'>

      <h2 className='text-2xl text-white text-center pt-20 tracking-[7px]'><span className='text-pink-800 font-bold'>to</span><span className='text-sky-800 font-bold'>do</span><span className='text-emerald-800 font-bold'> li</span><span className='text-orange-800 font-bold'>st</span></h2>

      <div className='w-full flex justify-center absolute -bottom-8'>
      <input className='rounded-xl focus:border-none focus:border-orange-500 focus:border py-5 px-10 lg:w-[30rem] w-[15rem] sm:w-[19rem]' value={name} onChange={(e)=> setName(e.target.value)}  />
      <button className='px-6 flex items-center gap-5 py-4 bg-orange-500 ml-4 font-mono font-semibold rounded-lg text-emerald-400'>
        Create <FaPlusCircle className='text-sky-500 text-2xl' />
      </button>

      </div>

      </header>

    </div>
      
    </>
  )
}

export default App
