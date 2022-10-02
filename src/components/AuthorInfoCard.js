import "./AuthorInfoCard.css";

const AuthorInfoCard = () => {
  return (
    <div className="bg-zinc-900 rounded-lg py-6 card">
      <div className="grid grid-cols-6">
        <div className="col-span-2 flex justify-center align-center">
          <img
            alt="Fotis Malakis"
            className="lg:w-1/2 w-2/3 rounded-full"
            src="https://scontent.fskg3-1.fna.fbcdn.net/v/t39.30808-6/296388132_1100702484209777_1760743577965925712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LxPvNl2WHqMAX-22OSU&_nc_ht=scontent.fskg3-1.fna&oh=00_AT_sjuAJ1VPJpEXqqmLA9t-TrOA8Y2g73JhPNhu9kplmsg&oe=633CD11F"
          ></img>
        </div>
        <div className="col-span-4 flex items-center align-center">
          <div className="typewriter">
            <h1 className="text-white lg:text-5xl text-xl font-bold font-silkscreen">
              fmalakis_
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-center pt-6 px-6">
        <h1 className="text-white lg:text-3xl md:text-lg text-center font-extrabold">
          Software Engineer, Frontend Developer
        </h1>
      </div>
      <div className="flex justify-center align-center text-center pt-6 px-6">
        <h2 className="text-white lg:text-xl md:text-lg">
          BSc in Computer Science with a major in Web Technologies and Software
          Engineering
        </h2>
      </div>
      <div className="flex justify-center align-center pt-6 px-6">
        <h2 className="text-white lg:text-xl md:text-lg">
          Currently employed at:{" "}
          <a
            className="underline"
            href="https://www2.deloitte.com/gr/en.html"
            target="_blank"
            rel="noreferrer"
          >
            Deloitte
          </a>
        </h2>
      </div>
      <div className="flex justify-center align-center pt-6 px-6">
        <a
          href="https://github.com/fmalakis"
          target="_blank"
          type="button"
          className="text-white text-2xl inline-flex items-center bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium lg:rounded-lg rounded-full text-sm px-5 py-2.5 text-center mr-6"
          rel="noreferrer"
        >
          <svg
            className="lg:mr-4 w-6 h-6"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="github"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            ></path>
          </svg>
          <p className="lg:block hidden">GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/fotios-dimitrios-malakis/"
          target="_blank"
          type="button"
          className="text-2xl inline-flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium lg:rounded-lg rounded-full text-sm px-5 py-2.5 mr-6 text-center"
          rel="noreferrer"
        >
          <svg
            className="lg:mr-4 w-6 h-6"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="linkedin"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <p className="lg:block hidden">LinkedIn</p>
        </a>
        <a
          href="mailto:xan.klem.30@gmail.com"
          target="_blank"
          type="button"
          className="text-2xl inline-flex items-center text-white bg-gradient-to-r from-stone-500 to-violet-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium lg:rounded-lg rounded-full text-sm px-5 py-2.5 text-center"
          rel="noreferrer"
        >
          <svg
            className="lg:mr-4 w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
          </svg>
          <p className="lg:block hidden">Email me!</p>
        </a>
      </div>
    </div>
  );
};

export default AuthorInfoCard;
