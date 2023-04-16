import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJobCart from './SingleJobCart';

const FeaturedJobs = () => {
   const job = useLoaderData();
   const [jobDetails, setJobDetails] = useState(job)
   const [index, setindex] = useState(6)
   const showAllJob = () => {
      if (index === 6) {
         setindex(job.length)
      }
      else {
         setindex(4)
      }
   }

   return (
      <div className='container mx-auto'>
         <div className="my-8">
            <h1 className="text-3xl text-center py-5">Out Featured Foods</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               {jobDetails.slice(0, index).map(item => <SingleJobCart
                  key={item.id}
                  item={item} />)

               }
            </div>
            <div className='flex justify-center mt-6'>
               <button onClick={showAllJob} className='title-text  py-3 px-9  rounded border'>{index === 6 ? 'See All Jobs' : 'View Less Jobs'}</button>
            </div>
         </div>
      </div>
   );
};

export default FeaturedJobs;