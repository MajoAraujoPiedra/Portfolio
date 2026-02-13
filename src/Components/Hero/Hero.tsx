import Nav from "../../Layout/Nav/Nav";
import './Hero.css'

function Hero() {
  return (
    <div className="HeroContainer">
        <div className="Nav">{Nav()}</div>
        <div className="Banner"> 
          <div className="Name">MARIA JOSE ARAUJO</div>
        </div>
    </div>
  )
}
export default Hero;