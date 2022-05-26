import CompanyCard from "./Cards/CompanyCard";

const AptrascoCards = [
    {
        title: "Why Aptrasco?",
        subLink: "How can we help?",
        url: "/whyus",
        id: "aptrasco",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_300,c_fill/v1653015386/aptrasco.jpg",
    },
    {
        title: "Our Businesses",
        subLink: "Take a Look",
        url: "/businesses",
        id: "businesses",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_300,c_fill/v1653015691/industries.jpg",
    },
    {
        title: "Clients",
        subLink: "Who we work with",
        url: "/clients",
        id: "clients",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_300,c_fill/v1653278231/clients.jpg",
    },
    {
        title: "Get in touch",
        subLink: "Business queries",
        url: "/contact",
        id: "contact",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_300,c_fill/v1653278080/contact-us.jpg",
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