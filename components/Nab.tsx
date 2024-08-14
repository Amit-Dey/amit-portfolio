"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
]


function Nab() {
    const pathName = usePathname()
    return (
        <nav className='flex gap-8'>
            {links.map((link, index) => {
                return (
                    <Link className={`${pathName === link.path && "text-accent border-b-2 border-accent"}
                    capitalize font-medium hover:text-accent transition-all`
                    } key={index} href={link.path}>
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nab