import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import BlogBanner from './BlogBanner';

const Blogs = () => {
   return (
      <>
       <BlogBanner></BlogBanner>
       
      <div>
         <div className='container mx-auto py-28'>
            <div className='py-4 px-4'>
               <h3 className='font-semibold text-lg text-gray-800'>What is a custom hook?</h3>
               <p className='text-gray-600 font-normal text-base'>We can create our own custom hooks using the 'use' prefix.We are created using use prefix like as ureEffect , useSate and others .Example , i need fetch data from api , so i can use my custom hook like 'useDataFromApi' . It contains URL and return data form api .</p>
            </div>
            <div className='py-4 px-4'>
               <h3 className='font-semibold text-lg text-gray-800'>What is useRef?</h3>
               <p className='text-gray-600 font-normal text-base'>useRef is a hook that returns a mutable ref object.It means we can change and update the value.The useRef hook is called with an initial value as its argument, and it returns an object with a single property called current. The current property is initially set to the initial value passed to useRef, but it can be updated by assigning a new value to it.</p>
            </div>
            <div className='py-4 px-4'>
               <h3 className='font-semibold text-lg text-gray-800'>When should you use context API?</h3>
               <p className='text-gray-600 font-normal text-base'>Context API gives us super power , we can't need to props drilling . We use Context api for data passing grand father to grand child more easy way . The Context API is the React feature used for solving props drilling problems.Its give us more easy way to data passing .
               </p>
            </div>
            <div className='py-4 px-4'>
               <h3 className='font-semibold text-lg text-gray-800'>What is useMomo?</h3>
               <p className='text-gray-600 font-normal text-base'>useMemo is a built-in hook in React that allows you to memoize a value, which means that you can store the result of a computation and only recompute it when its dependencies change. This can be useful when you have a computationally expensive function that needs to be called frequently, or when you need to optimize the performance of your component by reducing unnecessary re-renders.</p>
            </div>
         </div>
      </div>
      </>
   );
};

export default Blogs;