import Link from 'next/link';
import Image from 'next/image';

import coverImage from '../../img/home.jpg';


const Welcome = () => {
    return (
        <section className="relative">
            <div className='image-container'>
                <Image
                    className={'image'}
                    priority={true}
                    alt="Aptrasco Header"
                    src={coverImage}
                    layout="fill"
                />
            </div>
            <div className="absolute top-10 lg:top-0 left-0 h-full w-full flex items-center justify-center lg:px-[15px]">
                <div className="mx-5 lg:ml-20 text-white max-w-[825px] h-auto w-full lg:mt-0">
                    <h1 className="mb-4 lg:text-left text-3xl lg:text-5xl text-center text-white font-light lg:font-light">
                        Aptrasco Group
                    </h1>
                    <p className="lg:text-left text-md lg:text-2xl text-center text-white font-extralight lg:font-extralight">
                        A global integrated holding company with a diverse set of businesses across sectors and industries.
                    </p>
                    <div className="text-center lg:text-left mx-auto mt-6 font-light">
                        <Link href="/whyus">
                            <a className="inline-flex uppercase">
                                Find out more
                                <svg aria-hidden="true" width="11" height="10" fill="none" className="flex-none ml-3 mt-1.5 text-white">
                                    <path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </Link>
                    </div>
                    <hr className="mx-auto lg:ml-0 mt-1 opacity-80 w-1/2 lg:w-1/4" />
                </div>
            </div >
        </section >
    )
}

export default Welcome;