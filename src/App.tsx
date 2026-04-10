import './App.css'
import HomePage from './HomePage'
import { Routes, Route } from "react-router-dom";
import CaseStudy from './Components/CaseStudy/CaseStudy';

function App() {
  return (      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study" element={<CaseStudy />} />
      </Routes>)
}

export default App
