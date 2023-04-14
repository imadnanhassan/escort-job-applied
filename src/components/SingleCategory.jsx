import React from 'react';

const SingleCategory = ({ item }) => {
   const { title, jobs_available, icon } = item
   return (
      <div className='container mx-auto bg-[#F9F9FF] py-7 px-7'>
         <img className='w-12 py-3' src={icon} alt="" />
         <h2 className='pt-2 pb-3 text-lg font-semibold'>{title}</h2>
         <p className='font-medium text-gray-400'>{jobs_available}+ Jobs Available</p>
      </div>
   );
};

export default SingleCategory;