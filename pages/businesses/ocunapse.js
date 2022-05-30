import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";
import TextWhite from '../../components/TextWhite';
import TextGray from '../../components/TextGray';

import header from '../../img/ocunapse_header.jpg'

const OcunapseIT = {
    headerTitle: "Ocunapse",
    imageUrl: header,
    headerUrl: "Ocunapse"

};

const Ocunapse = ({ }) => {

    return (
        <>
            <HeaderImage title={OcunapseIT.headerTitle} url={OcunapseIT.imageUrl} headerUrl={OcunapseIT.headerUrl} />
            <Widget
                title="Ocunapse Sdn Bhd"
                sub="Ocunapse envisions the digital breakthroughs of tomorrow from deploying artificial intelligence to developing systems and applications, they mobilize smart solutions for every business challenge." />
            <TextGray
                title="Ocunapse Vision"
                parOne="As the proud digital arm of Aptrasco, we take delight in expanding your business by supplying leading technology to capitalize on emerging economic opportunities."

            />
            <TextWhite
                title="Ocunapse Mission"
                parOne="Our pioneering digital solutions aim to bring fresh perspectives and on-trend solutions across all customer touchpoints while empowering businesses to achieve better efficiency in its day-to-day operations."
                parTwo="This digital ecosystem supports businesses across a variety of core business aspects, ultimately ensuring profitability and success whilst thriving during the COVID-19 pandemic."
                parThree="We also endeavour to bring a seismic shift in the payments landscape, bringing Malaysia closer towards our nation’s ambition of being a digital and cashless society."
            />
            <div className="mx-auto px-6 lg:px-20 w-full">
                <div className="my-4 lg:my-8">
                    <p className="text-center lg:text-left text-black text-lg lg:text-xl font-extralight">Have a look at the Ocunapse Website: <span> <a href="https://www.ocunapse.com" className="font-light hover:text-blue-400">www.ocunapse.com</a></span></p>
                </div>
            </div>
        </>
    )
};

export default Ocunapse;