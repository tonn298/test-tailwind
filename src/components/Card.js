import React, { useEffect } from 'react';
import { useState } from 'react';
import Star from '../elements/Star';
import dayjs from 'dayjs';

/**
 * 
 * Usage
 * ```
* 


  <Card key={cardData.id} data={cardData} />


 ***** the key should be unique id and cardData will be in this format ICard[] (an array of following interface)
  

  interface ICard {
    id: number,
    title: string,
    vote: number,
    price: number,
    image_url: string,
    created_at: string, ( that will be in this '2018-12-08 17:01:15' format)
  },

  ```
 */

const Card = ({ data }) => {
  const [starArray, setStarArray] = useState(null);
  // in weeks
  const createdAt = getCreatedDateInWeeks();

  function getTotalStar(totalStar) {
    const starCount = [];
    // since this is not typescript, i'll assume totalStar is a Number in the code
    for (let i = 0; i < totalStar; i++) {
      starCount.push(i);
    }
    setStarArray(starCount);
  }
  useEffect(() => {
    getTotalStar(data?.vote);
  }, [data?.vote]);

  function getCreatedDateInWeeks() {
    const dateNow = dayjs();
    const cardCreateDate = dayjs(data.created_at);
    const diffInWeeks = dateNow.diff(cardCreateDate, 'week');
    // setCreateAt(diffInWeeks);
    return diffInWeeks;
  }

  return (
    <div className='min-w-0 flex basis-full sm:basis-1/2 lg:basis-1/4 flex-col px-4 py-2 space-x-4 space-y-8 hover:border-2 hover:shadow-2xl justify-between'>
      <div className='object-cover bg-black flex justify-center'>
        <img src={data.image_url} alt='' />
      </div>
      <div className='mb-4'>{data.title}</div>

      <div className='flex flex-col justify-around'>
        <div className='relative bottom-0'>
          <div className='mb-2'>{`${createdAt} week${
            createdAt > 1 ? 's' : null
          } ago`}</div>
          <div className='flex mb-2'>
            {starArray?.length === 0 ? (
              <div className='h-star'> Not rated yet</div>
            ) : (
              starArray?.map(() => <Star />)
            )}
          </div>
          <div className='price'> {`฿ ${data.price}.00`}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
