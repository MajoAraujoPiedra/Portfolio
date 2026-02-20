import './Footer.css'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className='FooterMain'>
      <div id="contact">
      </div>
      <div className='AboutThisPortfolio'>
        <Link className='LinkFooter' to="/About-this-portfolio">
          <img className='AboutThisPortfolioImg' src="/Materials/AboutThisPortfolio.jpeg" alt="" />
        </Link>
      </div>
      <div className='Feedback'>
        <img className='FeedbackImg' src="/Materials/Feedback.png" alt="" />
      </div>
    </div>
  )
}
export default Footer;