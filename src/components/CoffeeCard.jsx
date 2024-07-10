import React from 'react'

const CoffeeCard = ({data}) => {
  const { name, image, price, rating, votes, popular, available } = data;

  return (
    <>
      <div className='h-max w-[90%] sm:w-[75%] mx-auto pb-10'>

        <figure className='sm:h-[175px] lg:h-[195px] flex justify-center relative'>
          <img src={image} alt="coffee-image" className='rounded-xl w-full' />
          {popular ? <span className='absolute bg-yellow-org left-3 top-3 px-3 py-1 rounded-xl text-xs font-semibold'>Popular</span> : <span></span>}
        </figure>

        <div>
          <div className='p-[15px] relative'>
            <h2 className='text-white font-bold text-lg pb-2'>{name}</h2>

            <div className='flex w-max'>

              <div className='text-white flex space-x-2 font-semibold'>
                
                { !votes == 0 ?
                <>
                  <img src="./Star_fill.svg" alt="raiting" />
                  <span className='flex'>
                    {rating} <span className='px-1 text-white/50'> ({votes} votes) </span>
                  </span>
                </>
                :
                <>
                <img src="./Star.svg" alt="raiting" />
                <span className='px-1 text-white/50'> No raiting </span>
                </>
                }
                
              </div>

            </div>
            <span className='bg-gree-light px-3 py-[4px] rounded-lg font-semibold absolute top-3 right-0'>{price}</span>
            { !available ? <span className='text-red-light font-semibold absolute bottom-3 right-0'>Sold out</span> : <span></span>}
          </div>
        </div>
      </div>
    </>
  )
}

export default CoffeeCard
