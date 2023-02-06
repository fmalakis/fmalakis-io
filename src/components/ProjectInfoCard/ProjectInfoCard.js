import { useState } from "react";

const ProjectIngoCard = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openLinkedPage = () => {
    window.open(props.projectInfo.CTA_LINK, "_blank", "noopener,noreferrer");
  };

  const onWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", onWindowResize);

  return (
    <div className="bg-zinc-900 rounded-lg py-6 card p-12">
      <div className="grid grid-cols-1 md:lg:grid-cols-2">
        {(props.imagePosition === "left" || windowWidth <= 912) &&
          props.imagePosition && (
            <div className="flex justify-center items-center">
              <img
                onClick={openLinkedPage}
                className="object-cover md:lg:hover:cursor-pointer hover:cursor-default w-80 h-auto"
                alt={`${props.projectInfo.NAME} project`}
                src={props.projectInfo.IMG}
                href={props.projectInfo.CTA_LINK}
                ></img>
            </div>
          )}

        <div className={`${!props.imagePosition ? "col-span-full" : ""} mt-6`}>
          <div className="flex justify-center align-center text-white font-extrabold text-2xl md:text-4xl lg:text-5xl mb-6">
            <h1>{props.projectInfo.NAME}</h1>
          </div>
          <div className="flex justify-center align-center text-white text-xl">
            <h2>{props.projectInfo.DESCRIPTION}</h2>
          </div>
          <div className="lg:flex justify-center items-center mt-12 w-full hidden">
            <a
              href={props.projectInfo.CTA_LINK}
              target="_blank"
              type="button"
              className="text-white text-2xl inline-flex items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium lg:rounded-lg rounded-full text-sm px-5 py-2.5 text-center"
              rel="noreferrer"
            >
              <p>{props.projectInfo.CTA_TEXT}</p>
            </a>
          </div>
        </div>
        {props.imagePosition === "right" && windowWidth > 912 && (
          <div className="flex justify-center items-center">
            <img
              onClick={openLinkedPage}
              className="object-cover md:lg:hover:cursor-pointer hover:cursor-default"
              alt="classio project logo"
              src={props.projectInfo.IMG}
            ></img>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center mt-6 w-full lg:hidden">
        <a
          href={props.projectInfo.CTA_LINK}
          target="_blank"
          type="button"
          className="text-white text-2xl inline-flex items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium lg:rounded-lg rounded-full text-sm px-5 py-2.5 text-center"
          rel="noreferrer"
        >
          <p>{props.projectInfo.CTA_TEXT}</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectIngoCard;
