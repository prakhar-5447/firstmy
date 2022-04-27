import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAVBAR from "./pages/navbar";
import HOME from "./pages/home";
import ABOUT from "./pages/about";
import DISPLAY from "./pages/display";
// import SIGNUP from "./pages/signup";
import LOGIN from "./pages/login";
import CHILD from "./pages/child";
import ORGLIST from "./pages/orglist";
import "bootstrap/dist/css/bootstrap.min.css";
import Org from "./context/orgContext";

function App() {
  return (
    <>
      <Org>
        <Router>
          <NAVBAR />
          <Routes>
            <Route exact path="/" element={<HOME />}></Route>
            <Route exact path="/about" element={<ABOUT />}></Route>
            <Route exact path="/display" element={<DISPLAY />}></Route>
            <Route exact path="/orglist" element={<ORGLIST />}></Route>
            {/* <Route exact path="/signup" element={<SIGNUP />}></Route> */}
            <Route exact path="/login" element={< LOGIN />}></Route>
            <Route exact path="/display/child" element={< CHILD />}></Route>
          </Routes>
        </Router>
      </Org>
    </>
  );
}

export default App;
