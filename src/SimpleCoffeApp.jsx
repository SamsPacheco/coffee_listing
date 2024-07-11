import React from 'react'
import { useFetch } from './hooks/useFetch'
import CoffeeCard from './components/CoffeeCard';

const SimpleCoffeApp = () => {

    // consumo de la api proporcionada
    const { data, isLoading } = useFetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'); 
    //console.log(data)

  
  return (
      <>
        <header className='relative w-full h-[300px] bg-cafe bg-contain bg-no-repeat xl:bg-cover' >
        </header>

        <main className='relative flex sm:flex-col items-center' >

          <section className='h-max bg-black-two rounded-[12px] absolute lg:-top-[165px] xl:-top-[140px] sm:-top-[215px] z-50 overflow-hidden xl:w-[85%] lg:w-[70%] sm:w-[65%]'>

            <figure>
              <img src="./vector.svg" alt="vector-svg" className='absolute sm:-right-[85px] lg:right-[100px] sm:top-[55px] -z-10 sm:h-[195px] xl:right-[260px]' />
            </figure>

              <div className='text-gray-color font-semibold text-xl text-center pt-[110px] space-y-4 z-50 pb-8 lg:pb-12'>
                <h2 className='text-white sm:text-[32px] lg:text-[38px] xl:text-[42px]'>Our Collection</h2>
                <p className='w-[80%] sm:w-[80%] xl:w-[55%] mx-auto text-[17px] tracking-tight lg:text-[19px]'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>

                <div className='w-[70%] flex justify-center mx-auto px-1 lg:space-x-2 '>
                  <button className='focus:bg-gray-color text-white px-[15px] lg:px-[20px] py-[8px] rounded-xl lg:rounded-lg text-[15px] lg:text-[18px]'>
                    All profucts
                  </button>
                  <button className='focus:bg-gray-color text-white px-[15px] lg:px-[20px] py-[8px] rounded-xl lg:rounded-lg text-[15px] lg:text-[18px]'>
                    Available Now
                  </button>
                </div>
                
              </div>
              <article className='rounded-xl grid sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-8 xl:px-24 sm:px-[65px] pb-10'>
                { data ? data.map( (collection) => <CoffeeCard data={collection} key={collection.id}/>) : <h2>Error</h2>}
              </article>

              <div className='h-[150px] w-full bg-black-one'></div>
          </section>


        </main>
      </>
    )
}

export default SimpleCoffeApp
