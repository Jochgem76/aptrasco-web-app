import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

const JamunaTrims = {
    headerTitle: "Jamuna",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653467132/nature_fresh_header.jpg",
    headerUrl: "Jamuna"

};


const Jamuna = ({ }) => {

    return (
        <>
            <HeaderImage title={JamunaTrims.headerTitle} url={JamunaTrims.imageUrl} headerUrl={JamunaTrims.headerUrl} />
            <Widget
                title="Jamuna Trims Limited"
                sub="We gained trust from customers by providing “high quality, top honesty, and best service”. Other than that we also make sure we provide ECO-friendly products to maintain the environmental sustainability." />
        </>
    )
};

export default Jamuna;