import SquareCard from "./Cards/SquareCard";

import ImageOne from '../img/Nature_1.jpg';
import ImageTwo from '../img/Nature_2.jpg';
import ImageThree from '../img/Nature_3.png';
import ImageFour from '../img/Nature_4.jpg';

const NatureSquareCards = [
    {
        id: 1,
        imageUrl: ImageOne
    },
    {
        id: 2,
        imageUrl: ImageTwo
    },
    {
        id: 3,
        imageUrl: ImageThree
    },
    {
        id: 4,
        imageUrl: ImageFour
    }
]

const NatureFreshTwoSquareImages = () => {
    return (
        <section>
            <div className="flex flex-wrap">
                {NatureSquareCards.map((card) => <SquareCard item={card} key={card.id} />)}
            </div>
        </section>
    )
}

export default NatureFreshTwoSquareImages;