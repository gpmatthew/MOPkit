import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ComponentList from "./pages/ComponentList";
import './sass/app.css';
import './js/main.js';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/component-list" element={<ComponentList />} />
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
