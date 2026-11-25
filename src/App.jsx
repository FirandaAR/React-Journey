import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import hsiLogo from "./assets/images.jpg";
import StudentList from "./components/StudentList";
import "./App.css";
import Counter from "./components/Counter";
import StudentVoting from "./components/StudentVoting";

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={hsiLogo} className="framework" alt="HSI BS logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Assalamu'alaikum! 👋</h1>
          <h2>Welcome to HSI-BS React Class</h2>
          <p>My first React application.</p>
        </div>
        {/* call StudentList component */}
        <StudentList />
        <Counter />
        <StudentVoting />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
