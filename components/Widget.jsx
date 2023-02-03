const Widget = ({ title, sub }) => {
    return (
        <section>
            <hr className="opacity-100" />
            <div className="mx-auto px-6 lg:px-20 w-full">
                <div className="my-8 lg:my-14">
                    <h1 className="text-center text-3xl lg-text-left lg:text-3xl text-black font-light pt-2 lg:pt-0">{title}</h1>
                    {sub ? <p className="text-center lg:text-left text-black text-lg lg:text-xl font-extralight pt-8">{sub}</p> : null}
                </div>
            </div>
        </section>
    )
};

export default Widget;