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
import Our_Team from "./Pages/Our_Team";
import Spotify from "./Pages/Spotify";
import Schedule from "./Pages/Schedule";

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
        <Route path="/our team" element={<Our_Team />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      </main>
     
    </div>
  );
}

export default App;