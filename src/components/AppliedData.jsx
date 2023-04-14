import React from 'react';
import { Link } from 'react-router-dom';

const AppliedData = ({ item }) => {
   const { logo, title, company_name, jobtype, time, location, Salary } = item
   return (
      <div className='container mx-auto md:flex justify-between items-center px-7 py-3 border rounded-md'>
         <div className='md:flex items-center py-4 px-2 gap-8'>
            <div>
               <img className='rounded-md  py-4 px-3 bg-[#F4F4F4]' src={logo} alt="" />
            </div>
            <div>
               <h2 className='text-lg font-semibold py-2'>{title}</h2>
               <h3 className='text-gray-500 font-medium text-base py-2'>{company_name}</h3>
               <div className='md:flex py-2  gap-4 '>
                  <p className='title-text py-3 px-9   rounded border'>{jobtype}</p>
                  <p className='title-text py-3 px-9   rounded border'>{time}</p>
               </div>
               <div className='md:flex items-center gap-8 text-gray-500  font-medium text-base  pb-4'>
                  <p className='flex justify-center mb-2 gap-2 py-3'>{location}</p>
                  <p className='flex justify-center gap-2 mb-3'>{Salary}</p>
               </div>
            </div>


         </div>
         <div className='mb-4'>
            <Link to={'/'} className='title-text  py-3 px-9  rounded border'>View Details</Link>
         </div>
      </div>
   );
};

export default AppliedData;