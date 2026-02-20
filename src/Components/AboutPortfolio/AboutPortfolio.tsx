import './AboutPortfolio.css'
import { Link } from "react-router-dom";

function AboutPortfolio() {
  return (
    <div className='ThisPortfolio'>
      <div className='PortfolioHero'>
        <img className='PortfolioBanner' src="/Materials/ThisPortfolioBanner.jpeg" alt="" />
        <p>This portfolio showcases my work across multiple areas and skills. <br />
          From building the foundations with React and TypeScript to designing the experience in Figma, every step was crafted and developed solely by me. <br />
          Explore each section to discover the process behind every decision.</p>
      </div>
      <div className='PortfolioBody'>
      </div>
      <Link className='LinkHome' to="/">
        <img className='BackButton' src="/Materials/BackHome.png" alt="" />
      </Link>
      <img className='BackButton' src="/Materials/BackHome.png" alt="" />
    </div>
  )
}
export default AboutPortfolio;