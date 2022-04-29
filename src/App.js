import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NAVBAR from "./pages/navbar";
import HOME from "./pages/home";
import ABOUT from "./pages/about";
import DISPLAY from "./pages/display";
import LOGIN from "./pages/login";
import SIGNUP from "./pages/signup";
import CHILD from "./pages/child";
import ORGLIST from "./pages/orglist";
import Org from "./context/orgContext";
import ADMIN from "./pages/admin";
import DONATE from "./pages/donate";

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
            <Route exact path="/signup" element={<SIGNUP />}></Route>
            <Route exact path="/login" element={< LOGIN />}></Route>
            <Route exact path="/admin" element={< ADMIN />}></Route>
            <Route exact path="/display/child" element={< CHILD />}></Route>
            <Route exact path="/donate" element={< DONATE />}></Route>
          </Routes>
        </Router>
      </Org>
    </>
  );
}

export default App;
