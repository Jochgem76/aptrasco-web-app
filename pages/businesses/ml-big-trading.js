import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

const Trading = {
    headerTitle: "ML Big Trading",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653467132/nature_fresh_header.jpg",
    headerUrl: "ML Big Trading"

};

const MLBigTrading = ({ }) => {

    return (
        <>
            <HeaderImage title={Trading.headerTitle} url={Trading.imageUrl} headerUrl={Trading.headerUrl} />
            <Widget
                title="ML Big Trading"
                sub="Specialises in sourcing wholesale textiles and apparel for fashion houses, electric and electronics, and fresh produce for grocery stores.They create opportunities for local and international companies to import and export products to new and existing markets." />
        </>
    )
};

export default MLBigTrading;