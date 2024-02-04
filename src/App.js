import "./App.css";
import { BrowserRouter ,Route,Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { Header, Container , Footer} from "./Components/indexComp";
import { Home,AboutP,SkillsP,ProjectsP,Project1P,Project2P,Project3P,ContactP } from "./Components/Pages/indexPages";
function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutP/>}/>
            <Route path="/skills" element={<SkillsP/>}/>
            <Route path="/projects" element={<ProjectsP/>}/>
            <Route path="/project1" element={<Project1P/>}/>
            <Route path="/project2" element={<Project2P/>}/>
            <Route path="/project3" element={<Project3P/>}/>
            <Route path="/contact" element={<ContactP/>}/>
          </Routes>
        </Container>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
