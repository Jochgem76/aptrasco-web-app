import HorizontalCard from "./Cards/HorizontalCard";

import ImageOneJamuna from '../img/Jamuna_1.jpg';
import ImageTwoJamuna from '../img/Jamuna_2.jpg';

const JamunaHorCards = [
    {
        id: 1,
        imageUrl: ImageOneJamuna
    },
    {
        id: 2,
        imageUrl: ImageTwoJamuna
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