import SquareCard from "./Cards/SquareCard";

import ImageOneJamunaSquare from '../img/Jamuna_4.jpg';
import ImageTwoJamunaSquare from '../img/Jamuna_3.jpg';

const JamunaSquareCards = [
    {
        id: 1,
        imageUrl: ImageOneJamunaSquare
    },
    {
        id: 2,
        imageUrl: ImageTwoJamunaSquare
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