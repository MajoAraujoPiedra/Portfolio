import { useState } from "react";
import "./ThisPortfolio.css";

function ThisPortfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="CaseStudy">
      <div className="PortfolioMain">
          <div className="FrameOnePortfolio">
            <img className="PortfolioIMG" src="\Materials\AboutThisPortfolio.jpeg" alt="" />
            <h4 className="PortfolioSubtitle">Portfolio personal diseñado y desarrollado desde cero</h4>
            <h6 className="PortfolioInfo">Rol: Diseño UX/UI y Desarrollo Frontend<br />
              Tecnologías: Vite, TypeScript, HTML, CSS, Figma, GitHub</h6>
            <img className="PortfolioImg" src="\Materials\PortfolioImg.png" alt="" />
          </div>
          <div className="FrameTwoPortfolio">
          <div className="dropdown">
            {/* ITEM 1 */}
            <div className={`dropdown-item ${openIndex === 0 ? "open" : ""}`}>
              <div
                className="dropdown-header"
                onClick={() => toggleItem(0)}>
                <div className="dropdown-label">Que hice</div>
                <div className="dropdown-icon">
                <svg width="280" height="279" viewBox="0 0 280 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.54 144.54V134.12H223.5C202.91 129.99 186.78 122.88 174.42 112.15L242.29 44.5L234.9 37.13L167.03 104.78C156.26 92.47 149.13 76.38 144.99 55.86V0H134.54V61.74C130.18 79.85 123.24 94.26 113.19 105.47L44.63 37.13L37.24 44.5L105.72 112.76C93.46 123.16 77.55 130.07 57.34 134.13H0V144.55H63.24C81.04 148.81 95.27 155.53 106.42 165.22L37.24 234.18L44.63 241.55L113.81 172.59C123.53 183.7 130.27 197.89 134.54 215.63V278.67H144.99V221.51C149.05 201.37 155.99 185.51 166.42 173.29L234.9 241.55L242.29 234.18L173.73 165.84C184.98 155.83 199.43 148.9 217.6 144.56H279.54V144.54Z" fill="#0044FF"/>
                </svg>
              </div>
              </div>
              <div
                className={`dropdown-content ${openIndex === 0 ? "open" : ""}`}>
                <div className="mainconteiner">
                  <div className="text">
                    <p> - Diseñé la experiencia completa del portfolio (UX/UI) desde cero <br />
                        - Desarrollé el sitio utilizando Vite y TypeScript <br />
                        - Estructuré los proyectos como casos de estudio, priorizando claridad y narrativa <br />
                        - Iteré el diseño a lo largo del proceso utilizando Figma <br />
                        - Implementé estilos y layout completamente custom <br />
                        - Gestioné el versionado y deploy utilizando GitHub</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ITEM 2 */}
            <div className={`dropdown-item ${openIndex === 0 ? "open" : ""}`}>
              <div
                className="dropdown-header"
                onClick={() => toggleItem(1)}>
                <div className="dropdown-label">Desafio</div>
                <div className="dropdown-icon">
                <svg width="280" height="279" viewBox="0 0 280 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.54 144.54V134.12H223.5C202.91 129.99 186.78 122.88 174.42 112.15L242.29 44.5L234.9 37.13L167.03 104.78C156.26 92.47 149.13 76.38 144.99 55.86V0H134.54V61.74C130.18 79.85 123.24 94.26 113.19 105.47L44.63 37.13L37.24 44.5L105.72 112.76C93.46 123.16 77.55 130.07 57.34 134.13H0V144.55H63.24C81.04 148.81 95.27 155.53 106.42 165.22L37.24 234.18L44.63 241.55L113.81 172.59C123.53 183.7 130.27 197.89 134.54 215.63V278.67H144.99V221.51C149.05 201.37 155.99 185.51 166.42 173.29L234.9 241.55L242.29 234.18L173.73 165.84C184.98 155.83 199.43 148.9 217.6 144.56H279.54V144.54Z" fill="#0044FF"/>
                </svg>
              </div>
              </div>
              <div
                className={`dropdown-content ${openIndex === 1 ? "open" : ""}`}>
                <div className="mainconteiner">
                  <div className="text">
                    <p>El desafío principal fue construir una plataforma que no solo muestre proyectos, <br /> sino que también comunique cómo trabajo y cómo pienso cada solución.
                      Esto implicó: <br />
                      - Diseñar una identidad visual propia <br />
                      - Definir la estructura narrativa de los proyectos <br />
                      - Balancear estética con claridad de contenido</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ITEM 3 */}
            <div className={`dropdown-item ${openIndex === 0 ? "open" : ""}`}>
              <div
                className="dropdown-header"
                onClick={() => toggleItem(2)}>
                <div className="dropdown-label">Resultado</div>
                <div className="dropdown-icon">
                <svg width="280" height="279" viewBox="0 0 280 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.54 144.54V134.12H223.5C202.91 129.99 186.78 122.88 174.42 112.15L242.29 44.5L234.9 37.13L167.03 104.78C156.26 92.47 149.13 76.38 144.99 55.86V0H134.54V61.74C130.18 79.85 123.24 94.26 113.19 105.47L44.63 37.13L37.24 44.5L105.72 112.76C93.46 123.16 77.55 130.07 57.34 134.13H0V144.55H63.24C81.04 148.81 95.27 155.53 106.42 165.22L37.24 234.18L44.63 241.55L113.81 172.59C123.53 183.7 130.27 197.89 134.54 215.63V278.67H144.99V221.51C149.05 201.37 155.99 185.51 166.42 173.29L234.9 241.55L242.29 234.18L173.73 165.84C184.98 155.83 199.43 148.9 217.6 144.56H279.54V144.54Z" fill="#0044FF"/>
                </svg>
              </div>
              </div>
              <div
                className={`dropdown-content ${openIndex === 2 ? "open" : ""}`}>
                <div className="mainconteiner">
                  <div className="text">
                    <p>Luego de aproximadamente 1 mes de trabajo, logré construir un portfolio funcional que refleja tanto <br /> mis habilidades técnicas como mi forma de abordar problemas.
                      - Plataforma clara y navegable
                      - Presentación estructurada de proyectos
                      - Identidad visual propia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="https://github.com/MajoAraujoPiedra/Portfolio">
            <img className="GitRepository" src="\Materials\GitRepository.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ThisPortfolio;