import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-hero-pattern bg-no-repeat font-Helvetica">
      <Navbar />
      <Header />
      <Projects />
      <Team />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
