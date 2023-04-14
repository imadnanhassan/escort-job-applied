import React, { useEffect, useState } from 'react';
import SingleJobCart from '../../components/SingleJobCart';
import AppliedData from '../../components/AppliedData';
import HeaderBanner from '../../components/HeaderBanner';

const AppliedJob = () => {
   const [apply, setApply] = useState([])
   const [filterJob, setFilterJob] = useState([])

   useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("apply"));
      if (storedData) {
         setApply(storedData);
         setFilterJob(storedData);
      }
   }, []);

   const handleFilter = (event) => {
      const value = event.target.value;
      const filterJob = apply.filter((item) => item.jobtype == value);
      setFilterJob(filterJob)
   }
   return (
      <>
         <HeaderBanner bannerTitle={name}></HeaderBanner>
         <div className='container mx-auto px-4'>

            <div className="my-3 px-3">
               <label htmlFor="">Filter By: </label>
               <select onChange={handleFilter} className="select select-bordered md:w-full max-w-xs ml-2">
                  <option disabled selected>
                     Choose Here
                  </option>
                  <option value="Onsite">Onsite</option>
                  <option value="Remote">Remote</option>
               </select>
            </div>

            {filterJob.length > 0 ? (
               filterJob?.map((item) => (
                  <div className="my-4">
                     <AppliedData
                        key={item.id}
                        item={item}
                     ></AppliedData>
                  </div>
               ))
            ) : (
               <h1 className="text-xl text-center text-red-500">No Order Found</h1>
            )}
         </div></>
   );
};

export default AppliedJob;