import Hero from "./Components/Hero/Hero";
import Footer from "./Layout/Footer/Footer";
import AboutMe from "./Components/AboutMe/AboutMe";
import CaseStudy from "./Components/CaseStudy/CaseStudy";
import './App.css'


function HomePage() {
  return (
    <div className="MainConteiner">
      <div className="Hero">{Hero()}</div>
      <div className="Information">
        <div className="AboutMe">{AboutMe()}</div>
        <div className="CaseStudy">{CaseStudy()}</div>
      </div>
      <div className="Footer">{Footer()}</div>
    </div>
  )
}
export default HomePage;
