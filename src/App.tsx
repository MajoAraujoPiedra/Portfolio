import './App.css'
import HomePage from './HomePage'
import { Routes, Route } from "react-router-dom";
import AboutPortfolio from "./Components/AboutPortfolio/AboutPortfolio";
import CaseStudy from './Components/CaseStudy/CaseStudy';

function App() {
  return (      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/About-this-portfolio" element={<AboutPortfolio />} />
      </Routes>)
}

export default App
