import { useEffect } from "react";
import "./App.css";
import AuthorInfoCard from "./components/AuthorInfoCard";

function App() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        } else {
          entry.target.classList.remove("show")
        }
      })
    })

    const allWithClass = Array.from(document.getElementsByClassName('test'));
    console.log(allWithClass);

    allWithClass.forEach((el) => observer.observe(el));
  }, [])

  return (
    <div className="bg-slate-800 min-h-screen">
      <div className="flex justify-center items-center">
        <section className="pt-12 lg:w-3/5 w-4/5 test">
          <AuthorInfoCard></AuthorInfoCard>
        </section>
      </div>
    </div>
  );
}

export default App;
