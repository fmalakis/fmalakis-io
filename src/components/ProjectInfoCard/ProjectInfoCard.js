const ProjectIngoCard = (props) => {
  const openLinkedPage = () => {
    window.open("http://classio.software/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-zinc-900 rounded-lg py-6 card p-12">
      <div className="grid grid-cols-1 md:lg:grid-cols-2">
        <div className="flex justify-center items-center">
          <img
            onClick={openLinkedPage}
            className="object-cover md:lg:hover:cursor-pointer hover:cursor-default"
            alt="classio project"
            src="http://classio.software/assets/class-logo_transparent_cropped_purple.png"
          ></img>
        </div>

        <div className="mt-6">
          <div className="flex justify-center align-center text-white font-extrabold text-2xl md:text-4xl lg:text-5xl mb-6">
            <h1>Classio ERP</h1>
          </div>
          <div className="flex justify-center align-center text-white text-xl">
            <h2>
              Classio was part of a semester project turned into a full fledged
              idea. Built ontop of a bleeding edge stack, classio is a scalable,
              intuitive and modern-looking school ERP built to enable teachers,
              students and owners to do their job a bit easier
            </h2>
          </div>
          <div className="lg:flex justify-center items-center mt-12 w-full hidden">
            <a
              href="http://classio.software/"
              target="_blank"
              type="button"
              className="text-white text-2xl inline-flex items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium lg:rounded-lg rounded-full text-sm px-5 py-2.5 text-center"
              rel="noreferrer"
            >
              <p>Check out Classio</p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6 w-full lg:hidden">
        <a
          href="http://classio.software/"
          target="_blank"
          type="button"
          className="text-white text-2xl inline-flex items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium lg:rounded-lg rounded-full text-sm px-5 py-2.5 text-center"
          rel="noreferrer"
        >
          <p>Check out Classio</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectIngoCard;
