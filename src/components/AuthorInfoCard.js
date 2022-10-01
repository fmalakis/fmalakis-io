import "./AuthorInfoCard.css";

const AuthorInfoCard = () => {
  return (
    <div className="dark:bg-zinc-900 rounded-lg py-6 card">
      <div className="grid grid-cols-6">
        <div className="col-span-2 flex justify-start align-center">
          <img
            alt="Fotis Malakis"
            className="lg:w-1/2 w-2/3 rounded-full ml-6"
            src="https://scontent.fskg3-1.fna.fbcdn.net/v/t39.30808-6/296388132_1100702484209777_1760743577965925712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LxPvNl2WHqMAX-22OSU&_nc_ht=scontent.fskg3-1.fna&oh=00_AT_sjuAJ1VPJpEXqqmLA9t-TrOA8Y2g73JhPNhu9kplmsg&oe=633CD11F"
          ></img>
        </div>
        <div className="col-span-4 flex items-center align-center">
          <div className="typewriter">
            <h1 className="dark:text-white lg:text-5xl text-xl font-bold font-silkscreen">
              fmalakis_
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-center pt-6 px-6">
        <h1 className="dark:text-white lg:text-2xl text-lg">
          Software Engineer, Frontend Developer
        </h1>
      </div>
    </div>
  );
};

export default AuthorInfoCard;
