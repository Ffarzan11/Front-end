import Home from "./home/Home";
import Header from "./Header";
import React from "react";
import '../components/home/index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./Explore";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
            <Route path = "/" exact element={<Home/>}/>
            <Route path = "/explore" exact element = {<Explore/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
