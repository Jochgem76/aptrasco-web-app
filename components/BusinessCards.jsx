import BusinessCard from "./Cards/BusinessCard";

const Businesses = [
    {
        title: "BTR Trading Solution",
        url: "https://www.dshotelsupply.com/",
        id: "btr_trading",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1652933452/general-trading.jpg",
        location: "Worldwide"
    },
    {
        title: "Ajmir Water Transport Agency",
        url: "businesses/ajmir-agency",
        id: "ajmir",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1652933189/shipping.jpg",
        location: "Bangladesh"
    },
    {
        title: "TecCare",
        url: "businesses/teccare",
        id: "teccare",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1653010248/printing.jpg",
        location: "Bangladesh"
    },
    {
        title: "Nature Fresh",
        url: "/businesses/nature-fresh",
        id: "nature_fresh",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-10/w_600,h_600,c_fill/v1653355316/nature_fresh.jpg",
        location: "Malaysia"
    },
    {
        title: "Four Brothers Agro",
        url: "/businesses/four-brothers-agro",
        id: "four_brothers",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1653355479/four_brothers.jpg",
        location: "Bangladesh"
    },
    {
        title: "AnyMeta",
        url: "/businesses/anymeta",
        id: "anymeta",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1653356001/anymeta.jpg",
        location: "Malaysia"
    },
    {
        title: "Jamuna Trims Limited",
        url: "/businesses/jamuna",
        id: "jamuna",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1653356174/jamuna.jpg",
        location: "Bangladesh"
    },
    {
        title: "Aaftex Fashion",
        url: "/businesses/aaftex",
        id: "aaftex",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1653356287/aaftex.jpg",
        location: "Bangladesh"
    },
    {
        title: "ML Big Trading",
        url: "/businesses/ml-big-trading",
        id: "ml_big_trading",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1652952729/textile.jpg",
        location: "Worldwide"
    },
    {
        title: "Ocunapse",
        url: "/businesses/ocunapse",
        id: "ocunapse",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1653356930/ocunapse.jpg",
        location: "Malaysia"
    },
    {
        title: "Aptrasco",
        url: "/businesses/aptrasco",
        id: "aptrasco",
        imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/w_600,h_600,c_fill/v1652952729/textile.jpg",
        location: "Worldwide"
    }]

const BusinessCards = () => {
    return (
        <section>
            <div className="flex flex-wrap">
                {Businesses.map((card) => <BusinessCard item={card} key={card.id} />)}
            </div>
        </section>
    )
}

export default BusinessCards;