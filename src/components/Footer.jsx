import React from 'react';
import {assets} from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm text-gray-500' >
        <div>
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ab at id molestiae eligendi doloribus, sint quia accusantium itaque dolorem illum possimus fugit perspiciatis iure quasi harum similique ipsa! Voluptatem, molestias laborum quis sunt velit sequi assumenda ipsum dolor explicabo unde, quas at facere soluta, similique corporis culpa magnam earum!</p>
        </div>

        <div>
            <p className='text-lg font-medium text-gray-800'>Company</p>

            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Collection</li>
                <li>Privecy policy</li>
            </ul>
        </div>


        <div>
            <p className='text-lg font-medium text-gray-800'>Comtact</p>

            <ul>
                <li>09875689463</li>
                <li>foreever@gmail.com</li>
            </ul>
        </div>
      </div>

      <div className='text-center text-gray-400'>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, libero.</p>
      </div>
    </div>
  )
}

export default Footer
