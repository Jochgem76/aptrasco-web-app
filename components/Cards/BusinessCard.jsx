import Image from 'next/image';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

const BusinessCard = ({ item }) => {
    return (
        <article className="w-full md:w-1/2 lg:w-1/4">
            <div className="p-2">
                <div className="relative overflow-hidden">
                    <Image
                        priority={true}
                        alt={item.id}
                        src={item.imageUrl}
                        width={600}
                        height={600}
                        layout="responsive"
                    />
                    <div className="absolute top-6 px-0 z-10">
                        <div className="bg-blue-700/[.75] inline-flex rounded-r-full px-3 py-1 text-sm font-bold text-gray-100 mr-2 mb-2">{item.location}</div>
                    </div>
                    <div className="bg-gray-800/[.50] absolute w-full pt-20 pb-6 top-0 inset-x-0 text-left px-6">
                        <Fade>
                            <div className="text-2xl lg:text-3xl font-light text-white leading-10">{item.title}</div>
                        </Fade>
                        <div className="text-sm lg:text-md font-regular text-white leading-4 mt-6">
                            <Link href={item.url}>
                                <a className="inline-flex uppercase">
                                    Find out more
                                    <svg aria-hidden="true" width="11" height="10" fill="none" className="flex-none ml-3 mt-0.5 text-white">
                                        <path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        <hr className="mt-1 opacity-80 w-1/2" />
                    </div>
                    {item.logo != null ?
                        <Fade>
                            <div className="absolute bottom-0 px-4 w-1/2 py-4">
                                <Image
                                    alt="logo"
                                    src={item.logo}
                                    layout="responsive"
                                />
                            </div>
                        </Fade>
                        : null}
                </div>
            </div>
        </article>
    )
}

export default BusinessCard;