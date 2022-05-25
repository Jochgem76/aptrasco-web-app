import Image from 'next/image';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";


const HeaderImage = ({ title, url, headerUrl }) => {
    return (
        <section className="relative">
            <div className='image-container-header'>
                <Image
                    className={'image'}
                    priority={true}
                    alt={headerUrl}
                    src={url}
                    layout="fill"
                />

            </div>
            <div className="absolute top-10 lg:top-20 left-0 h-full flex items-center justify-center lg:px-[15px]">
                <div className="mx-5 lg:mx-10 text-white max-w-[825px] h-auto w-full lg:mt-0">
                    <div className="text-center lg:text-left mx-auto mt-6 font-light">
                        <div className="inline-flex">
                            <Link href="/"><a className="mr-1 font-extralight">Homepage</a></Link>/ <span className="font-semibold ml-1">{headerUrl}</span>
                        </div>
                    </div>
                    <Fade>
                        <h1 className="mt-4 lg:text-left text-3xl lg:text-5xl text-center text-white font-light lg:font-light">
                            {title}
                        </h1>
                    </Fade>
                </div>
            </div >
        </section>
    )
};

export default HeaderImage;