import IndustryCard from "./Cards/IndustryCard";

const Industries = [
    {
        title: "General Trading",
        url: "https://www.dshotelsupply.com/",
        id: "trading",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933452/general-trading.jpg",
        location: "Worldwide",
        desc: "12+ Years of experience in General Trading"
    },
    {
        title: "Shipping Line",
        url: "/businesses/ajmir-agency",
        id: "shipping",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933189/shipping.jpg",
        location: "Bangladesh",
        desc: "Cost-effective Logistics made easy"
    },
    {
        title: "Automatic Label Printing",
        url: "/businesses/teccare",
        id: "printing",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1653010248/printing.jpg",
        location: "Bangladesh",
        desc: "",
    },
    {
        title: "Infrastructure & Construction",
        url: "/businesses/aptrasco",
        id: "infrastructure",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933723/infrastructure.jpg",
        location: "Worldwide",
        desc: ""
    },
    {
        title: "Agriculture",
        url: "/businesses/nature-fresh",
        id: "agriculture",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933897/agriculture.jpg",
        location: "Bangladesh & Malaysia",
        desc: "Breeding & Farming done right"
    },
    {
        title: "Textile & Apparel",
        url: "/businesses/aaftex",
        id: "textile",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652952729/textile.jpg",
        location: "Bangladesh",
        desc: "Experts in Textile & Apparel production"
    }]


const IndustryCards = () => {
    return (
        <section>
            <div className="flex flex-wrap">
                {Industries.map((card) => <IndustryCard item={card} key={card.id} />)}
            </div>
        </section>
    )
}

export default IndustryCards;

