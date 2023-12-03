import Hero from '@/app/components/Hero';
import LoaderHero from '@/app/components/LoaderHero';
import LoaderRow from '@/app/components/LoaderRow'
import Row from '@/app/components/Row';
import { Suspense, lazy } from 'react'
const LazyRow = lazy(() => import('@/app/components/Row'));


export default async function Movies() {
  return (
    <main>
      <Suspense fallback={<LoaderHero/>}>
        <Hero media='movie' trending='' type='upcoming' />
      </Suspense>
      <Suspense fallback={<LoaderRow/>}>
        <Row title='In Theaters' media='movie' trending='' mediaType='now_playing' firstRow={true} />
      </Suspense>
      <Suspense>
        <LazyRow title='Trending' media='movie' trending='trending' mediaType='day' firstRow={false} />
        <LazyRow title='Popular' media='movie' trending='' mediaType='popular' firstRow={false} />
      </Suspense>
    </main>
  )
}

