import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";
import TextGray from '../../components/TextGray';

import NatureFreshHeader from '../../img/Nature_fresh_header.jpg';
import NatureFreshTwoSquareImages from "../../components/NatureFreshTwoSquareImages";

const Nature = {
    headerTitle: "Nature Fresh",
    imageUrl: NatureFreshHeader,
    headerUrl: "Nature Fresh"

};

const NatureFresh = ({ }) => {

    return (
        <>
            <HeaderImage title={Nature.headerTitle} url={Nature.imageUrl} headerUrl={Nature.headerUrl} />
            <Widget
                title="Nature Fresh (MJL Future Plantation Sdn Bhd)"
                sub="As one of Malaysia’s leading fruits and vegetables import and export wholesalers, the company prides itself on using effective quality control strategies that consistently maintain high quality fresh produces and secret recipe in sourcing the finest fresh produce sources." />
            <TextGray
                title="Nature Fresh is an Australian and Thailand importer. They supply vegetables and fruits locally in the Malaysian market."
                parOne="Do you own or manage a grocery, restaurant, or any other business? Nature Fresh is ready to supply your business with the top-quality of produce directly supplied from overseas."

            />
            <NatureFreshTwoSquareImages />
        </>
    )
};

export default NatureFresh;