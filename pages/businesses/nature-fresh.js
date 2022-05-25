import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

const Nature = {
    headerTitle: "Nature Fresh",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653467132/nature_fresh_header.jpg",
    headerUrl: "Nature Fresh"

};

const NatureFresh = ({ }) => {

    return (
        <>
            <HeaderImage title={Nature.headerTitle} url={Nature.imageUrl} headerUrl={Nature.headerUrl} />
            <Widget
                title="Nature Fresh (MJL Future Plantation Sdn Bhd)"
                sub="As one of Malaysia’s leading fruits and vegetables import and export wholesalers, the company prides itself on using effective quality control strategies that consistently maintain high quality fresh produces and secret recipe in sourcing the finest fresh produce sources." />
        </>
    )
};

export default NatureFresh;