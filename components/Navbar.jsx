import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image'
import logo from '../img/logo/aptrasco-logo.png';


const Links = [
    {
        title: "About",
        url: "/about"
    },
    {
        title: "Offices",
        url: "/offices"
    },
    {
        title: "Businesses",
        url: "/businesses"
    },
    {
        title: "Industries",
        url: "/industries"
    },
    {
        title: "Contact",
        url: "/contact"
    }]

const NavbarItem = ({ title, url, classProps }) => {
    const router = useRouter();

    return (
        <li>
            <Link href={url} passHref>
                <a className={`flex flex-row text-md leading-6 font-semibold uppercase ${classProps}`}>
                    <p className={router.pathname == `${url}` ? "font-bold text-blue-300" : "font-regular text-black"}>{title}</p>
                </a>
            </Link>
        </li>
    )
};

const DropdownItem = ({ title, url, classProps, close }) => {
    return (
        <li>
            <Link href={url} passHref>
                <button onClick={close} className={`flex ${classProps}`}>
                    <p className="uppercase font-regular text-white">{title}</p>
                </button>
            </Link>
        </li>
    )
};


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <header className='w-screen h-[80px] z-20 white-glassmorphism-header lg:bg-white fixed'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Link href="/" passHref>
                        <a className="mt-2 ml-2 mr-10">
                            <span className="sr-only">Aptrasco Group home page</span>
                            <Image
                                alt="Aptrasco Logo"
                                src={logo}
                                layout="intrinsic"
                                width={70}
                                height={70}
                            />
                        </a>
                    </Link>
                    <ul className='hidden md:flex'>
                        {Links.map((item, index) => (
                            <NavbarItem key={item + index} title={item.title} url={item.url} classProps={!nav ? 'space-between mx-6' : ''} />
                        ))}
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <Link href="/whyus">
                        <a className='uppercase border-none font-semibold text-black text-md mr-6'>
                            Why Us?
                        </a>
                    </Link>

                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!nav ? <HiDotsVertical fontSize={45} className="text-gray-600 cursor-pointer" /> : <MdClose fontSize={45} className="text-gray-600 cursor-pointer" />}
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute blue-glassmorphism w-full pt-2 px-8'}>
                {Links.map((item, index) => (
                    <DropdownItem key={item + index} title={item.title} url={item.url} close={handleClick} classProps={nav ? 'border-b border-white/[0.2] justify-center py-4 w-full' : ''} />
                ))}
                <div className='flex flex-col my-4'>
                    <Link href='/whyus' passHref>
                        <button onClick={handleClick} className='text-white font-bold uppercase px-8 py-3 mb-4'>Why Us?</button>
                    </Link>
                </div>
            </ul>
        </header>
    )
}

export default Navbar