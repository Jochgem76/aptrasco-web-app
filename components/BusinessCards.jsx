import BusinessCard from "./Cards/BusinessCard";

import generalTrading from '../img/general-trading600x600.jpg'
import shippingLine from '../img/shipping600x600.jpg'
import labelPrinting from '../img/printing600x600.jpg'
import natureFresh from '../img/Nature_fresh600x600.jpg'
import fourBrothers from '../img/four_brothers600x600.jpg'
import anyMeta from '../img/anymeta600x600.jpg'
import jamuna from '../img/jamuna600x600.jpg'
import aaftex from '../img/aaftex600x600.jpg'
import ocunapse from '../img/ocunapse600x600.jpg'
import textileApparel from '../img/textile600x600.jpg'
import moreSoon from '../img/general-tradingBW600x600.jpg'

import anymeta from '../img/logo/anymeta.png';
import aptrasco from '../img/logo/aptrasco-logo.png';
import NatureFreshLogo from '../img/logo/NatureFresh.svg'
import OcunapseIT from '../img/logo/Ocunapse.svg'
import mlBig from '../img/logo/MLBig.svg'
// import mjl from '../img/logo/MJL.svg'
// import mlY from '../img/logo/MLY.svg'

const Businesses = [
    {
        title: "BTR Trading Solution",
        url: "https://www.dshotelsupply.com/",
        id: "btr_trading",
        logo: null,
        imageUrl: generalTrading,
        location: "Worldwide"
    },
    {
        title: "Ajmir Water Transport Agency",
        url: "businesses/ajmir-agency",
        logo: null,
        id: "ajmir",
        imageUrl: shippingLine,
        location: "Bangladesh"
    },
    {
        title: "TecCare",
        url: "businesses/teccare",
        id: "teccare",
        logo: null,
        imageUrl: labelPrinting,
        location: "Bangladesh"
    },
    {
        title: "Nature Fresh",
        url: "/businesses/nature-fresh",
        id: "nature_fresh",
        logo: NatureFreshLogo,
        imageUrl: natureFresh,
        location: "Malaysia"
    },
    {
        title: "Four Brothers Agro",
        url: "/businesses/four-brothers-agro",
        id: "four_brothers",
        logo: null,
        imageUrl: fourBrothers,
        location: "Bangladesh"
    },
    {
        title: "AnyMeta",
        url: "/businesses/anymeta",
        id: "anymeta",
        logo: anymeta,
        imageUrl: anyMeta,
        location: "Malaysia"
    },
    {
        title: "Jamuna Trims Limited",
        url: "/businesses/jamuna",
        id: "jamuna",
        logo: null,
        imageUrl: jamuna,
        location: "Bangladesh"
    },
    {
        title: "Aaftex Fashion",
        url: "/businesses/aaftex",
        id: "aaftex",
        logo: null,
        imageUrl: aaftex,
        location: "Bangladesh"
    },
    {
        title: "ML Big Trading",
        url: "/businesses/ml-big-trading",
        id: "ml_big_trading",
        logo: mlBig,
        imageUrl: generalTrading,
        location: "Worldwide"
    },
    {
        title: "Ocunapse",
        url: "/businesses/ocunapse",
        id: "ocunapse",
        logo: OcunapseIT,
        imageUrl: ocunapse,
        location: "Malaysia"
    },
    {
        title: "Aptrasco",
        url: "/businesses/aptrasco",
        id: "aptrasco",
        logo: aptrasco,
        imageUrl: textileApparel,
        location: "Worldwide"
    },
    {
        title: "More businesses soon . . .",
        url: "/whyus",
        id: "more_soon",
        imageUrl: moreSoon,
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