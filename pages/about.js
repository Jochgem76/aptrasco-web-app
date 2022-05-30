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
                parOne="Aptrasco Group is an integrated holding company with operation offices and networks around the globe, including Bangladesh, and so on."
                parTwo="The group first infiltrated the trading industry back in 2006. Over time, the company grew and acquired new businesses."
                parThree="Currently, Aptrasco consists of different businesses in a diverse range of industries, thereby providing a one-stop business solution. Our businesses include general trading, label printing, fabric dyeing, global expansion, agriculture, textile, shipment, and infrastructure."
            />
            <TextGray
                title="Our values and capabilities"
                parOne="The group has one mission, and that is to turn your business into a roaring success. Our customers come first, and we are in the business of protecting your benefits. We also provide after-sales services to care for your needs."
                parTwo="No one likes to be behind the times. We are constantly keeping ourselves up-to-date with the latest economic trends and technologies. We believe that success comes from being in the know, and we want our customers to be the forerunners in their industries."
                parThree="Quality is non-negotiable. We take pride in our quality control and only offer what is best at reasonable prices."
            />
        </>
    )
};

export default AboutUs;