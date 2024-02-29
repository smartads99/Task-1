import React from 'react'
import '../App.css'
import personImg from '../assets/personwithbag.png'
import Voucher from '../assets/voucher.png';

function Home() {
  return (
    <div>
      <div className='container flex justify-between items-center'>
      <div>
      </div>
      <div className='font-bold text-5xl'>
        <h1>No <span class="text-orange-500">Middleman</span>,</h1>
        <h1>Just Maximum</h1>
        <h1> <span className='text-green-600'>Freshness</span></h1>
        <button className="bg-green-500 text-white px-5 py-4 rounded flex items-center space-x-2 hover:bg-green-600 mr-12 mt-8">
        <img src={Voucher} alt="Button Icon" className="h-6 w-6" />
        <span className="text-2xl">GET COUPONS</span>
        </button>
      </div>
      <div class='personimg' ><img src={personImg} alt=""/></div>
    </div>
    <div className='border-4 flex items-center'>
      <h2 className='justify-items-center'>Launching Our Mobile App Soon</h2>
      <button className="bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-600 mr-12">
      <span className="text-2xl">NOTIFY ME</span>
           </button>
    </div>
    </div>
  )
}

export default Home
