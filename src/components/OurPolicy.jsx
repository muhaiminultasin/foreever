import React from 'react'
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col justify-center  sm:flex-row gap-12 sm:gap-20 text-center py-2 text-gray-500'>
      <div className="">
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore obcaecati similique! Nemo veniam eum et, minus vel assumenda ad esse temporibus laborum, eos eaque, quam delectus blanditiis dolorem ratione.</p>
      </div>
      <div className="">
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className="font-semibold">24/7 support</p>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore obcaecati similique! Nemo veniam eum et, minus vel assumenda ad esse temporibus laborum, eos eaque, quam delectus blanditiis dolorem ratione.</p>
      </div>
      <div className="">
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>7 Days Return policy</p>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore obcaecati similique! Nemo veniam eum et, minus vel assumenda ad esse temporibus laborum, eos eaque, quam delectus blanditiis dolorem ratione.</p>
      </div>
    </div>
  )
}

export default OurPolicy;
