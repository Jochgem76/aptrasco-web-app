import Widget from "../components/Widget";
import HeaderImage from "../components/HeaderImage";

const Cookie = {
    headerTitle: "Cookie Policy",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/v1653031435/cookies.jpg",
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