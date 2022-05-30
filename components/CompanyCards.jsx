import CompanyCard from "./Cards/CompanyCard";

import aptrasco from '../img/aptrasco600x300.jpg'
import businesses from '../img/industries600x300.jpg'
import clients from '../img/clients600x300.jpg'
import getInTouch from '../img/contact-us600x300.jpg'

const AptrascoCards = [
    {
        title: "Why Aptrasco?",
        subLink: "How can we help?",
        url: "/whyus",
        id: "aptrasco",
        imageUrl: aptrasco
    },
    {
        title: "Our Businesses",
        subLink: "Take a Look",
        url: "/businesses",
        id: "businesses",
        imageUrl: businesses
    },
    {
        title: "Clients",
        subLink: "Who we work with",
        url: "/clients",
        id: "clients",
        imageUrl: clients
    },
    {
        title: "Get in touch",
        subLink: "Business queries",
        url: "/contact",
        id: "contact",
        imageUrl: getInTouch
    }
]

const CompanyCards = () => {
    return (
        <section>
            <div className="flex flex-wrap">
                {AptrascoCards.map((card) => <CompanyCard item={card} key={card.id} />)}
            </div>
        </section>
    )
}

export default CompanyCards;