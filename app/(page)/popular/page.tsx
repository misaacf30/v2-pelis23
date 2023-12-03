import Hero from '@/app/components/Hero';
import LoaderHero from '@/app/components/LoaderHero';
import LoaderRow from '@/app/components/LoaderRow'
import Row from '@/app/components/Row';
import { Suspense, lazy } from 'react'
const LazyRow = lazy(() => import('@/app/components/Row'));

export default async function Popular() {
  return (
    <main>
      <Suspense fallback={<LoaderHero/>}>
        <Hero media='tv' trending='' type='popular' />
      </Suspense>
      <Suspense fallback={<LoaderRow/>}>
        <Row title='TV Shows' media='tv' trending='' mediaType='popular' firstRow={true}/>
      </Suspense>
      <Suspense>
        <LazyRow title='Movies' media='movie' trending='' mediaType='popular' firstRow={false} />
      </Suspense>
    </main>
  )
}
