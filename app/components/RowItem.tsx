import Image from 'next/image'
import Link from 'next/link'

interface Props {
    item: any
    firstRow: boolean
    media: string
    id: string
    index: number
}

const RowItem = ({ item, firstRow, media, id, index }: Props) => {
    const imgPath = "https://image.tmdb.org/t/p/original"

    return (
        <div className={`relative w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 inline-block mr-2`} 
        >
            <Link href={`${media}/${id}`}>
                <Image
                    src={imgPath + item.poster_path}
                    width={100}
                    height={100}
                    alt={item.original_title || item.original_name}
                    unoptimized={true}
                    // priority={(firstRow && (index >= 0 && index <= 5)) && true}
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAADCAQAAAD41K0JAAAADUlEQVR42mOUPccIRgALdgLFDkvt1wAAAABJRU5ErkJggg=='
                    objectFit='cover'
                    objectPosition='center'
                    className='w-full h-auto'
                />
            </Link>
           
        </div>
    )
}

export default RowItem
