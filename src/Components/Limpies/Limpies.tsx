import { useState } from "react";
import "./Limpies.css";

function Limpies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <div className="LimpiesMain">
          <div className="FrameOneLimpies">
            <h1 className="LimpiesTitle">Limpies</h1>
            <h4 className="LimpiesSubtitle">E-commerce platform built with Shopify</h4>
            <h6 className="LimpiesInfo">Rol: Desarrolladora Frontend / Shopify <br />
              Tecnologías: Shopify (Liquid), JavaScript, HTML, CSS, Figma</h6>
            <img className="LimpiesImg" src="\Materials\Limpies.png" alt="" />
          </div>
          <div className="FrameTwoLimpies">
          <div className="dropdownLimpies">
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
                    <ul className="Lista">
                      <li>Desarrollé la estructura y layout de la home page, participando tanto en <br /> la definición de la UI como en su implementación</li>
                      <li>Implementé secciones custom utilizando Liquid y JavaScript</li>
                      <li>Construí las páginas de categorías/listado de productos</li>
                      <li>Personalicé un tema base de Shopify según las necesidades del proyecto</li>
                      <li>Participé en reuniones con el cliente, iterando sobre feedback constante</li>
                      <li>Realicé carga y organización de productos</li>
                      <li>Identifiqué y resolví problemas de performance, mejorando los tiempos de carga</li>
                    </ul>
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
                    El proyecto comenzó sin una visión completamente definida por parte del cliente, <br />lo que implicó trabajar de manera iterativa y adaptativa durante todo el proceso.<br />
                    Esto implicó:
                  </div>
                  <ul className="Lista">
                    <li>Diseñar y desarrollar en paralelo</li>
                    <li>Adaptarse a cambios constantes</li>
                    <li>Tomar decisiones técnicas con requerimientos poco definidos</li>
                  </ul>
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
                  Luego de aproximadamente 3 meses de trabajo, se logró llevar el proyecto a producción.
                  </div>
                  <ul className="Lista">
                    <li>Se entregó una tienda funcional basada en Shopify</li>
                    <li>Se transformó una idea inicial poco definida en un producto concreto</li>
                    <li>Se logró equilibrar decisiones técnicas con cambios constantes de diseño</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <img className="LimpiesBanner" src="\Materials\LimpiesBanner.png" alt="" />
        </div>
      </div>
  );
}

export default Limpies;