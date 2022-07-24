import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/NavBar"
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
     <Navbar />
     <Header />
     <About />
     <Skills />
     <Projects />
     <Footer /> 
    </div>
  );
}

export default App;
