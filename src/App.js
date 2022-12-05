import "./App.css";
import About from "./views/About/About";
import Apply from "./views/Apply/Apply";
import Sponsors from "./views/Sponsors/Sponsors";

function App() {
  // return <h1>Home Page</h1>;
  return (
    <div className="App">
      <About/>
      <Apply/>
      <Sponsors/>
    </div>
  )
}

export default App;
