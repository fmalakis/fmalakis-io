const GenericInfoCard = (props) => {
    return (
        <div className="bg-zinc-900 rounded-lg py-6 card p-12">
            <div className="flex justify-center align-center text-center text-left">
                <h1 className="text-white lg:text-5xl text-xl font-bold font-silkscreen">
                    {props.headerText
                        ? props.headerText
                        : "Greetings traveller!"}
                </h1>
            </div>
            {props.bodyText ? (
                <div className="flex justify-center align-center mt-12">
                    <h2 className="text-white lg:text-xl text-xl">
                        {props.bodyText}
                    </h2>
                </div>
            ) : (
                <div className="flex justify-center align-center mt-12">
                    <h2 className="text-white lg:text-xl text-xl">
                        I'm Fotis, an avid computer nerd , lover of videogames
                        and everything web related. I have studied at the{" "}
                        Computer Science Department of AUTh and having
                        discovered my love for Web Frameworks and Full-stack
                        Development early on during my tenure, I've been
                        tinkering with them ever since.
                    </h2>
                </div>
            )}
            {props.bottomText && <div className="flex justify-center align-center mt-12">
                <h2 className="text-white lg:text-xl text-xl">
                    {props.bottomText}
                </h2>
            </div>}
        </div>
    );
};

export default GenericInfoCard;
