import { useState } from "react";
import "./Ona.css";

function Ona() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="CaseStudy">
      <div className="OnaMain">
        <div className="FrameOneOna">
            <h1 className="OnaTitle">Ona Digital Studio</h1>
            <h4 className="OnaSubtitle">Plataforma web para estudio digital multi-servicio</h4>
            <h6 className="OnaInfo">Rol: Desarrolladora Frontend / UX <br />
              Tecnologías: ReadyMag, HTML, CSS, JavaScript, Figma</h6>
            <img className="OnaImg" src="\Materials\OnaHome.gif" alt="" />
          </div>
          <div className="FrameTwoOna">
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
                    <p> - Desarrollé el sitio completo utilizando ReadyMag, extendiendo sus capacidades <br /> con HTML, CSS y JavaScript
                        - Trabajé en conjunto con el equipo de diseño, coordinando iteraciones desde Figma <br />
                        - Participé en instancias de planificación junto a la CEO, alineando visión y ejecución<br />
                        - Definí y ejecuté el UX del sitio de punta a punta<br />
                        - Implementé diferentes interfaces para desktop y mobile<br />
                        - Optimicé la performance del sitio</p>
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
                    <p>El proyecto implicó construir una presencia digital desde cero para una empresa en proceso de lanzamiento, <br /> alineando múltiples servicios en una experiencia clara y cohesiva.
                        Esto implicó: <br />
                        - Traducir una identidad en construcción a una interfaz consistente <br />
                        - Coordinar decisiones entre diseño, negocio y desarrollo <br />
                        - Diseñar para múltiples dispositivos (desktop y mobile)</p>
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
                    <p>Luego de aproximadamente 3 meses de trabajo, el sitio fue llevado a producción como parte <br /> del lanzamiento oficial del estudio.
                        - Se construyó una plataforma web alineada con la identidad del negocio <br />
                        - Se integraron múltiples servicios en una experiencia unificada <br />
                        - Se logró una solución funcional optimizada tanto en UX como en performance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="OnaBanner" src="\Materials\OnaBanner.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Ona;