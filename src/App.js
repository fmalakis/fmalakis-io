import { useEffect, useRef, useState } from "react";
import "./App.css";
import AuthorInfoCard from "./components/AuthorInfoCard/AuthorInfoCard";
import GenericInfoCard from "./components/GenericInfoCard/GenericInfoCard";
import ProjectIngoCard from "./components/ProjectInfoCard/ProjectInfoCard";
import TechInfoCard from "./components/TechInfoCard/TechInfoCard";

function App() {
  const showMoreRef = useRef();
  const [projectInfo, setProjectInfo] = useState(null);

  const getProjectData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProjectInfo(json);
      });
  };

  useEffect(() => {
    getProjectData();
  }, []);

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
      {/* TODO: auto generate the tech info cards and all of the relevant content */}
      <section className="pb-6">
        <div className=" grid gap-6 md:lg:gap-0 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 lg:justify-center lg:align-center pt-12 logos">
          <div className="logo test flex justify-center align-center lg:block lg:w-full">
            <TechInfoCard
              altText={"Angular Logo"}
              headerText={"Angular 2+"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
              }
            ></TechInfoCard>
          </div>
          <div className="logo test flex justify-center align-center lg:block lg:w-full">
            <TechInfoCard
              altText={"Ionic Logo"}
              headerText={""}
              image={
                "https://ionicacademy.com/wp-content/uploads/2017/06/ionic-logo-portrait.png"
              }
            ></TechInfoCard>
          </div>
          <div className="logo test flex justify-center align-center lg:block lg:w-full">
            <TechInfoCard
              altText={"Tailwind Logo"}
              headerText={"Tailwind CSS"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              }
            ></TechInfoCard>
          </div>
          <div className="logo test flex justify-center align-center lg:block lg:w-full">
            <TechInfoCard
              altText={"React Logo"}
              headerText={"ReactJS"}
              coverObject={true}
              image={
                "https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
              }
            ></TechInfoCard>
          </div>
          <div className="logo test flex justify-center align-center lg:block lg:w-full">
            <TechInfoCard
              altText={"Bootstrap Logo"}
              headerText={"Bootstrap 5"}
              image={
                "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              }
            ></TechInfoCard>
          </div>
          <div className="logo test flex justify-center align-center lg:block lg:w-full">
            <TechInfoCard
              altText={"Firebase Logo"}
              headerText={"Google Firebase"}
              image={"https://img.icons8.com/color/480/firebase.png"}
            ></TechInfoCard>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center test">
        <div className="border-l-2 border-slate-400 border-lg h-48 my-6"></div>
      </div>
      <div className="flex justify-center items-center pt-12">
        <section className="lg:w-3/5 w-4/5 test">
          <GenericInfoCard
            headerText={"Completed Quests"}
            bodyText={
              "Throughout the years, I have interacted with a plethera of people, \
              ideas, tools and aproaches. I started working on web-related stuff around 2019 and haven't stopped ever since."
            }
            bottomText={"Here are some of the projects I was a part of:"}
          ></GenericInfoCard>
        </section>
      </div>
      <div className="flex justify-center items-center test">
        <div className="border-l-2 border-slate-400 border-lg h-48 my-6"></div>
      </div>
      <div className="flex justify-center items-center">
        <section className="lg:w-3/5 w-4/5 test mb-6">
          {projectInfo && (
            <ProjectIngoCard
              projectInfo={projectInfo.PROJECT_INFO_CARD.CLASSIO}
              imagePosition={"left"}
            ></ProjectIngoCard>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
