import Widget from "../components/Widget";
import HeaderImage from "../components/HeaderImage";

import header from '../img/cookies-header.jpg'

const Cookie = {
    headerTitle: "Cookie Policy",
    imageUrl: header,
    headerUrl: "Cookie Policy"

};

const Cookies = ({ }) => {

    return (
        <>
            <HeaderImage title={Cookie.headerTitle} url={Cookie.imageUrl} headerUrl={Cookie.headerUrl} />
            <Widget
                title="When you browse the Aptrasco website we use cookies to collect information about your online preferences and to enhance your browsing experience."
                sub="The cookies we use do not capture information that can identify you and do not give us access to your computer. You can delete/control cookies via your browser settings by following these instructions, however if you choose to block cookies then your browsing experience may be affected." />
        </>
    )
};

export default Cookies;