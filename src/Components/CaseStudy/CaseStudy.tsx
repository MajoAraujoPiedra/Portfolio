import './CaseStudy.css'
import { Carousel } from "react-bootstrap";
import { useState } from "react";

const folders = [
  { title: "My Role", content: <img src="./Materials/MyRoleBack.png" alt="" /> },
  { title: "Specific Case", content: <img src="./Materials/SpecificCase.png" alt="" /> },
];

function CaseStudy() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="CaseStudy">
      <div className='PortfolioBody'>
        <div className='Limpies'>
          <div className='LimpiesTitle'>Limpies</div>
          <div></div>
          <div className='CarruselLimpies'>
            <Carousel interval={null} indicators>
            <Carousel.Item>
              <img className='LimpiesInspo' src="./Materials/LimpiesInspo.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className='LimpiesHome' src="./Materials/LimpiesHome.png" alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className='LimpiesProduct' src="./Materials/LimpiesProduct.png" alt="" />
            </Carousel.Item>
          </Carousel>
          </div>
        </div>
        <div className='SupportEngineer'>
          <div className='SupportEngineerContent'>
            <div className='Title'>Support Engineer</div>
            <div id="about" className="foldersLayout">
              <div className="foldersColumn">
                {folders.map((folder, i) => (
                  <button
                    key={i}
                    className={`folderMini ${active === i ? "active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    {folder.title}
                  </button>
                ))}
              </div>
              <div className="folderPanel">
                {active !== null && (
                  <div className="panelContent">
                    <div>{folders[active].content}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='Portfolio'>
          <div className='PortfolioCarrusel'>
            <Carousel interval={null} indicators>
              <Carousel.Item>
                <img className='LimpiesHome' src="./Materials/LimpiesHome.png" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className='LimpiesProduct' src="./Materials/LimpiesProduct.png" alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className='LimpiesInspo' src="./Materials/LimpiesInspo.png" alt="" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>

  )
}
export default CaseStudy;