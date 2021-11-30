
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path={`/project/:projectId`} element={<ProjectDetails></ProjectDetails>}></Route>
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
