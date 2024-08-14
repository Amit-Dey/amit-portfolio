import Link from 'next/link';
import { Button } from "./ui/button"

// components
import Nab from './Nab';
import MobileNav from './MobileNav';

function Header() {
    return <header className='py-8 xl:py-12 text-white '>
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href='/'>
                <h1 className='text-4xl font-semibold mr-0'>
                    Amit<span className='text-accent'>.</span></h1>
            </Link>

            {/* Desktop Navigation and hire me button*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nab />
                <Link href='/contact'>
                    <Button>Hire Me</Button>
                </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="xl:hidden">
                <MobileNav />
            </div>



        </div>
    </header>

}

export default Header