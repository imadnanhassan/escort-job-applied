import React from 'react';
import { Link } from 'react-router-dom';

const SingleJobCart = ({ item }) => {
   const { id, Salary, title, location, jobtype, logo, company_name, time } = item
   // console.log(id)
   return (
      <div className='rounded-md px-10 py-7 shadow-lg bg-[#F9F9FF] '>
         <img className='py-5 w-16' src={logo} alt="" />
         <h2 className='text-lg font-semibold'>{title}</h2>
         <h3 className='text-gray-500 font-medium text-base py-2'>{company_name}</h3>
         <div className='md:flex py-2  gap-4 '>
            <p className='title-text py-3 px-9   rounded border'>{jobtype}</p>
            <p className='title-text py-3 px-9   rounded border'>{time}</p>

         </div>
         <div className='md:flex items-center gap-8 text-gray-500  font-medium text-base  pb-4'>
            <p className='flex justify-center mb-2 gap-2 py-3'>{location}</p>
            <p className='flex justify-center gap-2 mb-3'>{Salary}</p>
         </div>
         <div className="">
            <Link to={`/jobdetails/${id}`} className='title-text  py-3 px-9  rounded border'>Details</Link>
         </div>
      </div>
   );
};

export default SingleJobCart;