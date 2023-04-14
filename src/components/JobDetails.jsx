import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
   const job = useLoaderData();
   const [apply, setApply] = useState(false)

   console.log(job)
   const { id, job_description, job_responsibility, educational_requirements, experiences, Salary, title, contact_information } = job

   useEffect(() => {
      const stroedData = JSON.parse(localStorage.getItem("apply"));
      if (stroedData) {
         const exist = stroedData.find(item => item.id === id)
         if (exist) {
            setApply(true)
         }
      }
   }, [job])

   const handleApply = () => {
      const storedData = JSON.parse(localStorage.getItem("apply"));


      if(storedData){
              localStorage.setItem("apply",JSON.stringify([...storedData,job]))
  
      }else{
          localStorage.setItem("apply",JSON.stringify([job]))
      }
      setApply(true)
   }

   return (
      <div>
         <div className='container mx-auto px-11 grid grid-cols-8 gap-9 py-32'>
            <div className='col-span-5'>
               <p className='py-4'><strong>Job Description:</strong> {job_description}</p>
               <p className='py-4'><strong>Job Responsibility:</strong> {job_responsibility}</p>
               <p className='py-4'><strong>Job Requirment:</strong> {educational_requirements}</p>
               <p className='py-4'><strong>Job Experience:</strong> {experiences}</p>
            </div>
            <div className='col-span-3 px-12 py-5 bg-[#F9F9FF] rounded-md'>
               <div className='py-4'>
                  <h3 className='mb-5 font-bold text-xl text-gray-700'>Job Details</h3>
                  <p className='border-t-2 pt-5 text-gray-500 font-medium text-lg'>Salary: {Salary} (PerMonth)</p>
                  <p className='text-gray-500 font-medium text-lg py-2'>Job Title: {title}</p>
               </div>
               <div className='py-4'>
                  <h3 className='py-4 font-bold text-xl text-gray-700'>Contact Information</h3>
                  <p className='text-gray-500 font-medium text-lg py-2'><strong>Phone:</strong> {contact_information.phone}</p>
                  <p className='text-gray-500 font-medium text-lg py-2'><strong>Email:</strong> {contact_information.email}</p>
                  <p className='text-gray-500 font-medium text-lg py-2'><strong>Address:</strong> {contact_information.address}</p>
               </div>
               <button  onClick={handleApply} className='border title-text  py-3 px-9 rounded '>
               {
                apply ?
                "Already Applied"
                :
                "Aply job"
                }
               </button>
            </div>
         </div>
      </div>
   );
};


// disabled={apply}

export default JobDetails;