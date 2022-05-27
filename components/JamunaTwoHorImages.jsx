import HorizontalCard from "./Cards/HorizontalCard";

import ImageOne from '../img/Jamuna_1.jpg';
import ImageTwo from '../img/Jamuna_2.jpg';

const JamunaHorCards = [
    {
        id: 1,
        imageUrl: ImageOne
    },
    {
        id: 2,
        imageUrl: ImageTwo
    }
]

const AjmirTwoHorImages = () => {
    return (
        <section>
            <div className="flex flex-wrap">
                {JamunaHorCards.map((card) => <HorizontalCard item={card} key={card.id} />)}
            </div>
        </section>
    )
}

export default AjmirTwoHorImages;