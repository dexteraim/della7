import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Team from './components/Team';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Services from './components/Services';
import Contact from './components/Contact';
import Bg from './components/Bg';

function App() {
  const newLocal = 'font-Helvetica';
  return (
    <div id="home" className={newLocal}>
      <Bg />
      <Navbar />
      <div className="mx-auto max-w-[1120px]">
        <Header />
        <Services />
        <Clients />
        <Projects />
        <Team />
        <Contact />
        <Tasks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
