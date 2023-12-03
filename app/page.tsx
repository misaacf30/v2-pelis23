import LoaderRow from './components/LoaderRow'
import { Suspense, lazy } from 'react'
import Row from './components/Row'
import Hero from './components/Hero'
import LoaderHero from './components/LoaderHero'
const LazyRow = lazy(() => import('@/app/components/Row'));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<LoaderHero />}>
        <Hero media='movie' trending='' type='now_playing' />
      </Suspense>

      <Suspense fallback={<LoaderRow />} >
        <Row title='Trending Movies' media='movie' trending='trending' mediaType='day' firstRow={true} />
      </Suspense>

      <Suspense>
        <LazyRow title='Trending TV Shows' media='tv' trending='trending' mediaType='day' firstRow={false} />
        <LazyRow title='Movies In Theaters' media='movie' trending='' mediaType='now_playing' firstRow={false} />
      </Suspense>
      <Suspense>
        <LazyRow title='Popular TV Shows' media='tv' trending='' mediaType='popular' firstRow={false} />
        <LazyRow title='Popular Movies' media='movie' trending='' mediaType='popular' firstRow={false} />
      </Suspense>
      <Suspense>
        <LazyRow title='Top Rated TV Shows' media='tv' trending='' mediaType='top_rated' firstRow={false} />
      </Suspense>
    </main>
  )
}
