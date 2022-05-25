import Widget from "../components/Widget";
import HeaderImage from "../components/HeaderImage";

const Terms = {
    headerTitle: "Terms and Conditions",
    imageUrl: "https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-20/v1653030971/termsAndConditions.jpg",
    headerUrl: "Terms and Conditions"

};

const Widgets = [{
    title: "Accuracy",
    sub: "Every effort is taken to ensure that the information contained in this website is both accurate and complete."
},
{
    title: "Availability",
    sub: "We cannot guarantee uninterrupted access to this website, or the sites to which it links. We accept no responsibility for any loss, disruption or damage arising from the lack of access to information or broken links."
},
{
    title: "Copyright",
    sub: "The material on this site is subject to copyright protection of the Aptrasco Group. unless otherwise indicated. The copyright protected material may be reproduced free of charge in any format or medium for research, private study or for internal circulation within an organisation. This is subject to the material being reproduced accurately and not used in a misleading context. Where any of Aptrasco Group's copyright items on this site are being republished or copied to others (either wholly or partly), the source of the material must be identified and the copyright status acknowledged."
},
{
    title: "Intellectual property",
    sub: "The names, images and logos identifying Aptrasco Group are the proprietary marks of Aptrasco. Copying our logos or any third party logos accessed via this website is not permitted without the prior approval of the relevant copyright owner."
},
{
    title: "Links Policy",
    sub: "All hyperlinks from this website are provided for information and convenience only. Elected using our links policy. Links are provided for information and convenience only. We cannot accept responsibility for the sites linked to, or the information found there. A link does not imply an endorsement of a site; conversely, the absence of links to a particular website does not imply lack of endorsement. You do not have to ask permission to link directly to pages hosted on this site. However, we do not permit our pages to be loaded into frames on your site. The pages must load into the user’s entire window. You must not use the logo to link to our site without prior permission."
},
{
    title: "Virus Protection",
    sub: "We make every effort to check and test material at all stages of production. It is always wise for you to run an anti-virus programme on all material downloaded from the internet. We cannot accept any responsibility for any loss, disruption or damage to your data or your computer system that may occur while using material derived from this website."
}
]

const TermsAndConditions = () => {

    return (
        <>
            <HeaderImage title={Terms.headerTitle} url={Terms.imageUrl} headerUrl={Terms.headerUrl} />
            {Widgets.map((widget) => <Widget title={widget.title} sub={widget.sub} key={widget.id} />)}
        </>
    )
};

export default TermsAndConditions;