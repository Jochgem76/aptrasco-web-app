import Image from 'next/image';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

const CompanyCard = ({ item }) => {
    return (
        <article className="w-full lg:w-1/2">
            <div className="p-2">
                <div className="relative overflow-hidden">
                    <Image
                        priority={true}
                        alt={item.id}
                        src={item.imageUrl}
                        width={600}
                        height={300}
                        layout="responsive"
                    />
                    <div className="bg-gray-800/[.50] absolute w-full py-4 top-10 lg:top-20 inset-x-0 text-left pl-8 pr-10">
                        <Fade>
                            <div className="text-4xl lg:text-5xl font-extralight text-white leading-8">{item.title}</div>
                        </Fade>
                        <div className="text-md font-regular text-white leading-4 mt-6">
                            <Link href={item.url}>
                                <a className="inline-flex uppercase">
                                    {item.subLink}
                                    <svg aria-hidden="true" width="11" height="10" fill="none" className="flex-none ml-3 mt-0.5 text-white">
                                        <path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        <hr className="mt-1 opacity-80 w-1/2" />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CompanyCard;