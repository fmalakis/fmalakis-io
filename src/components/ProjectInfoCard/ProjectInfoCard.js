import { useEffect, useState } from "react";

const ProjectIngoCard = (props) => {
  const openLinkedPage = () => {
    window.open("http://classio.software/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-zinc-900 rounded-lg py-6 card p-12">
      <div className="grid grid-cols-1 md:lg:grid-cols-2">
        {props.imagePosition === "left" && (
          <div className="flex justify-center items-center">
            <img
              onClick={openLinkedPage}
              className="object-cover md:lg:hover:cursor-pointer hover:cursor-default"
              alt="classio project"
              src={props.projectInfo.IMG}
            ></img>
          </div>
        )}

        <div className="mt-6">
          <div className="flex justify-center align-center text-white font-extrabold text-2xl md:text-4xl lg:text-5xl mb-6">
            <h1>{props.projectInfo.NAME}</h1>
          </div>
          <div className="flex justify-center align-center text-white text-xl">
            <h2>{props.projectInfo.DESCRIPTION}</h2>
          </div>
          <div className="lg:flex justify-center items-center mt-12 w-full hidden">
            <a
              href="http://classio.software/"
              target="_blank"
              type="button"
              className="text-white text-2xl inline-flex items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium lg:rounded-lg rounded-full text-sm px-5 py-2.5 text-center"
              rel="noreferrer"
            >
              <p>{props.projectInfo.CTA_TEXT}</p>
            </a>
          </div>
        </div>
        {props.imagePosition === "right" && (
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
          href="http://classio.software/"
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
