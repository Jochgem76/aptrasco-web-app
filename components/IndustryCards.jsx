import IndustryCard from "./Cards/IndustryCard";

import generalTrading from '../img/general-trading600x600.jpg'
import shippingLine from '../img/shipping600x600.jpg'
import labelPrinting from '../img/printing600x600.jpg'
import infrastructure from '../img/infrastructure600x600.jpg'
import agriculture from '../img/agriculture600x600.jpg'
import textileApparel from '../img/textile600x600.jpg'

const Industries = [
    {
        title: "General Trading",
        url: "https://www.dshotelsupply.com/",
        id: "trading",
        imageUrl: generalTrading,
        location: "Worldwide",
        desc: "Our goal is to help businesses to grow and expand, in an efficient way. With over 12 years of experience in business trade."
    },
    {
        title: "Shipping Line",
        url: "/businesses/ajmir-agency",
        id: "shipping",
        imageUrl: shippingLine,
        location: "Bangladesh",
        desc: "An international logistics agency that facilitates transportation between suppliers, manufacturers, and retailers. Our mission is to help reduce transit time and shipping costs."
    },
    {
        title: "Automatic Label Printing",
        url: "/businesses/teccare",
        id: "printing",
        imageUrl: labelPrinting,
        location: "Bangladesh",
        desc: "We offer a broad range of high-quality label printing to promote your business. From fancy promotional print products to high-quality product label printing, we have you covered at every stage of the marketing process.",
    },
    {
        title: "Infrastructure & Construction",
        url: "/businesses/aptrasco",
        id: "infrastructure",
        imageUrl: infrastructure,
        location: "Worldwide",
        desc: "With more than 12 years of experience and 24 global affiliations, Aptrasco has developed a reputation for its ability to help innovators connect with international third parties, government officials, and top-level management."
    },
    {
        title: "Agriculture",
        url: "/businesses/nature-fresh",
        id: "agriculture",
        imageUrl: agriculture,
        location: "Bangladesh & Malaysia",
        desc: "We started with a simple vision: to import, export, and distribute produce to hotels, restaurants, supermarkets, and many more. We provide you with the best quality and fresh produce."
    },
    {
        title: "Textile & Apparel",
        url: "/businesses/aaftex",
        id: "textile",
        imageUrl: textileApparel,
        location: "Bangladesh",
        desc: "We are experts in textile & apparel production. Our companies are known for their craftsmanship. We work with international fashion wholesale manufacturers (OEM and ODM) and retailers, acting as a buying house."
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

