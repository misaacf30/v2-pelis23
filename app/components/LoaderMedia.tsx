import React from 'react'

const LoaderMedia = () => {
    return (
        <div className=' flex flex-col items-center h-screen'>
            <div className='w-[100vw] flex flex-col justify-center items-center py-4 md:py-[68px]'>
                <div className='w-[250px] max-w-[40vw] h-[350px] max-h-[50vw] rounded-lg bg-pageLoader animate-pulse' />
            </div>
            <div className='flex flex-col items-center space-y-4'>
                <div className=' w-[300px] max-w-[50vw] h-6 rounded bg-pageLoader' />
                <div className=' w-[450px] max-w-[80vw] h-4 rounded bg-pageLoader' />
                <div className=' w-[450px] max-w-[80vw] h-4 rounded bg-pageLoader' />
            </div>
            
        </div>

    )
}

export default LoaderMedia