import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAVBAR from "./pages/navbar";
import HOME from "./pages/home";
import ABOUT from "./pages/about";
import DISPLAY from "./pages/display";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <NAVBAR />
        <Routes>
          <Route exact path="/" element={<HOME />}></Route>
          <Route exact path="/about" element={<ABOUT />}></Route>
          <Route exact path="/display" element={<DISPLAY />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
