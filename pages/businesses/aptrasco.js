import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

import header from '../../img/whyus-header.jpg'

const AptrascoGroup = {
    headerTitle: "Aptrasco",
    imageUrl: header,
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