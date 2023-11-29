import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
