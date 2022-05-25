import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

const AjmirShipping = {
    headerTitle: "TecCare",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653466834/TecCare.jpg",
    headerUrl: "TecCare"

};

const TecCare = ({ }) => {

    return (
        <>
            <HeaderImage title={AjmirShipping.headerTitle} url={AjmirShipping.imageUrl} headerUrl={AjmirShipping.headerUrl} />
            <Widget
                title="TecCare BD Pte Ltd"
                sub="From fancy promotional print products to high-quality product label printing, we offer a broad range of high-quality label printing to promote your business. We make sure that your brand’s label gets the highest attention to quality and catch people’s attention." />
        </>
    )
};

export default TecCare;