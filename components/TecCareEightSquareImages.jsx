import SquareCard from "./Cards/SquareCard";

import ImageOne from '../img/Teccare_1.jpg';
import ImageTwo from '../img/Teccare_2.jpg';
import ImageThree from '../img/Teccare_3.jpg';
import ImageFour from '../img/Teccare_4.jpg';
import ImageFive from '../img/Teccare_5.jpg';
import ImageSix from '../img/Teccare_6.jpg';
import ImageSeven from '../img/Teccare_7.jpg';
import ImageEight from '../img/Teccare_8.jpg';

const TecCareSquareCards = [
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
    }, {
        id: 5,
        imageUrl: ImageFive
    }, {
        id: 6,
        imageUrl: ImageSix
    }, {
        id: 7,
        imageUrl: ImageSeven
    }, {
        id: 8,
        imageUrl: ImageEight
    }
]

const TecCareEightSquareImages = () => {
    return (
        <section>
            <div className="flex flex-wrap">
                {TecCareSquareCards.map((card) => <SquareCard item={card} key={card.id} />)}
            </div>
        </section>
    )
}

export default TecCareEightSquareImages;