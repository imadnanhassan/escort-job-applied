import React from 'react';
import Banner from '../../components/Banner';
import JobCategory from '../../components/JobCategory';
import FeaturedJobs from '../../components/FeaturedJobs';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <JobCategory></JobCategory>
         <FeaturedJobs></FeaturedJobs>
      </div>
   );
};

export default Home;