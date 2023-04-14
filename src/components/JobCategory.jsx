import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';

const JobCategory = () => {
   const [category, setCategory] = useState([])
   useEffect(() => {
      fetch('/category.json')
         .then(res => res.json())
         .then(data => setCategory(data));
   }, [])
   return (
      <div className='container mx-auto py-32'>
         <div className='text-center px-5'>
            <h2 className='font-extrabold md:text-5xl text-2xl py-4'>Job Category List</h2>
            <p className='font-medium text-base py-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>
         <div className='md:grid grid-cols-4 gap-6 py-8 px-3  rounded'>
            {
               category.map(item =>
                  <SingleCategory
                     key={item.id}
                     item={item}
                  ></SingleCategory>)
            }
         </div>
      </div>
   );
};

export default JobCategory;