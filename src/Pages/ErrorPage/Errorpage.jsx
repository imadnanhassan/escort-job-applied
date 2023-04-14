import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
   const error = useRouteError()
   return (
      <div>
         <h2>This is Error Page</h2>
         <h2 className='text-xl text-red-500'>{error.message}</h2>
      </div>
   );
};

export default Errorpage;