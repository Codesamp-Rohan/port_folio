import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import { useState } from "react";
import Project from "./Pages/Project";
import WorkTogether from "./Components/WorkTogether";
import P2P from "./Pages/P2P";

const App = () => {
  const [loading, setLoading] = useState(false);

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <Router basename="/">
      <Loader loading={loading}/>
      <Navbar setLoading={setLoading}/>

      <Routes>
        <Route path="/" element={<Home setLoading={setLoading} />} />
        <Route path="/about" element={<About setLoading={setLoading}/>} />
        {/* <Route path="/services" element={<Services setLoading={setLoading}/>} /> */}
        <Route path="/peer2peer" element={<P2P setLoading={setLoading}/>} />
        <Route path="/projects" element={<Project setLoading={setLoading}/>} />
        {/* <Route path="/contact" element={<Contact setLoading={setLoading}/>} /> */}
      </Routes>
      <WorkTogether />
      <Footer setLoading={setLoading}/>
    </Router>
  );
};

export default App;
