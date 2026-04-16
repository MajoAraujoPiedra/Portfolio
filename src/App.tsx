import './App.css'
import HomePage from './HomePage'
import { Routes, Route } from "react-router-dom";

function App() {
  return (      
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>)
}

export default App
