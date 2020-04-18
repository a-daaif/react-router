import React from "react";
import logo from "./logo.svg";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Apropos from "./components/Apropos.jsx";
import Blog from "./components/Blog.jsx";
import Article from "./components/Article.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/apropos" component={Apropos} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" component={Article} />
      </Router>
    </div>
  );
}

export default App;
