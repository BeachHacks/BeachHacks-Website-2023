import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidenav from './components/SideNavbar/SideNavbar';
import About from "./Pages/About";
import Home from "./Pages/Home";
import Sponsors from "./Pages/Sponsors";
import FAQ from "./Pages/FAQ";

function App() {
  return (
    <div className="App">
      <Sidenav/>
      <main>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />}/>
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      </main>
     
    </div>
  );
}

export default App;