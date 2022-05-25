import HeaderImage from "../components/HeaderImage";
import Widget from "../components/Widget";
import IndustryCards from "../components/IndustryCards";

const Industry = {
    headerTitle: "Our Industries",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/v1653274698/industries.jpg",
    headerUrl: "Industries"

};


const Industries = ({ }) => {

    return (
        <>
            <HeaderImage title={Industry.headerTitle} url={Industry.imageUrl} headerUrl={Industry.headerUrl} />
            <Widget
                title="Choose from the Best-In-Class"
                sub="With more than 12 years of experience and 24 global affiliations, Aptrasco makes building connections with international third-parties, government officials, and top-level management possible." />
            <IndustryCards />
        </>
    )
};

export default Industries;