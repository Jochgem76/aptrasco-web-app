import HeaderImage from "../components/HeaderImage";
import Widget from "../components/Widget";

import header from '../img/clients-header.jpg'

const ClientBase = {
    headerTitle: "Our Clients",
    imageUrl: header,
    headerUrl: "clients"

};


const Clients = () => {

    return (
        <>
            <HeaderImage title={ClientBase.headerTitle} url={ClientBase.imageUrl} headerUrl={ClientBase.headerUrl} />
            <Widget
                title="We have built a large client base during the years."
                sub="With more than 12 years of experience and 24 global affiliations, Aptrasco makes building connections with international third-parties, government officials, and top-level management possible." />
        </>
    )
};

export default Clients;
