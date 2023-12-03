'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const sections = [
        {
            title: 'Home', path: '/',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
        },
        {
            title: 'Movies', path: '/movies',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5A.375.375 0 003 5.625zm16.125-.375a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0021 7.125v-1.5a.375.375 0 00-.375-.375h-1.5zM21 9.375A.375.375 0 0020.625 9h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 00.375-.375v-1.5zM4.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h1.5zM3.375 15h1.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-1.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h1.5a.375.375 0 00.375-.375v-1.5A.375.375 0 004.875 9h-1.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375zm4.125 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
            </svg>
        },
        {
            title: 'TV Shows', path: '/tvshows',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.5 6h-15v9h15V6z" />
                <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6A.75.75 0 006 21h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zm0 13.5h17.25a.375.375 0 00.375-.375V4.875a.375.375 0 00-.375-.375H3.375A.375.375 0 003 4.875v11.25c0 .207.168.375.375.375z" clipRule="evenodd" />
            </svg>
        },
        {
            title: 'Trending', path: '/trending',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" clipRule="evenodd" />
            </svg>
        },
        {
            title: 'Popular', path: '/popular',
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
            </svg>
        },
    ]

    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);


    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }
        if (typeof window !== 'undefined') {
            handleResize();
        }
        if (open && isMobile) {
            document.body.style.overflow = 'hidden';
        }
        else if (open && !isMobile) {
            setOpen(false);
        }
        else {
            document.body.style.overflow = 'initial';
        }
        
        window.addEventListener('resize', handleResize);
        return () => {

            window.removeEventListener('resize', handleResize);
        };

    }, [isMobile, open]);

    return (
        <nav className={`md:absolute w-full bg-gradient bg-gradient-to-b from-black via-black to-transparent
            md:bg-transparent md:from-background/50 md:via-background/25 md:to-transparent z-30 `}>
            <div className='md:flex justify-between px-4 md:px-2 lg:px-10 py-4  pointer-events-auto'>
                <div className='flex items-center md:px-0 space-x-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className="md:hidden w-8 h-8 cursor-pointer z-30"
                        onClick={() => { setOpen(!open) }}
                    >
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                    <Link
                        onClick={() => setOpen(false)}
                        href="/"
                        className="text-2xl md:text-3xl font-bold z-30">
                        <span className="text-primary">Pelis</span>
                        <span className="text-secondary">23</span>
                    </Link>
                </div>

                <ul className='hidden md:flex md:space-x-12'>
                    {sections.map((section, index) => (
                        <li key={index}>
                            <Link href={section.path} className='hover:text-primary/60 duration-200'>{section.title}</Link>
                        </li>

                    ))}
                </ul>
            </div>

            <div className={`md:hidden top-0 w-[100vw] h-[100vh] bg-black/50 z-20 ${open ? 'fixed' : 'hidden'} `}>
                <div className={`w-[70vw] h-full bg-black -translate-x-[100%] animate-[slideInRight_0.2s_ease-in-out_0s_forwards]`}>
                    <ul className='pt-[88px] pl-6 pr-6 divide-y-[0.5px] divide-primary/30'>
                        {sections.map((section, index) => (
                            <li key={index}>                  
                                <Link
                                    href={section.path}
                                    onClick={() => { setOpen(false) }}
                                    className='text-lg sm:text-x flex space-x-4 py-2 text-primary/60 hover:text-primary duration-200'
                                >
                                    {section.icon}
                                    <span className='text-primary'>{section.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar