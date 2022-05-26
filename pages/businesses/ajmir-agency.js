import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";
import AjmirTwoImages from "../../components/AjmirTwoImages";

const AjmirShipping = {
    headerTitle: "Ajmir Agency",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653464155/ajmir.jpg",
    headerUrl: "Ajmir Agency"

};

const AjmirAgency = ({ }) => {

    return (
        <>
            <HeaderImage title={AjmirShipping.headerTitle} url={AjmirShipping.imageUrl} headerUrl={AjmirShipping.headerUrl} />
            <Widget
                title="Ajmir Water Transport Agency"
                sub="An international logistics agency that facilitates the transportation between suppliers, manufacturers, distributors and retailers. This includes sea freight forwarding. The agency’s mission is to help reduce transit time and shipping costs." />
            <AjmirTwoImages />
        </>
    )
};

export default AjmirAgency;