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
        desc: "With over 12 years of experience in business trade, we help your business to grow and expand,and we help industries to innovate and grow."
    },
    {
        title: "Shipping Line",
        url: "/businesses/ajmir-agency",
        id: "shipping",
        imageUrl: shippingLine,
        location: "Bangladesh",
        desc: "An international logistics agency that facilitates the transportation between suppliers, manufacturers, distributors and retailers. This includes sea freight forwarding. The agency’s mission is to help reduce transit time and shipping costs."
    },
    {
        title: "Automatic Label Printing",
        url: "/businesses/teccare",
        id: "printing",
        imageUrl: labelPrinting,
        location: "Bangladesh",
        desc: "From fancy promotional print products to high-quality product label printing, we offer a broad range of high-quality label printing to promote your business.",
    },
    {
        title: "Infrastructure & Construction",
        url: "/businesses/aptrasco",
        id: "infrastructure",
        imageUrl: infrastructure,
        location: "Worldwide",
        desc: "With more than 12 years of experience and 24 global affiliations, Aptrasco makes building connections with international third-parties, government officials, and top-level management possible."
    },
    {
        title: "Agriculture",
        url: "/businesses/nature-fresh",
        id: "agriculture",
        imageUrl: agriculture,
        location: "Bangladesh & Malaysia",
        desc: "We created Malaysia’s leading fruits and vegetables import and export wholesaler."
    },
    {
        title: "Textile & Apparel",
        url: "/businesses/aaftex",
        id: "textile",
        imageUrl: textileApparel,
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

