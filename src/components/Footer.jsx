import React from 'react';
import Logo from '../assets/img/logo.png'

const Footer = () => {
   return (
      <div>
         <div className='py-20 text-white bg-gray-500'>
         <div className='container mx-auto md:grid grid-cols-4 gap-10 px-4'>
            <div>
               <img className='py-4' src={Logo} alt="" />
               <p className='py-4'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>

            </div>
            <div>
               <h2 className='py-4'>Company</h2>
               <ul className='text-gray-300'>
                  <li className='hover:underline cursor-pointer' >About</li>
                  <li className='hover:underline cursor-pointer'>Work</li>
                  <li className='hover:underline cursor-pointer'>Latest News</li>
                  <li className='hover:underline cursor-pointer'>Careers</li>
               </ul>
            </div>
            <div>
               <h2 className='py-4 '>Product</h2>
               <ul className='text-gray-300'>
                  <li className='hover:underline cursor-pointer'>About</li>
                  <li className='hover:underline cursor-pointer'>Work</li>
                  <li className='hover:underline cursor-pointer'>Latest News</li>
                  <li className='hover:underline cursor-pointer'>Careers</li>
               </ul></div>
            <div>
               <h2 className='py-4'>Support</h2>
               <ul className='text-gray-300'>
                  <li className='hover:underline cursor-pointer'>About</li>
                  <li className='hover:underline cursor-pointer'>Work</li>
                  <li className='hover:underline cursor-pointer'>Latest News</li>
                  <li className='hover:underline cursor-pointer'>Careers</li>
               </ul>
            </div>
         </div>
      </div>
      </div>
   );
};

export default Footer;