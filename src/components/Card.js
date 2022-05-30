import React from 'react';
import Star from '../elements/Star';

const Card = ({ data }) => {
  return (
    <div className='w-card h-card flex flex-col m-1 px-4 py-2 space-x-4 space-y-8 hover:border-2 justify-between'>
      <div className='object-cover bg-black flex justify-center'>
        <img src={data.image_url} alt='' />
      </div>
      <div className='mb-4'>{data.title}</div>

      <div className='flex flex-col justify-around'>
        <div className='relative bottom-0'>
          <div className='mb-2'>{data.created_at}</div>
          <div className='flex mb-2'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className='price'> {`฿ ${data.price}.00`}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
