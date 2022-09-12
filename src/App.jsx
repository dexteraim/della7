import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Team from './components/Team';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import Clients from './components/Clients';
import LanguageToggle from './components/Languagetoggle';

function App() {
  return (
    <div id="home" className="bg-hero-pattern bg-[center_top_0rem] bg-no-repeat font-Helvetica">
      <Navbar />
      <Header />
      <Clients />
      <Projects />
      <Team />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
