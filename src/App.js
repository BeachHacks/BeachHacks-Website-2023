import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Workshop from "./pages/Workshop/Workshop";
import Team from "./pages/Team/Team";
import Spotify from "./pages/Spotify/Spotify";
import Apply from "./pages/Apply/Apply";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='workshop' element={<Workshop />} />
        <Route path='team' element={<Team />} />
        <Route path='spotify' element={<Spotify />} />
        <Route path='apply' element={<Apply />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  );
}
export default App;
