import Hero from '@/app/components/Hero';
import LoaderHero from '@/app/components/LoaderHero';
import LoaderRow from '@/app/components/LoaderRow';
import Row from '@/app/components/Row';
import { Suspense, lazy } from 'react'
const LazyRow = lazy(() => import('@/app/components/Row'));

export default async function Trending() {

  return (
    <main>
      <Suspense fallback={<LoaderHero/>}>
        <Hero  media='movie' trending='trending' type='day' />
      </Suspense>
      <Suspense fallback={<LoaderRow/>}>
        <Row title='Movies' media='movie' trending='trending' mediaType='day' firstRow={true} />
      </Suspense>
      <Suspense>
        <LazyRow title='TV Shows' media='tv' trending='trending' mediaType='day' firstRow={false} />
      </Suspense>
    </main>
  )
}
