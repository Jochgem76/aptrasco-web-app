
const locations = {
    BD: {
        country: "Bangladesh",
        short: "Regional Office",
        addressLineOne: "House 56, Road No 2, Block C",
        addressLineTwo: "Sugandha R/A, Chittagong",
        phoneOne: "+88 (0) 18 193 756 76",
        phoneTwo: "+88 (0) 13 211 853 36",
        reach: ["Regional Asia", "Southeast Asia"],
        languages: ["Bangla", "English", "Hindi"],
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6743619801214!2d91.82833251499817!3d22.36592134616162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8818d6b6cc9%3A0x65497249b506c0d3!2sAptrasco%20Group!5e0!3m2!1sen!2smy!4v1653372230619!5m2!1sen!2smy",
    },
    MY_HeadOffice: {
        country: "Malaysia",
        short: "Head office",
        addressLineOne: "J-02-10, Solaris Mont Kiara",
        addressLineTwo: "Jalan Solaris, Mont Kiara, 50480 Kuala Lumpur",
        phoneOne: "+60 (0) 36 413 48 68",
        phoneTwo: "",
        reach: ["Regional Asia", "Southeast Asia", "Europe", "North America"],
        languages: ["Malay", "Chinese", "English"],
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.8460970284668!2d101.65902096632963!3d3.1754817992461657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc488a138d5f51%3A0x7ba3535b25c238c1!2s2%2C%20Jalan%20Solaris%202%2C%20Solaris%20Mont%20Kiara%2C%2050480%20Kuala%20Lumpur%2C%20Wilayah%20Persekutuan%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1675396834816!5m2!1sen!2smy",
    },
    MY_OperationalOffice: {
        country: "Malaysia",
        short: "Operational Office",
        addressLineOne: "23-05, Q Sentral, Jalan Stesen Sentral 2,",
        addressLineTwo: "50470 KL Sentral, Kuala Lumpur",
        phoneOne: "+60 (0) 34 812 76 23",
        phoneTwo: "",
        reach: ["Regional Asia", "Southeast Asia", "Europe", "North America"],
        languages: ["Malay", "Chinese", "English"],
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.84124204341!2d101.6877164!3d3.1366046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x618e4a3865eb3c9b!2sQ%20Sentral!5e0!3m2!1sen!2smy!4v1661139633965!5m2!1sen!2smy",
    }
}

const OfficeCard = () => {
    return (
        <article className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="px-12 lg:px-24 pt-10 lg:pt-8">
                    <div className="text-3xl font-bold">{locations.MY_HeadOffice.short}</div>
                    <div className="text-2xl font-light">{locations.MY_HeadOffice.country}</div>
                    <div className="text-2xl mt-8 font-extralight">{locations.MY_HeadOffice.phoneOne}</div>
                </div>
                <div className="px-12 lg:px-24 pt-6">
                    <div className="text-md font-semibold">Head Office</div>
                    <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.addressLineOne}</div>
                    <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.addressLineTwo}</div>
                    <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.country}</div>
                </div>
                <div className="lg:flex lg:inline-flex">
                    <div className="px-12 lg:px-24 pt-6">
                        <div className="text-md font-semibold">Spoken languages</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.languages[0]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.languages[1]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.languages[2]}</div>
                    </div>
                    <div className="px-12 lg:px-24 py-6">
                        <div className="text-md font-semibold">Reach</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.reach[0]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.reach[1]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.reach[2]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_HeadOffice.reach[3]}</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full lg:w-1/2 p-4">
                <div className="google_map">
                    <iframe
                        src={locations.MY_HeadOffice.url}
                        width="100%"
                        title="map"
                        height="500px"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="px-12 lg:px-24 pt-10 lg:pt-8">
                    <div className="text-3xl font-bold">{locations.MY_OperationalOffice.short}</div>
                    <div className="text-2xl font-light">{locations.MY_OperationalOffice.country}</div>
                    <div className="text-2xl mt-8 font-extralight">{locations.MY_OperationalOffice.phoneOne}</div>
                </div>
                <div className="px-12 lg:px-24 pt-6">
                    <div className="text-md font-semibold">Operational Office</div>
                    <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.addressLineOne}</div>
                    <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.addressLineTwo}</div>
                    <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.country}</div>
                </div>
                <div className="lg:flex lg:inline-flex">
                    <div className="px-12 lg:px-24 pt-6">
                        <div className="text-md font-semibold">Spoken languages</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.languages[0]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.languages[1]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.languages[2]}</div>
                    </div>
                    <div className="px-12 lg:px-24 py-6">
                        <div className="text-md font-semibold">Reach</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.reach[0]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.reach[1]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.reach[2]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY_OperationalOffice.reach[3]}</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full lg:w-1/2 p-4">
                <div className="google_map">
                    <iframe
                        src={locations.MY_OperationalOffice.url}
                        width="100%"
                        title="map"
                        height="500px"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
                <div className="px-12 lg:px-24 pt-10 lg:pt-8">
                    <div className="text-3xl font-bold">{locations.BD.short}</div>
                    <div className="text-2xl font-light">{locations.BD.country}</div>
                    <div className="text-2xl mt-8 font-extralight">{locations.BD.phoneOne}</div>
                    <div className="text-2xl mt-2 font-extralight">{locations.BD.phoneTwo}</div>
                </div>
                <div className="px-12 lg:px-24 pt-6">
                    <div className="text-md font-semibold">Regional Office</div>
                    <div className="text-md mt-1 font-extralight">{locations.BD.addressLineOne}</div>
                    <div className="text-md mt-1 font-extralight">{locations.BD.addressLineTwo}</div>
                    <div className="text-md mt-1 font-extralight">{locations.BD.country}</div>
                </div>
                <div className="lg:flex lg:inline-flex">
                    <div className="px-12 lg:px-24 pt-6">
                        <div className="text-md font-semibold">Spoken languages</div>
                        <div className="text-md mt-1 font-extralight">{locations.BD.languages[0]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.BD.languages[1]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.BD.languages[2]}</div>

                    </div>
                    <div className="px-12 lg:px-24 py-6">
                        <div className="text-md font-semibold">Reach</div>
                        <div className="text-md mt-1 font-extralight">{locations.BD.reach[0]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.BD.reach[1]}</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full lg:w-1/2 p-4">
                <div className="google_map">
                    <iframe
                        src={locations.BD.url}
                        width="100%"
                        title="map"
                        height="500px"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </article>
    )
}

export default OfficeCard;