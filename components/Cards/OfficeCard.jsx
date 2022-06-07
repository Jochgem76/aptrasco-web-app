
const locations = {
    BD: {
        country: "Bangladesh",
        short: "Chi",
        addressLineOne: "House 56, Road No 2, Block C",
        addressLineTwo: "Sugandha R/A, Chittagong",
        phoneOne: "+88 (0) 18 193 756 76",
        phoneTwo: "+88 (0) 13 211 853 36",
        reach: ["Regional Asia", "Southeast Asia"],
        languages: ["Bangla", "English", "Hindi"],
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.6743619801214!2d91.82833251499817!3d22.36592134616162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8818d6b6cc9%3A0x65497249b506c0d3!2sAptrasco%20Group!5e0!3m2!1sen!2smy!4v1653372230619!5m2!1sen!2smy",
    },
    MY: {
        country: "Malaysia",
        short: "Kua",
        addressLineOne: "J-02-10, Solaris Mont Kiara",
        addressLineTwo: "Jalan Solaris, Mont Kiara, 50480 Kuala Lumpur",
        phoneOne: "+60 (0) 36 413 48 68",
        phoneTwo: "",
        reach: ["Regional Asia", "Southeast Asia", "Europe", "North America"],
        languages: ["Malay", "Chinese", "English"],
        url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6937656375967!2d101.657663714876!3d3.175074353877851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4928dcfb25a9%3A0x2f13db081373a529!2sAnyMeta%20-%20Digital%20Marketing%20Agency%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1653372461613!5m2!1sen!2smy",
    }
}

const OfficeCard = () => {
    return (
        <article className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="px-12 lg:px-24 pt-10 lg:pt-8">
                    <div className="text-6xl font-bold">{locations.BD.short}</div>
                    <div className="text-3xl font-extralight">{locations.BD.country}</div>
                    <div className="text-2xl mt-8 font-extralight">{locations.BD.phoneOne}</div>
                    <div className="text-2xl mt-2 font-extralight">{locations.BD.phoneTwo}</div>
                </div>
                <div className="px-12 lg:px-24 pt-6">
                    <div className="text-md font-semibold">Address</div>
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
            <div className="w-full lg:w-1/2">
                <div className="px-12 lg:px-24 pt-10 lg:pt-8">
                    <div className="text-6xl font-bold">{locations.MY.short}</div>
                    <div className="text-3xl font-extralight">{locations.MY.country}</div>
                    <div className="text-2xl mt-8 font-extralight">{locations.MY.phoneOne}</div>
                </div>
                <div className="px-12 lg:px-24 pt-6">
                    <div className="text-md font-semibold">Address</div>
                    <div className="text-md mt-1 font-extralight">{locations.MY.addressLineOne}</div>
                    <div className="text-md mt-1 font-extralight">{locations.MY.addressLineTwo}</div>
                    <div className="text-md mt-1 font-extralight">{locations.MY.country}</div>
                </div>
                <div className="lg:flex lg:inline-flex">
                    <div className="px-12 lg:px-24 pt-6">
                        <div className="text-md font-semibold">Spoken languages</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY.languages[0]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY.languages[1]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY.languages[2]}</div>
                    </div>
                    <div className="px-12 lg:px-24 py-6">
                        <div className="text-md font-semibold">Reach</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY.reach[0]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY.reach[1]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY.reach[2]}</div>
                        <div className="text-md mt-1 font-extralight">{locations.MY.reach[3]}</div>



                    </div>
                </div>
            </div>
            <div className="w-full h-full lg:w-1/2 p-4">
                <div className="google_map">
                    <iframe
                        src={locations.MY.url}
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