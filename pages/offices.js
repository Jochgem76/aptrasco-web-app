import HeaderImage from "../components/HeaderImage";
import Widget from "../components/Widget";
import OfficeCard from "../components/Cards/OfficeCard";

const OfficeHeader = {
    headerTitle: "Our Offices",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653359646/offices.jpg",
    headerUrl: "Offices"

};



const Offices = ({ }) => {

    return (
        <>
            <HeaderImage title={OfficeHeader.headerTitle} url={OfficeHeader.imageUrl} headerUrl={OfficeHeader.headerUrl} />
            <Widget
                title="Founded in 2006, our offices are located in Bangladesh and Malaysia."
                sub="" />
            <OfficeCard />
        </>
    )
};

export default Offices;