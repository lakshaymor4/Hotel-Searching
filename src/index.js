import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Gs from "./pages/getstart";
import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import CardDeta from "./pages/card_de";

ReactDOM.render(
  <Router>
    <Routes>
        <Route exact path="/" element={<Gs />} />
        <Route path="/property/:index" element={<CardDeta />} />
      </Routes>
  </Router>,
  document.getElementById("root")
);
