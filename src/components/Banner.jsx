import React from 'react';
import img from '../assets/img/herosection.gif'

const Banner = () => {
   return (
      <div className='container mx-auto md:flex justify-center items-center px-5'>
      {/* bg-[#F9F9FF] */}
      <div>
         <h1 className='title-text text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text py-2'>
            One Step Closer To Your Dream Job
         </h1>
         <p className='py-4 font-medium text-gray-500'>Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
         <button className='title-text py-3 px-9  rounded border-2'>Get start</button>
      </div>
      <div>
         <img src={img} alt="" />
      </div>
   </div>
   );
};

export default Banner;