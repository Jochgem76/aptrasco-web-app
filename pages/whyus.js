import HeaderImage from '../components/HeaderImage';
import TextWhite from '../components/TextWhite';
import TextGray from '../components/TextGray';

const WhyUs = ({ }) => {

    const Why = {
        headerTitle: "Why us",
        imageUrl: "    https://res.cloudinary.com/dqvs8sk1o/image/upload/e_brightness:-25/v1653457494/whyus.jpg",
        headerUrl: "why us"

    };


    return (
        <>
            <HeaderImage title={Why.headerTitle} url={Why.imageUrl} headerUrl={Why.headerUrl} />
            <TextWhite
                title="Why would you choose us as an International Partner?"
                parOne="We are a holding company with activities and expertise across a diversified portfolio of businesses and sectors. Our aim is to design, create, deploy and sustain novel and disruptive businesses in each of the communities that we serve."
                parTwo="Leveraging our multi-disciplinary team of experts, we create innovative solutions through businesses that make a difference in quality of life and that are here for the long-term."
                parThree="Some industry streams that have enjoyed greater investments are Agriculture, Marketing, and Shipping. Other sectors such as IT services, Import and Export continue to be positioned in our investment portfolio aspiring to make every project viable and all undertaking projects to be successful while maintaining a high level of integrity."
            />
            <TextGray
                title="Our values"
                parOne="We continuously strive to deliver value to our customers and to serve the communities in which we live and work. We do this by embodying the following core values:"
                parTwo="International standards, Accessibility, Social responsibility, Integrity, Continuous innovation and Passion"
            />
            <TextWhite
                title="Our Future"
                parOne="Fast forward to the present day, Aptrasco is thriving the ‘Post Covid-19 Revolution’ partly located in one of the most innovative city in the world, Kuala Lumpur. Our footprint comprises of the leading brands in the industry currently in the Asia Pacific region – Singapore, Malaysia, Bangladesh, Indonesia, Thailand, Australia, and will keep on growing. Partner with us and be in the Game!"

            />
        </>
    )
};

export default WhyUs;