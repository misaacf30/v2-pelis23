import Link from "next/link"

const Footer = () => {
    return (
        <footer className='w-[100vw] bg-black/50 py-12 mt-4 flex justify-center items-center'>
            <div className='flex flex-col md:flex-row justify-center items-center text-sm text-primary/80'>
                <span>© 2023 Copyright: Pelis23.&nbsp;</span>
                <span>Developed by&nbsp;
                    <Link
                        href={''}
                    >
                        Miguel Fernandez
                    </Link>
                    .
                </span>

            </div>
        </footer>
    )
}

export default Footer