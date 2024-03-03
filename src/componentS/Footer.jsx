import React from 'react'
import facebookIcon from '../assets/f-icon.png'
import instagramIcon from '../assets/i-icon.png'
import youtubeIcon from '../assets/y-icon.png'

function Footer() {
  return (
    
    <div className="bg-footer-texture">
         <div className='flex flex-row space-x-5 py-4 justify-between p-40 pt-20'>
         <div className='size-60 space-y-5'>
            <h1 className='text-3xl font-bold'>ADDRESS</h1>
            <p>123 Green Street Urbanville, Vegantown Freshland, FL 12345 United Veggies</p>
         </div>
         <div className='size-70 space-y-5'>
            <h1 className='text-3xl font-bold'>CONNECT WITH US</h1>
            <p>info@veganbasket</p>
            <button className="bg-green-600 text-white px-5 py-3 rounded-lg space-x-2 hover:bg-orange-600 left-5">
              <span className="text-2xl font-semibold">+91 93843 02820</span>
            </button>
         </div>
         <div className='size-60 space-y-5'>
            <h1 className='text-3xl font-bold'>FOLLOW US</h1>
            <div className='flex space-x-5 py-4'>
                <img src={facebookIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <img src={youtubeIcon} alt="" />
            </div>
         </div>
         </div>
          </div>
    
  )
}

export default Footer