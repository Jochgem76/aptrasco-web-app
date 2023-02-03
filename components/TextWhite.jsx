const TextWhite = ({ title, parOne, parTwo, parThree }) => {
    return (
        <section>
            <div className="mx-auto px-6 lg:px-20 w-full">
                <div className="my-14 lg:my-14">
                    <h1 className="text-center text-3xl lg-text-left lg:text-3xl text-black font-light pt-2 lg:pt-0">{title}</h1>
                    {parOne ? (<p className="text-center lg:text-left text-black text-lg lg:text-xl font-extralight pt-8">{parOne}</p>) : null}
                    {parTwo ? (<p className="text-center lg:text-left text-black text-lg lg:text-xl font-extralight pt-8">{parTwo}</p>) : null}
                    {parThree ? (<p className="text-center lg:text-left text-black text-lg lg:text-xl font-extralight pt-8">{parThree}</p>) : null}
                </div>
            </div>
        </section>
    )
};

export default TextWhite;