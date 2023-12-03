import Image from 'next/image';
import Link from 'next/link';

interface Props {
    media: string
    type: string
    trending: string
}

async function getData(media: string, type: string, trending: string) {
    const res = await fetch(`https://api.themoviedb.org/3/${trending}/${media}/${type}?api_key=${process.env.API_KEY}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Hero({ media, type, trending }: Props) {
    const film = await getData(media, type, trending);
    const imgPath = "https://image.tmdb.org/t/p/original";
    let index = 1;

    return (
         <section className='hidden md:block relative h-[40vw] w-[100%]'>
         <div className='absolute h-[56.25vw] w-full'>
             <div>
                 <div className='absolute w-full h-[100%] bg-gradient-to-r from-background  via-transparent to-transparent -z-10' />
                 <div className='absolute w-full h-[100%] bg-gradient-to-b from-transparent via-transparent to-background -z-10' />
                 <Image
                     src={imgPath + film.results[index].backdrop_path}
                     unoptimized
                     priority={true}
                     quality={75}
                     alt={film.results[index].title}
                     fill
                     sizes='100vw'
                     placeholder='blur'
                     blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMUuQgAAP8A5ySs2+wAAAAASUVORK5CYII='
                     className=' object-cover object-center -z-20'
                 />

             </div>
             {/* Title, Overview, Link*/}
             <div className="absolute left-12 bottom-[50%] max-w-[35vw] max-h-[30%]">
                 <h1 className='text-[length:5cqw] leading-snug line-clamp-3 mb-4 font-serif'>
                     {film.results[index].title || film.results[index].original_title || film.results[index].original_name}
                 </h1>
                 <p className='text-[length:1.2cqw] leading-snug line-clamp-3 pl-2 mb-4 font-sans'>
                     {film.results[index].overview}
                 </p>
                 <div className='pl-2'>
                     <Link
                         href={`${media}/${film.results[index].id}`}
                         className='bg-primary/20 rounded-md px-2 py-1 flex justify-center items-center space-x-2 w-[30%] hover:bg-primary/10'
                     >
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[20%]">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                         </svg>
                         <span className='text-[length:1.2cqw] font-sans'>More info</span>
                     </Link>
                 </div>

             </div>
         </div>
     </section>    
    )
}