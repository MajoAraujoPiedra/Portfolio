import Hero from "./Components/Hero/Hero";
import Footer from "./Layout/Footer/Footer";
import AboutMe from "./Components/AboutMe/AboutMe";
import Limpies from "./Components/Limpies/Limpies";
import Ona from "./Components/Ona/Ona";
import ThisPortfolio from "./Components/ThisPortfolio/ThisPortfolio";
import Support from "./Components/Support/Support";
import './App.css'


function HomePage() {
  return (
    <div className="MainConteiner">
      <div className="Hero">{Hero()}</div>
      <div className="AboutMe">{AboutMe()}</div>
      <div className="Limpies">{Limpies()}</div>
      <div className="Ona">{Ona()}</div>
      <div className="ThisPortfolio">{ThisPortfolio()}</div>
      <div className="Support">{Support()}</div>
      <div className="Footer">{Footer()}</div>
    </div>
  )
}
export default HomePage;
