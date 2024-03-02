import React from 'react'
import '../App.css'
import personImg from '../assets/personwithbag.png'
import Voucher from '../assets/voucher.png';
import bgimg from '../assets/Sativa1.png';
import recimg1 from '../assets/image14.png';
import recimg2 from '../assets/image15.png';
import a1 from '../assets/ua1.png';
import a2 from '../assets/ua2.png';
import a3 from '../assets/ua3.png';
import howitwork from '../assets/Frame3.png'


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

    <div className='border-1 w-2/4 px-8 py-3 absolute left-1/4 shadow-2xl flex justify-center'>
     <div className='flex items-center space-x-10'>
     <h2 className='text-2xl font-bold'>Launching Our Mobile App Soon</h2>
      <button className="bg-orange-600 text-white px-5 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-600 ">
      <span className="text-2xl">NOTIFY ME</span>
           </button>
     </div>
    </div>

    <div>
      <div className='relative'>
      <img  className='w-full' src={bgimg} alt="" />
        <div className='absolute top-60 left-20 w-1/3 text-white space-y-4'>
          <h2 className='text-5xl py-5 font-bold'>WHO WE ARE</h2>
          <p>At Vegan Basket, where our passion for fresh, locally sourced vegan produce meets the convenience of urban living.</p>
          <p>Founded with a vision to connect city dwellers with the essence of the farm, we're on a mission to redefine the way you experience your daily nourishment.</p>
          <p>Our mission is simple yet impactful: connect you directly with farmers to bring you the finest, locally grown, and seasonal vegan products. </p>
          <p>Say goodbye to the middleman, and say hello to affordable, top-quality produce.</p>
          <div className='text-2xl font-bold pt-10'>
            <h2>Recognized by</h2>
           <div className='flex space-x-5 py-4'>
           <img src={recimg1} alt="" />
          <img src={recimg2} alt="" />
           </div>
          </div>
        </div>
      </div>
    </div>

<div className='py-10'>
  <h1 className='text-center text-4xl font-semibold pb-5'>OUR UNIQUE APPROACH</h1>
  <div className='grid grid-cols-3 gap-10 content-center p-5'>
  <div className='p-8 space-y-4'>
    <img src={a1} alt="" />
    <h1 className='font-semibold text-2xl'>Farm-to-Table Goodness</h1>
    <p>We bridge the gap between rural farms and your urban home. By eliminating unnecessary intermediaries, we ensure that you receive the freshest products at prices that won't break the bank.</p>
  </div>
  <div className='p-8 space-y-4'>
    <img src={a2} alt="" />
    <h1 className='font-semibold text-2xl'>Supporting Local Agriculture</h1>
    <p> Your choice to shop with us directly contributes to the livelihoods of local farmers. With each purchase, you're empowering sustainable agriculture and helping communities thrive.</p>
  </div>
  <div className='p-8 space-y-4'>
    <img src={a3} alt="" />
    <h1 className='font-semibold text-2xl'>Quality and Freshness</h1>
    <p>Our vegan baskets are curated with care, containing only the highest quality fruits and vegetables. You can trust that every bite is bursting with flavor and nutrients.</p>
  </div>
  </div>
</div>
<div className='p-10 mx-20'>
  <img src={howitwork} alt="" />
  </div>

    </div>
  )
}

export default Home
