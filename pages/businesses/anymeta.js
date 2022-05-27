import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";
import TextWhite from '../../components/TextWhite';
import TextGray from '../../components/TextGray';

const Meta = {
    headerTitle: "AnyMeta",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653467132/nature_fresh_header.jpg",
    headerUrl: "AnyMeta"

};

const AnyMeta = ({ }) => {

    return (
        <>
            <HeaderImage title={Meta.headerTitle} url={Meta.imageUrl} headerUrl={Meta.headerUrl} />
            <Widget
                title="AnyMeta (MLY Big Trading Sdn Bhd)"
                sub="At AnyMeta, they employ innovative digital marketing strategies to deliver results.
                Using AI technology, AnyMeta provides a more accurate audience targeting that enables fully integrated end-to-end digital marketing solutions. They ensure that your brand is saying the right things to the right people at the right time." />
            <TextGray
                title="Results-driven
                Performance-oriented
                Digital agency"
                parOne="AnyMeta is an outcome-based digital marketing agency. Their strategies and methods are tailored-made to your brand, backed by solid data to produce results that meet your objectives."
                parTwo="With a dedicated team of digital and marketing specialists, they strive to bring actionable recommendations that build your brand."
            />
            <div className="mx-auto px-6 lg:px-20 w-full">
                <div className="my-4 lg:my-8">
                    <p className="text-center lg:text-left text-black text-lg lg:text-xl font-extralight">Have a look at the AnyMeta Website: <span> <a href="https://anymeta-global.com/" className="font-light hover:text-blue-400">www.anymeta-global.com</a></span></p>
                </div>
            </div>
        </>
    )
};

export default AnyMeta;