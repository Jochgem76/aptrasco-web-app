import Link from 'next/link';
import Image from 'next/image'

import logo from '../img/logo/aptrasco-logo.png';
import { FaFacebookSquare, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Company = [
    {
        title: "About Aptrasco",
        url: "/about"
    },
    {
        title: "Our Offices",
        url: "/offices"
    },
    {
        title: "Our Businesses",
        url: "/businesses"
    },
    {
        title: "Our Industries",
        url: "/industries"
    },
    {
        title: "Contact Us",
        url: "/contact"
    }]


const Legal = [
    {
        title: "Privacy Policy",
        url: "/privacy-policy"
    },
    {
        title: "Terms and Conditions",
        url: "/terms-and-conditions"
    },
    {
        title: "Cookies Policy",
        url: "/cookies"
    }]

const FooterItem = ({ title, url }) => {
    return (
        <li className="mb-3">
            <Link href={url}>
                <a className="text-sm leading-4 font-medium uppercase text-black hover:text-blue-400">{title}</a>
            </Link>
        </li>
    )
}

const Footer = () => {
    return (
        <footer>
            <hr className="mb-4 opacity-100" />
            <div className="container mx-auto pt-6">
                <div className="flex flex-wrap">
                    <div className="w-full p-4  md:mr-auto md:w-2/4">
                        <div className="ml-3">
                            <Image
                                alt="Aptrasco Logo"
                                src={logo}
                                layout="intrinsic"
                                width={96}
                                height={96}
                            />
                        </div>

                        <p className="mb-4 text-sm font-semibold">
                            Leading you into<br/> economic victory.</p>
                        <div className="mb-6">
                            <p className="text-black text-xs font-light"><span className="font-bold">Head Office</span>
                                <br />
                                J-02-10, Solaris Mont Kiara, Jalan Solaris,
                                <br />
                                Mont Kiara, 50480, Kuala Lumpur,
                                <br />
                                Malaysia
                            </p>
                        </div>
                        <div className="mb-6">
                            <p className="text-black text-xs font-light"><span className="font-bold">Operational Office</span>
                                <br />
                                23-05, Q Sentral, Jalan Stesen Sentral 2,
                                <br />
                                50470 KL Sentral, Kuala Lumpur
                                <br />
                                Malaysia
                            </p>
                        </div>
                        <div className="mb-6">
                            <p className="text-black text-xs font-light"><span className="font-bold">Regional Office</span>
                                <br />
                                House 56, Road No 2, Block C
                                <br />
                                Sugandha R/A, Chittagong
                                <br />
                                Bangladesh
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-black text-xs font-light"><span className="font-bold">Contact Details</span>
                                <br />
                                <a href="mailto:info@aptrasco.com" className="hover:text-blue-400">info@aptrasco.com</a>
                                <br />
                                +88 (0) 1819375676 / +88 (0) 1321185336
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <Link href='https://www.facebook.com'>
                                <a>
                                    <FaFacebookSquare fontSize={25} className="text-black mr-3" />
                                </a>
                            </Link>
                            <Link href='https://www.twitter.com'>
                                <a>
                                    <FaTwitter fontSize={25} className="text-black mr-3" />
                                </a>
                            </Link>
                            <Link href='https://www.linkedin.com'>
                                <a>
                                    <FaLinkedin fontSize={25} className="text-black" />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center md:text-left w-full pt-10 md:w-1/4">
                        <h4 className="mb-8 text-black text-xl font-bold uppercase">
                            Company</h4>
                        <ul>
                            {Company.map((item, index) => (
                                <FooterItem key={item + index} title={item.title} url={item.url} />
                            ))}
                        </ul>
                    </div>
                    <div className="text-center md:text-left w-full pt-10 md:w-1/4">
                        <h4 className="mb-8 text-black text-xl font-bold uppercase">
                            Legal</h4>
                        <ul>
                            {Legal.map((item, index) => (
                                <FooterItem key={item + index} title={item.title} url={item.url} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="p-4 text-center text-black">
                    <hr className="mb-4 opacity-100" />
                    <p className="text-[10px] lg:text-sm">
                        © Copyright {(new Date().getFullYear())} Aptrasco Group | All rights reserved. </p>
                    <p className="text-[8px] lg:text-[10px] font-light mt-1 lg:mt-2">We use cookies to offer better online experiences. By visiting and using Aptrasco.com, you consent to our use of cookies. Learn about your options, rights and more by reading our Terms &amp; Conditions and Privacy Policy.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;