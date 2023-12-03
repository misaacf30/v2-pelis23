import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicPlayTrailer = dynamic(() => import('./PlayTrailer'), {
  ssr: false,
  loading: () =>
    <div className="w-full bg-secondary/90 text-center rounded-lg border border-background mx-auto my-2 md:mt-4 py-2 md:py-4 text-background font-extrabold flex justify-center items-center">
      <PlayIcon />
      &nbsp;PLAY TRAILER
    </div>
})
const DynamicCast = dynamic(() => import('./Cast'), {
  ssr: false,
})

interface Props {
  type: string,
  id: string
}

async function getData(type: string, id: string, category: string) {
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}${category}?api_key=${process.env.API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function PlayIcon() {
  "use server";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  )
}

export default async function Media({ type, id }: Props) {
  const media = await getData(type, id, '');
  const imgPath = "https://image.tmdb.org/t/p/original"

  return (
    <div className="flex flex-col justify-center lg:items-center ">
      {/* // Backdrop with Poster */}
      <div className="relative w-full">
        <div className='absolute w-full h-[100%] bg-gradient-to-b from-transparent to-background -z-10' />
        <Image
          unoptimized={true}
          src={imgPath + media.backdrop_path}
          alt={'Backdrop image'}
          fill
          className='object-cover object-center -z-20
            md:grayscale-0 saturate-[200%] contrast-[70%] brightness-[50%] invert-[10%] sepia-[0%] hue-rotate-[0deg]'
        />
        <div className='flex flex-col justify-center items-center md:py-[68px] py-4'>
          <Image
            unoptimized={true}
            priority
            src={imgPath + media.poster_path}
            alt='Poster image'
            width={250}
            height={250}
            className='rounded-lg max-w-[40vw] -z-10'
          />
        </div>
      </div>

      {/* Details */}
      <div className='relative max-w-[1024px] px-4 md:px-6 md:-translate-y-[34px] z-0 divide-y-[0.5px] divide-primary/10 '>
        {/* 2 columns */}
        <div className="md:flex mt-2 md:mt-4 mb-6 md:mb-12">
          {/* Title, Year, Runtime, Score, Genres ,Tagline, Overview */}
          <div className='md:w-[60%] md:pr-8'>
            <h1 className='text-secondary text-2xl sm:text-4xl font-bold text-center md:text-left'>{media.title || media.name}&nbsp;</h1>
            <div className='flex space-x-4 mt-2 justify-center md:justify-normal'>
              <span>{(media.release_date || media.first_air_date).substring(0, 4)}</span>
              <span>{media.runtime || media.number_of_seasons}{type === 'movie' ? 'min' : ' season(s)'}</span>
              <div className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                  className="w-6 h-6 text-secondary">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <span>{Math.trunc(media.vote_average * 10)}%</span>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap justify-center md:justify-start">
              {media.genres.map((genre: any, index: number) =>
                <span key={index} className='border-[0.5px] rounded-xl px-2 py-1 mr-2 mb-2'>{genre.name}</span>
              )}
            </div>
            <div className='mt-2'>
              <h3 className=' text-primary/50  italic'>
                {media.tagline}
              </h3>
              <p className="flex-none line-clamp-6 mt-2">
                {media.overview}
              </p>
            </div>

          </div>

          {/* Play Trailer, Movie, IMDB*/}
          <div className="md:w-[40%] md:mt-0 flex flex-col justify-end mt-4">
            <DynamicPlayTrailer type={type} id={id} icon={<PlayIcon />} />
            {media.homepage &&
              <Link
                href={media.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-[80%] text-sm sm:text-base text-background font-extrabold bg-secondary/90 text-center rounded-lg border border-background mx-auto my-2 md:mt-4 py-2 md:py-4 flex justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                </svg>
                <span>&nbsp;{type === 'movie' ? 'WATCH MOVIE' : 'WATCH SHOW'}</span>
              </Link>
            }
            {media.imdb_id &&
              <Link
                href={'https://www.imdb.com/title/' + media.imdb_id}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-[80%] text-sm sm:text-base text-background font-extrabold bg-secondary/90 text-center rounded-lg border border-background mx-auto my-2 md:mt-4 py-2 md:py-4 flex justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                  <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
                </svg>
                <span>&nbsp;MORE ON IMDB</span>
              </Link>
            }
          </div>
        </div>

        {/* Cast */}
        <DynamicCast type={type} id={id} imgPath={imgPath} />
      </div>
    </div>
  )
}