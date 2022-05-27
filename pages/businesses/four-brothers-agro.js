import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

const Brothers = {
    headerTitle: "Four Brothers Agro",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653615560/fourBrothers_header.jpg",
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