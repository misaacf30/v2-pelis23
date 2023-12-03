import dynamic from 'next/dynamic';

const DynamicArrowLeft = dynamic(() => import('./ArrowLeft'), {
  ssr: false,
})
const DynamicArrowRight = dynamic(() => import('./ArrowRight'), {
  ssr: false,
})

interface Props {
  title: string
  media: string
  trending: string
  mediaType: string
  firstRow: boolean
}

async function getData(media: string, trending: string, mediaType: string) {
  const res = await fetch(`https://api.themoviedb.org/3/${trending}/${media}/${mediaType}?api_key=${process.env.API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Row({ title, media, trending, mediaType, firstRow }: Props) {
  const DynamicRowItem = dynamic(() => import('./RowItem'), {
    ssr: firstRow ? true : false,
    loading: () => <div className='relative w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-40 inline-block mr-2 rounded bg-pageLoader animate-pulse' />
  })

  const data = await getData(media, trending, mediaType);

  return (
    <section className={`relative ${firstRow ? ' pt-2 pb-4 md:py-12' : 'py-4 md:pb-12'} `}>
      {/* Title */}
      <h2 className='xl:text-[length:1.2cqw] mb-2 pl-4 md:pl-12'>
        {title}
      </h2>

      {/* Slider */}
      <div className='relative group pl-4 md:pl-12'>
        {/* Left arrow */}
        <DynamicArrowLeft id={title}/>

        {/* Slider Items */}
        <div className='relative'>
          <div id={title} className='w-full whitespace-nowrap overflow-x-scroll scroll-smooth no-scrollbar pr-2 md:pr-10'>
            {data.results.slice(1,10).map((item: any, index: number) => (
              <DynamicRowItem key={index} item={item} media={media} id={item.id} firstRow={firstRow} index={index} />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <DynamicArrowRight id={title}/>
      </div>
    </section>
  )
}
