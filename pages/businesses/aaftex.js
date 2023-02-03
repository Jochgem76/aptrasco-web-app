import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

import header from '../../img/aaftex_header.jpg'

const AaftexFashion = {
    headerTitle: "Aaftex Fashion",
    imageUrl: header,
    headerUrl: "Aaftex Fashion"

};

const Aaftex = ({ }) => {

    return (
        <>
            <HeaderImage title={AaftexFashion.headerTitle} url={AaftexFashion.imageUrl} headerUrl={AaftexFashion.headerUrl} />
            <Widget
                title="AafTex Fashion BD Ltd"
                sub="Known for their craftsmanship, Aaftex acts as a buying house for international fashion wholesale manufacturers (OEM and ODM) and retailers. The company also manufactures apparels that are fully customisable in sizes, colours and more." />
        </>
    )
};

export default Aaftex;