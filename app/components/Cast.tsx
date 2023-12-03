import Image from "next/image"

interface Props {
    type: string,
    id: string,
    imgPath: string
}

async function getData(type: string, id: string, category: string) {
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}${category}?api_key=${process.env.API_KEY}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Cast({ type, id, imgPath }: Props) {
    const credits = await getData(type, id, '/credits');

    return (
        <>
            {credits.cast[0] &&
                <div className='pt-6 md:pt-12'>
                    <h2 className='text-lg md:text-xl font-bold flex'>
                        <span className="w-1 h-[auto] rounded-md bg-secondary mr-2"></span>
                        TOP CAST
                    </h2>
                    <div className='w-full overflow-x-scroll whitespace-nowrap  md:whitespace-normal md:overflow-x-hidden md:grid md:grid-cols-4 lg:grid-cols-5 md:justify-between '>
                        {credits.cast.slice(0, 10).map((actor: any, index: any) =>
                            <div key={index} className='relative inline-block py-4'>
                                <Image
                                    unoptimized
                                    src={imgPath + actor.profile_path}
                                    alt={actor.name}
                                    width={160}
                                    height={160}
                                    placeholder='blur'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAADCAQAAAD41K0JAAAADUlEQVR42mOUPccIRgALdgLFDkvt1wAAAABJRU5ErkJggg=='
                                    className='rounded-xl lg:max-w-[160px]'
                                />
                                <div className='w-[170px] text-center'>
                                    <p className="truncate md:whitespace-normal md:line-clamp-2">{actor.name}</p>
                                    <p className="line-clamp-2 text-primary/40">{actor.character}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    )
}
