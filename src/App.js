import { useEffect, useRef } from "react";
import "./App.css";
import AuthorInfoCard from "./components/AuthorInfoCard";

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
    showMoreRef.current?.scrollIntoView({behaviour: 'smooth'});
  }

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <section className="lg:w-3/5 w-4/5 test">
          <AuthorInfoCard></AuthorInfoCard>
        </section>
        <button onClick={handleShowMoreClick} className="absolute bottom-2 show-more-btn">
          <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
