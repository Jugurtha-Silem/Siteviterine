import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFund from "./pages/NotFund";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/project1" element={< Project1/>}/>
        <Route path="/project2" element={< Project2/>}/>
        <Route path="/project3" element={< Project3/>}/>
        <Route path="/project4" element={< Project4/>}/>
        <Route path="/contact" element={< Contact/>}/>
        <Route path="*" element={< NotFund/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
