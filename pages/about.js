import HeaderImage from '../components/HeaderImage';
import TextWhite from '../components/TextWhite';
import TextGray from '../components/TextGray';

import header from '../img/about-us-header.jpg'

const About = {
    headerTitle: "About us",
    imageUrl: header,
    headerUrl: "About"

};

const AboutUs = ({ }) => {

    return (
        <>
            <HeaderImage title={About.headerTitle} url={About.imageUrl} headerUrl={About.headerUrl} />
            <TextWhite
                title="Our Journey"
                parOne="Aptrasco is an integrated holding company with operation offices and networks around the globe, including Bangladesh and Malaysia."
                parTwo="We have grown to combine various businesses in diverse industries to provide a one-stop solution since 2006."
                parThree="Our businesses include general trading, label printing, fabric dyeing, global expansion, agriculture, textile, shipment, and infrastructure."
            />
            <TextGray
                title="Our values and capabilities"
                parOne="Our mission is to turn your business into a roaring success. We are in the business of protecting your benefits, and we care for your needs. We offer after-sales service and a wide range of exclusive products at competitive/reasonable prices for our customers."
                parTwo="With cutting-edge technology and a team that always keeps up with the current trends and technologies, we can ensure that your business stays on top of the latest trends and runs smoothly."
                parThree="Above all else, quality matters to us."
            />
        </>
    )
};

export default AboutUs;