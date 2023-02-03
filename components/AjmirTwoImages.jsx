import HorizontalCard from "./Cards/HorizontalCard";

import imageOne from '../img/Ajmir1.jpg';
import imageTwo from '../img/Ajmir2.jpg';

const AjmirCards = [
    {
        id: 1,
        imageUrl: imageOne
    },
    {
        id: 2,
        imageUrl: imageTwo
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