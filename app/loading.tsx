import React from 'react'

const loading = () => {
  return (
    <div className='pl-4 md:pl-12 h-[100vh]'>
      <div className='h-[40vw] pt-48 hidden sm:flex relative flex-col justify-center space-y-4 animate-pulse'>
        <div className='relative w-36 h-6 rounded bg-pageLoader' />
        <div className='relative w-96 h-4 rounded bg-pageLoader' />
        <div className='relative w-96 h-4 rounded bg-pageLoader' />
        <div className='relative w-12 h-4 rounded bg-pageLoader' />
      </div>

      <div className='pt-2 md:pt-16 relative space-y-6'>
        <div className='relative w-28 h-4 rounded bg-pageLoader' />
        <div className="flex">
          <div className='relative w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-40 inline-block mr-2 rounded bg-pageLoader animate-pulse' />
          <div className='relative w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-40 inline-block mr-2 rounded bg-pageLoader animate-pulse' />
          <div className='relative w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-40 inline-block mr-2 rounded bg-pageLoader animate-pulse' />
          <div className='hidden md:inline-block relative w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-40 mr-2 rounded bg-pageLoader animate-pulse' />
          <div className='hidden lg:inline-block relative w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-40 mr-2 rounded bg-pageLoader animate-pulse' />
          <div className='hidden xl:inline-block relative w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-40 mr-2 rounded bg-pageLoader animate-pulse' />
        </div>
      </div>
    </div>
  )
}

export default loading