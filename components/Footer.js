import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex bg-white p-3 space-x-7 items-center mt-10' >
        <div className='ml-20' >
        <img  src='https://ideptico.sirv.com/Logo%20(1).png' ></img>

        <div className='flex space-x-12 mr-16'>

            <button>About</button>
            <button>Rewards</button>
            <button>Blog</button>
            <button>Terms</button>
            <button>Privacy & Cookies</button>
           
        </div>
            < div className='grid grid-cols-4 mt-5 h-3'>
               <div className=''>
                    <img src='https://ideptico.sirv.com/Facebook.png'></img>
               </div>

                <div className='-ml-24'>
                    <img src='https://ideptico.sirv.com/instagram.png'></img>
                </div>

                <div className='-ml-48'>
                    <img src='https://ideptico.sirv.com/twitter.png'></img>
                </div>

                <div className='-ml-72'>
                    <img src='https://ideptico.sirv.com/youtube.png'></img>
                </div>
            </div>
            <h1 className='mt-5'>
                Copyrights © 2020. All Rights Reserved
            </h1>
        </div>
        
        
    </div>
  )
}
