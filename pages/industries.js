import HeaderImage from "../components/HeaderImage";
import Widget from "../components/Widget";
import IndustryCards from "../components/IndustryCards";

import header from '../img/industries-header.jpg'

const Industry = {
    headerTitle: "Our Industries",
    imageUrl: header,
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