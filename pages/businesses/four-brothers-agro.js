import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

import header from '../../img/fourBrothers_header.jpg'

const Brothers = {
    headerTitle: "Four Brothers Agro",
    imageUrl: header,
    headerUrl: "Four Brothers Agro"

};


const FourBrothers = ({ }) => {

    return (
        <>
            <HeaderImage title={Brothers.headerTitle} url={Brothers.imageUrl} headerUrl={Brothers.headerUrl} />
            <Widget
                title="Four Brothers Agro"
                sub="The company focuses on supplying animal feed to livestock and poultry farms. They conduct ongoing research and development to produce feed products with the optimum amount of nutrients." />
        </>
    )
};

export default FourBrothers;