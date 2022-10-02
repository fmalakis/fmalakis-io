const TechInfoCard = (props) => {
  const imageOnlyClasses = !props.headerText
    ? "flex justify-center items-center"
    : "";
  return (
    <div
      className={`${imageOnlyClasses} bg-zinc-900 rounded-lg h-full p-6 mr-6 ml-6 lg:mt-0 mt-6 card`}
    >
      <div className="flex justify-center">
        <img
          className="h-24 w-24 object-cover"
          src={props.image}
          alt="Angular Logo"
        />
      </div>
      {props.headerText && (
        <div className="flex justify-center mt-2">
          <h1 className="font-extrabold text-white lg:text-2xl">
            {props.headerText}
          </h1>
        </div>
      )}
    </div>
  );
};

export default TechInfoCard;
