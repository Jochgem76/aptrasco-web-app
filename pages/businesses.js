import HeaderImage from "../components/HeaderImage";
import Widget from "../components/Widget";
import BusinessCards from "../components/BusinessCards";

import header from '../img/businesses-header.jpg'

const Business = {
    headerTitle: "Our Businesses",
    imageUrl: header,
    headerUrl: "Businesses"

};

const Businesses = ({ }) => {

    return (
        <>
            <HeaderImage title={Business.headerTitle} url={Business.imageUrl} headerUrl={Business.headerUrl} />
            <Widget
                title="Giving you a competitive edge"
                sub="Our international business groups are ever ready to help you grow and expand. We are here to guide you through the entire business development process and bring you the results." />
            <BusinessCards />
        </>
    )
};

export default Businesses;