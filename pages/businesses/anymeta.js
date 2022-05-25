import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

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
                sub="AnyMeta employs innovative digital marketing strategies to deliver results.
                It provides a more accurate audience targeting that enables fully integrated end-to-end digital marketing solutions." />
        </>
    )
};

export default AnyMeta;