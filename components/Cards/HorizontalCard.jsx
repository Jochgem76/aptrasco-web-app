import Image from 'next/image';

const HorizontalCard = ({ item }) => {
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
                </div>
            </div>
        </article>
    )
}

export default HorizontalCard;