const TechInfoCard = (props) => {
  const imageOnlyClasses = !props.headerText
    ? "flex justify-center items-center"
    : "";

  return (
    <div
      className={`${imageOnlyClasses} bg-zinc-900 w-1/2 md:w-2/3 lg:w-3/4 w-content rounded-lg h-full p-6 mr-6 ml-6 lg:mt-0 mt-6 card`}
    >
      <div className="flex justify-center">
        <img
          className={`${
            props.imageHeightClass ? props.imageHeightClass : "h-24"
          } ${
            props.imageWidthClass ? props.imageWidthClass : "w-24"
          } ${props.coverObject? "object-cover" : "object-contain"}`}
          src={props.image}
          alt="Angular Logo"
        />
      </div>
      {props.headerText && (
        <div className="flex justify-center text-center mt-2">
          <h1 className="font-extrabold text-white lg:text-2xl">
            {props.headerText}
          </h1>
        </div>
      )}
    </div>
  );
};

export default TechInfoCard;
