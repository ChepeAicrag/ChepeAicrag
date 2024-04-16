import {
  About,
  Contact,
  Navbar,
  Projects,
  Skills,
} from "./components";
import "./index.css";

function App() {
  return (
    <>
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
