import React from 'react'

export default function Newletter() {
  return (
    <div className='mt-16'>
        <h1 className='text-[#1A1445] text-3xl text-center font-extrabold'>Epic events and incredible deals straight to your inbox.</h1>
        <h1 className='text-center text-[#1A1445]  text-base'>Get notified of all the exciting events happening close to you, <span>NO SPAM</span> we promise!</h1>
        <div className='flex justify-center mt-5'>
        <input className='placeholder border py-2 px-14  placeholder-[#E7E7E7] text-[#1A144599] rounded-l-lg mt-2' placeholder='Enter e-mail adress here'></input>
        <button className='text-[#FFFFFF] -mr-2 border-solid border py-2 px-14 rounded-r-lg  bg-gradient-to-t from-[#165FFC] to-[#01A9EF] '>Join the list</button>
        </div>
    </div>
 
  )
}
