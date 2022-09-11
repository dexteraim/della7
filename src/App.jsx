import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Tasks from "./components/Tasks"
import Team from "./components/Team"

function App() {

  return (
    <>
      <div id="home" className="max-w-[1024px] mx-auto px-4">
        <Navbar />
        <Header />
        <div id="projects">
          <Projects />
        </div>
        <div id="team">
          <Team />
        </div>
      </div>
      <Tasks />
      <img className="w-screen pb-8" src="/images/footer/team.png" alt="team" />
      <div className="max-w-[1024px] mx-auto px-4">
        <Footer />
      </div>
    </>
  )
}

export default App
