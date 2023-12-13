import React, { useState } from 'react'

const Joinscreen = ({start}) => {
 const [name, setname] =useState("")
 const [sem, setsem] =useState("")
 const [branch, setBranch] =useState("")
  return (
    <div className='my-6 flex justify-center items-center flex-col'>
      <h1 className=' text-center mt-8 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate vitae, repellat iusto, corrupti</h1>
      
      <div className='flex flex-col w-full justify-center items-center gap-4'>

      <div className=' flex justify-center items-center'>
    <label className='mx-4' htmlFor="Name">Name :</label>
      <input onChange={(e)=>{setname(e.target.value)}} className='my-4 w-auto h-8 bg-blue-200' name='Name' type="text" />
      </div>

      <div className='flex justify-center items-center'>
    <label className='mx-4' htmlFor="Sem">Semester :</label>
      <input onChange={(e)=>{setsem(e.target.value)}} className='my-4 w-auto h-8 bg-blue-200' name='Sem' type="number" />
      </div>

      <div className='flex justify-center items-center'>
    <label className='mx-4' htmlFor="Branch">Branch :</label>
      <input onChange={(e)=>{setBranch(e.target.value)}} className='my-4 w-auto h-8 bg-blue-200' type="text" name='Branch' />
      </div>

      </div>
      <button onClick={start} className='bg-blue-400 w-32 h-12 rounded-lg'>JOIN NOW!!</button>
    </div>
  )
}

export default Joinscreen
