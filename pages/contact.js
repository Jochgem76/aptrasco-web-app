import Widget from "../components/Widget";
import HeaderImage from "../components/HeaderImage";
import ContactForm from "../components/ContactForm";

import header from '../img/contact-us-header.jpg'


const Contact = {
    headerTitle: "Get in touch",
    imageUrl: header,
    headerUrl: "Contact"

};

const ContactPage = ({ }) => {

    return (
        <>
            <HeaderImage title={Contact.headerTitle} url={Contact.imageUrl} headerUrl={Contact.headerUrl} />
            <Widget
                title="We'd love to hear from you."
                sub="Please contact us via email or the contact form below to discuss new business or other queries." />
            <div className="mx-auto px-6 lg:px-20 w-full">
                <div className="my-4 lg:my-8">
                    <p className="text-center lg:text-left text-black text-lg lg:text-xl font-extralight">Email: <span> <a href="mailto:info@aptrasco.com" className="font-light hover:text-blue-400">info@aptrasco.com</a></span></p>
                </div>
            </div>
            <ContactForm />
        </>
    )
};

export default ContactPage;