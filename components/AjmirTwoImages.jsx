import HorizontalCard from "./Cards/HorizontalCard";

import ImageOne from '../img/Ajmir_1.jpg';
import ImageTwo from '../img/Ajmir_2.jpg';

const AjmirCards = [
    {
        id: 1,
        imageUrl: ImageOne
    },
    {
        id: 2,
        imageUrl: ImageTwo
    }
]

const AjmirTwoImages = () => {
    return (
        <section>
            <div className="flex flex-wrap">
                {AjmirCards.map((card) => <HorizontalCard item={card} key={card.id} />)}
            </div>
        </section>
    )
}

export default AjmirTwoImages;