import Widget from "../../components/Widget";
import HeaderImage from "../../components/HeaderImage";

const OcunapseIT = {
    headerTitle: "Ocunapse",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/v1653467132/nature_fresh_header.jpg",
    headerUrl: "Ocunapse"

};

const Ocunapse = ({ }) => {

    return (
        <>
            <HeaderImage title={OcunapseIT.headerTitle} url={OcunapseIT.imageUrl} headerUrl={OcunapseIT.headerUrl} />
            <Widget
                title="Ocunapse Sdn Bhd"
                sub="Ocunapse envisions the digital breakthroughs of tomorrow from deploying artificial intelligence to developing systems and applications, they mobilize smart solutions for every business challenge." />
        </>
    )
};

export default Ocunapse;