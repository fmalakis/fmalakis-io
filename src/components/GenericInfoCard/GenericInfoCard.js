const GenericInfoCard = (props) => {
  return (
    <div className="bg-zinc-900 rounded-lg py-6 card p-12">
      <div className="flex justify-center align-center lg:text-center text-left">
        <h1 className="text-white lg:text-5xl text-xl font-bold font-silkscreen">
          Greetings traveller!
        </h1>
      </div>
      <div className="flex justify-center align-center mt-12">
        <h2 className="text-white lg:text-xl text-xl">
          I'm Fotis, an{" "}
          <span className="underline decoration-purple-600">
            avid computer nerd
          </span>
          , lover of videogames and everything web related. I have studied at
          the{" "}
          <span className="underline decoration-sky-600">
            Computer Science Department of AUTh
          </span>{" "}
          and having discovered my{" "}
          <span className="underline decoration-rose-600">
            love for Web Frameworks and Full-stack Development
          </span>{" "}
          early on during my tenure, I've been tinkering with them ever since.
        </h2>
      </div>
      <div className="flex justify-center align-center mt-12">
        <h2 className="text-white lg:text-xl text-xl">
          Here's some of the frameworks as well as other technologies I have
          used throught my multiyear endeavor:
        </h2>
      </div>
    </div>
  );
};

export default GenericInfoCard;
