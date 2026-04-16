import { useState } from "react";
import "./Support.css";

function Support() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="CaseStudy">
      <div className="SupportMain">
        <div className="FrameOneSupport">
            <h1 className="SupportTtitle">Support Engineer</h1>
            <h4 className="SupportSubtitle">Soporte avanzado para aplicaciones empresariales en Microsoft Power Apps</h4>
            <h6 className="SupportInfo">Rol: Support Engineer <br />
              Tecnologías: Microsoft Power Apps, JavaScript, SQL, herramientas internas de monitoreo y logging</h6>
            <div className="MyRole">
              <h3>Que Hice</h3>
              <p>- Realicé troubleshooting en vivo en entornos productivos <br />
                - Analicé logs y código (JavaScript) para detectar errores<br />
                - Utilicé SQL para investigar datos y comportamientos del sistema<br />
                - Trabajé con integraciones complejas y entornos on-premise<br />
                - Monitoreé y optimicé performance en situaciones críticas<br />
                - Gestioné múltiples incidencias simultáneamente priorizando impacto</p>
            </div>
          </div>
          <div className="FrameTwoPortfolio">
          <div className="PortfolioStudy">
            <h3>Caso de estudio</h3>
            <p> Durante una guardia on-call, una empresa enterprise perdió el  <br />acceso a su entorno de producción un domingo, afectando operaciones críticas.</p>
          </div>
          <div className="dropdownSupport">
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
                    <p>  El sistema presentaba problemas severos de performance (throttling), <br /> generados por una gran cantidad de requests mal estructuradas que saturaban el servidor.</p>
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
                    <p> Realicé el scoping en vivo junto al cliente mientras analizaba el sistema, <br /> utilizando consultas SQL y herramientas internas para identificar la causa raíz. <br />
                        Detecté una acumulación masiva de requests en cola que estaban degradando <br /> completamente la performance.</p>
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
                    <p>Dado que no era viable detener las requests en ese momento, <br /> tomé la decisión de escalar temporalmente la infraestructura, <br /> aumentando la cantidad de servidores disponibles para absorber <br /> la carga y permitir la continuidad del servicio.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;