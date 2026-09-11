import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Dashboard from "./components/Pages/Dashboard";

function App() {
  return (
    <>
      <Header />
      <main className="flex-shrink-0">
        <Router basename="/uatmioot/uidesign/React/CVUAE_Form/form2/">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
