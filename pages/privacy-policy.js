import Widget from "../components/Widget";
import HeaderImage from "../components/HeaderImage";

import header from '../img/privacy-header.jpg'

const Privacy = {
    headerTitle: "Privacy and data protection",
    imageUrl: header,
    headerUrl: "Privacy Policy"

};

const PrivacyPolicy = ({ }) => {

    return (
        <>
            <HeaderImage title={Privacy.headerTitle} url={Privacy.imageUrl} headerUrl={Privacy.headerUrl} />
            <Widget
                title="The Aptrasco website does not store or capture personal information, but does utilise various cookies to help measure traffic and make improvements to the website."
                sub="The website will only record your personal information such as your name, address, or email address if volunteered to us by you. Such information shall be treated as private and confidential." />
        </>
    )
};

export default PrivacyPolicy;