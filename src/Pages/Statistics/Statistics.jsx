import React from 'react';
import {
   LineChart,
   ResponsiveContainer,
   Legend, Tooltip,
   Line,
   XAxis,
   YAxis,
   CartesianGrid
} from 'recharts';
import StatisticsBanner from './StatisticsBanner';

const pdata = [
   {
      name: 'A1',
      marks: 57
   },
   {
      name: 'A2',
      marks: 50
   },
   {
      name: 'A3',
      marks: 60
   },
   {
      name: 'A4',
      marks: 45
   },
   {
      name: 'A5',
      marks: 58
   },
   {
      name: 'A6',
      marks: 51
   },
   {
      name: 'A7',
      marks: 60
   },
   {
      name: 'A8',
      marks: 60
   },
];
const Statistics = () => {
   return (
      <div>
         <StatisticsBanner></StatisticsBanner>
         <div className='text-center'>

            <div className='flex items-center justify-center'>
               <ResponsiveContainer width="100%" aspect={3}>
                  <LineChart data={pdata} margin={{ right: 100 }}>
                     <CartesianGrid />
                     <XAxis dataKey="name"
                        interval={'preserveStartEnd'} />
                     <YAxis></YAxis>
                     <Legend />
                     <Tooltip />
                     <Line dataKey="marks"
                        stroke="black" activeDot={{ r: 8 }} />

                  </LineChart>
               </ResponsiveContainer>

            </div>

         </div>
      </div>
   );
};

export default Statistics;