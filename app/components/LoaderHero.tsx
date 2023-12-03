const LoaderHero = () => {
    return (
        <div className='h-[40vw] pl-4 md:pl-12 pt-48 hidden sm:flex relative flex-col justify-center space-y-4 animate-pulse'>
            <div className='relative w-36 h-6 rounded bg-pageLoader' />
            <div className='relative w-96 h-4 rounded bg-pageLoader' />
            <div className='relative w-96 h-4 rounded bg-pageLoader' />
            <div className='relative w-12 h-4 rounded bg-pageLoader' />
        </div>

    )
}

export default LoaderHero