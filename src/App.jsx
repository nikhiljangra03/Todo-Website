import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    let copyTask = [...tasks];

    console.log(tasks);

    copyTask.push({title,desc})
    setTasks(copyTask)

    setTitle('')
    setDesc('')
  }


  return (
    <div className='h-screen w-full flex flex-col lg:flex-row  bg-gray-800 text-white'>
      <form onSubmit={(e) => { submitHandler(e); }} className='flex flex-col lg:w-1/2 gap-12 p-14 h-screen  '>
      <h1 className='font-bold text-3xl'>Creat New One</h1>
          <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder='title' className='border rounded p-3 font-bold text-2xl' />
          <textarea value={desc} onChange={(e)=>{setDesc(e.target.value)}} className='border rounded p-3 h-52 font-bold text-2xl' placeholder='write here...'></textarea>
          <button className='border rounded p-3 font-bold text-2xl active:scale-95'>Add</button>
      </form>
      <div className='p-14 w-full flex-col lg:border-l-2 h-screen lg:w-1/2 flex gap-12 )]'>
        <h1 className='font-bold text-3xl'>Resent Notes</h1>
        <div className='flex flex-wrap gap-3 h-full overflow-auto'>
        
          {tasks.map(function(elem,idx){
            return <div key={idx} className='relative text-black p-4 h-52 w-40 rounded-2xl bg-cover bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
              <h3 className='text-2xl font-bold text-black'>{elem.title}</h3>
              <p className='text-xl font-bold text-gray-400'>{elem.desc}</p>
            </div>;
          })}
        </div>
      </div>
    </div>
  )
}

export default App