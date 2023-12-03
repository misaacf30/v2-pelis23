import Hero from "@/app/components/Hero";
import LoaderHero from "@/app/components/LoaderHero";
import LoaderRow from "@/app/components/LoaderRow"
import Row from "@/app/components/Row";
import { Suspense, lazy } from 'react'
const LazyRow = lazy(() => import('@/app/components/Row'));

export default async function TVShows() {
  return (
    <main>
      <Suspense fallback={<LoaderHero />}>
        <Hero media='tv' trending='trending' type='day' />
      </Suspense>
      <Suspense fallback={<LoaderRow/>}>
        <Row title='Trending' media='tv' trending='trending' mediaType='day' firstRow={true} />
      </Suspense>
      <Suspense>
        <LazyRow title='Popular' media='tv' trending='' mediaType='popular' firstRow={false}/>
        <LazyRow title='Top Rated' media='tv' trending='' mediaType='top_rated' firstRow={false}/>
      </Suspense>
    </main>
  )
}
