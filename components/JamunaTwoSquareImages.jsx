import SquareCard from "./Cards/SquareCard";

import ImageOne from '../img/Jamuna_4.jpg';
import ImageTwo from '../img/Jamuna_3.jpg';

const JamunaSquareCards = [
    {
        id: 1,
        imageUrl: ImageOne
    },
    {
        id: 2,
        imageUrl: ImageTwo
    }
]

const AjmirTwoSquareImages = () => {
    return (
        <section>
            <div className="flex flex-wrap">
                {JamunaSquareCards.map((card) => <SquareCard item={card} key={card.id} />)}
            </div>
        </section>
    )
}

export default AjmirTwoSquareImages;