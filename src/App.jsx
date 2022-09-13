import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Team from './components/Team';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const newLocal =
    'bg-hero bg-[center_top_0rem] bg-no-repeat font-Helvetica max-w-[1440px] mx-auto';
  return (
    <div id="home" className={newLocal}>
      <Navbar />
      <Header />
      <Clients />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
