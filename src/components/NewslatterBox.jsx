import { Button } from '@heroui/react';
import React from 'react'

const NewslatterBox = () => {
  return (
    <div className='text-center my-10'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20% off</p>
      <p className='text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate</p>

      <form className='w-full sm:w-1/2 mx-auto flex gap-3 border my-6 pl-3'>
        <input type="email" className='w-full sm:flex-1 outline-none' required placeholder='Enater Your E-mail' />
        <Button type='submit' className='rounded-none bg-black text-white textxs'>Subscribe</Button>
      </form>
    </div>
  )
}

export default NewslatterBox;
