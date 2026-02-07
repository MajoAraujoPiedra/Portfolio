import Nav from "../Layout/Nav";

function Hero() {
  return (
    <div className="HeroContainer">
        <div className="Nav">{Nav()}</div>
        <div className="Banner"> 
            <h1>MARIA JOSE ARAUJO </h1>
        </div>
    </div>

  )
}
export default Hero;