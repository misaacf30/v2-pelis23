const LoaderRow = () => {
    return (
        <div className='h-[100vh] md:h-auto pl-4 md:pl-12 pt-4 pb-6 md:pt-16 relative space-y-6'>
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
    )
}

export default LoaderRow