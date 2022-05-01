import React from 'react'
import Image from 'next/image'

export default function NavBar() {
  return (
    <div className='flex bg-white p-3 justify-between items-center'>
        <div className='ml-20' >
        <img  src='https://ideptico.sirv.com/Logo.png' ></img>

        </div>
        <div className='flex space-x-7 mr-16'>
          <a href='' className='text-black font-semibold'>About</a>
          <a href='' className='text-black font-semibold'>Reward</a>
          <a href='' className='text-black font-semibold'>Blog</a>
        <button className='rounded-full bg-[#165FFC] mr-10 px-3 text-white'>Download The App</button>
        </div>
    </div>
  )
}
