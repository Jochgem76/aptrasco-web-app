import IndustryCard from "./Cards/IndustryCard";

const Industries = [
    {
        title: "General Trading",
        url: "https://www.dshotelsupply.com/",
        id: "trading",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933452/general-trading.jpg",
        location: "Worldwide",
        desc: "With over 12 years of experience in business trade, we help your business to grow and expand,and we help industries to innovate and grow."
    },
    {
        title: "Shipping Line",
        url: "/businesses/ajmir-agency",
        id: "shipping",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933189/shipping.jpg",
        location: "Bangladesh",
        desc: "An international logistics agency that facilitates the transportation between suppliers, manufacturers, distributors and retailers. This includes sea freight forwarding. The agency’s mission is to help reduce transit time and shipping costs."
    },
    {
        title: "Automatic Label Printing",
        url: "/businesses/teccare",
        id: "printing",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1653010248/printing.jpg",
        location: "Bangladesh",
        desc: "From fancy promotional print products to high-quality product label printing, we offer a broad range of high-quality label printing to promote your business.",
    },
    {
        title: "Infrastructure & Construction",
        url: "/businesses/aptrasco",
        id: "infrastructure",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933723/infrastructure.jpg",
        location: "Worldwide",
        desc: "With more than 12 years of experience and 24 global affiliations, Aptrasco makes building connections with international third-parties, government officials, and top-level management possible."
    },
    {
        title: "Agriculture",
        url: "/businesses/nature-fresh",
        id: "agriculture",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652933897/agriculture.jpg",
        location: "Bangladesh & Malaysia",
        desc: "We created Malaysia’s leading fruits and vegetables import and export wholesaler."
    },
    {
        title: "Textile & Apparel",
        url: "/businesses/aaftex",
        id: "textile",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/w_600,h_600,c_fill/v1652952729/textile.jpg",
        location: "Bangladesh",
        desc: "We are experts in Textile & Apparel production. Our companies are known for their craftsmanship, they act as a buying house for international fashion wholesale manufacturers (OEM and ODM) and retailers."
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

