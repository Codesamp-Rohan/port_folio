import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <Router>
      <Loader loading={loading}/>
      <Navbar setLoading={setLoading}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer setLoading={setLoading}/>
    </Router>
  );
};

export default App;
