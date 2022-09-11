import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Tasks from "./components/Tasks"
import Team from "./components/Team"

function App() {

  return (
    <>
      <div className="max-w-[1024px] mx-auto px-4">
        <Projects />
        <Team />
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
