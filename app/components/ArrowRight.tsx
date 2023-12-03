'use client'

interface Props {
    id: string
}

const ArrowRight = ({ id }: Props) => {
    const toRight = () => {
        var slider = document.getElementById(id)!;
        slider.scrollLeft = slider.scrollLeft + 400
    };

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className='hidden sm:group-hover:block sm:absolute right-0 bottom-[45%] w-6 sm:w-12 text-white bg-black/50 hover:bg-black/75 rounded-full p-2 z-10 cursor-pointer'
            onClick={toRight}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    )
}

export default ArrowRight