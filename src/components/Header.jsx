import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png'

const Header = () => {
   return (
      <>
         <div className='container mx-auto flex justify-between items-center py-8'>
            {/* bg-[#F9F9FF] */}
            <Link to='/'><img className='w-40' src={Logo} alt="" /></Link>
            <div>
               <nav className='flex gap-8 font-medium text-base text-gray-600'>
                  <Link to={'/'}>Home</Link>
                  <Link to={'/applied-job'}>Applied Jobs</Link>
                  <Link to={'/statistics'}>Statistics</Link>
                  <Link to={'/blog'}>Blog</Link>

               </nav>
            </div>
            <div className='bg-green-600 py-2 px-3 text-white rounded'><button >Star Applying</button></div>
         </div>
      </>
   );
};

export default Header;