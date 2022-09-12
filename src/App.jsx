import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Team from './components/Team';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import Clients from './components/Clients';

function App() {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-[center_top_0rem] font-Helvetica">
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
