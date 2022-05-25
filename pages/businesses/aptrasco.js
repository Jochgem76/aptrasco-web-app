import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

const AptrascoGroup = {
    headerTitle: "Aptrasco",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653467132/nature_fresh_header.jpg",
    headerUrl: "Aptrasco"

};

const Aptrasco = ({ }) => {

    return (
        <>
            <HeaderImage title={AptrascoGroup.headerTitle} url={AptrascoGroup.imageUrl} headerUrl={AptrascoGroup.headerUrl} />
            <Widget
                title="Aptrasco"
                sub="With more than 12 years of experience and 24 global affiliations, Aptrasco makes building connections with international third-parties, government officials, and top-level management possible." />
        </>
    )
};

export default Aptrasco;