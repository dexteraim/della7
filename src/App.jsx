import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Tasks } from "./components/Tasks";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="bg-hero-pattern bg-no-repeat font-Helvetica">
      <Navbar />
      <Header />
      <div id="home" className="mx-auto max-w-[1024px] px-4">
        <div id="projects">
          <Projects />
        </div>
        <div id="team">
          <Team />
        </div>
      </div>
      <Tasks />
      <img className="w-screen pb-8" src="/images/footer/team.png" alt="team" />
      <div className="mx-auto max-w-[1024px] px-4">
        <Footer />
      </div>
    </div>
  );
}

export default App;
