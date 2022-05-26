import IndustryCard from "./Cards/IndustryCard";

const Industries = [
    {
        title: "General Trading",
        url: "/industries/general-trading",
        id: "trading",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933452/general-trading.jpg",
        location: "Worldwide",
        desc: "12+ Years of experience in General Trading"
    },
    {
        title: "Shipping Line",
        url: "/industries/shipping-line",
        id: "shipping",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933189/shipping.jpg",
        location: "Bangladesh",
        desc: "Cost-effective Logistics made easy"
    },
    {
        title: "Automatic Label Printing",
        url: "/industries/label-printing",
        id: "printing",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1653010248/printing.jpg",
        location: "Bangladesh",
        desc: "",
    },
    {
        title: "Infrastructure & Construction",
        url: "/industries/infrastructure-and-construction",
        id: "infrastructure",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933723/infrastructure.jpg",
        location: "Worldwide",
        desc: ""
    },
    {
        title: "Agriculture",
        url: "/industries/agriculture",
        id: "agriculture",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933897/agriculture.jpg",
        location: "Bangladesh & Malaysia",
        desc: "Breeding & Farming done right"
    },
    {
        title: "Textile & Apparel",
        url: "/industries/textile-and-apparel",
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
