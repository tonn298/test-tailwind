import React from 'react';
import data from '../assets/list';
import Card from '../components/Card';

/**
 * 
 * Usage
 * ```
* 
    <LandingPage />
```
 */

const LandingPage = () => {
  return (
    <div className='bg-white p-10'>
      <div className='mb-10'> items 1-12 of 23</div>
      <div className='flex flex-wrap '>
        {data.map((cardData) => {
          return <Card key={cardData.id} data={cardData} />;
        })}
      </div>
      <div className='flex justify-center mt-10'>
        <div className='flex'>
          <div className='w-10 h-10 bg-red-300 hover:bg-red-600 flex justify-center content-center'>
            <p className='m-auto'>1</p>
          </div>
          <div className='w-10 h-10 bg-red-300 hover:bg-red-600 flex justify-center'>
            <p className='m-auto'>2</p>
          </div>
          <div className='w-10 h-10 bg-gray-200 hover:bg-gray-500 flex justify-center'>
            <p className='m-auto'>{`>`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
