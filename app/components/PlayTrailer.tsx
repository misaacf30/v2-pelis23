import Link from 'next/link'

interface Props {
    type: string,
    id: string,
    icon: any,
}

async function getData(type: string, id: string, category: string) {
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}${category}?api_key=${process.env.API_KEY}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function PlayTrailer({ type, id, icon }: Props) {
    const trailer = await getData(type, id, '/videos')
    return (
        <>
            {trailer.results[0] &&
                <Link
                    href={`https://www.youtube.com/watch?v=${trailer.results[trailer.results.length - 1].key}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-[80%] text-sm sm:text-base bg-secondary/90 text-center rounded-lg border border-background mx-auto my-2 md:mt-4 py-2 md:py-4 text-background font-extrabold flex items-center justify-center"
                >
                    {icon}
                    <span>&nbsp;PLAY TRAILER</span>
                </Link>
            }
        </>
    )
}
