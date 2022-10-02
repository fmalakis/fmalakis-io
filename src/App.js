import { useEffect, useRef } from "react";
import "./App.css";
import AuthorInfoCard from "./components/AuthorInfoCard/AuthorInfoCard";
import GenericInfoCard from "./components/GenericInfoCard/GenericInfoCard";
import TechInfoCard from "./components/TechInfoCard/TechInfoCard";

function App() {
  const showMoreRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const allWithClass = Array.from(document.getElementsByClassName("test"));

    allWithClass.forEach((el) => observer.observe(el));
  }, []);

  const handleShowMoreClick = () => {
    showMoreRef.current?.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <section className="lg:w-3/5 w-4/5 test">
          <AuthorInfoCard></AuthorInfoCard>
        </section>
        <button
          onClick={handleShowMoreClick}
          className="absolute bottom-2 show-more-btn"
        >
          <svg
            className="w-12 h-12 white-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center items-center pt-12">
        <section ref={showMoreRef} className="lg:w-3/5 w-4/5 test">
          <GenericInfoCard></GenericInfoCard>
        </section>
      </div>
      <div className="flex justify-center items-center test">
        <div className="border-l-2 border-slate-400 border-lg h-48 my-6"></div>
      </div>
      <section className="pb-6">
        <div className="lg:flex lg:justify-center lg:align-center pt-12 logos">
          <div className="logo test">
            <TechInfoCard
              altText={"Angular Logo"}
              headerText={"Angular 2+"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
              }
            ></TechInfoCard>
          </div>
          <div className="logo test">
            <TechInfoCard
              altText={"Ionic Logo"}
              headerText={""}
              image={
                "https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png"
              }
            ></TechInfoCard>
          </div>
          <div className="logo test">
            <TechInfoCard
              altText={"Tailwind Logo"}
              headerText={"Tailwind CSS"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              }
            ></TechInfoCard>
          </div>
          <div className="logo test">
            <TechInfoCard
              altText={"React Logo"}
              headerText={"ReactJS"}
              image={
                "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
              }
            ></TechInfoCard>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
