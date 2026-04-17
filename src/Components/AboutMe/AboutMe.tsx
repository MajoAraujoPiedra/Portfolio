import { useState } from "react"
import "./AboutMe.css"


function AboutMe() {
  const [open, setOpen] = useState(false)
  const [educationOpen, setEducationOpen] = useState(false)

  return (
    <div className="MainConteinerMe">
      <div className="MainAboutMe">
        <h2 className="TitleMe">About <br />Me </h2> 
        <h5 className="SubtitleMe">Welcome to my Portfolio!</h5>
        <div className="AboutMeP">
          Aca vas a encontrar mi trabajo, mi experiencia y la historia detrás de cómo construí este espacio desde cero.
          <br />
          Pero primero, un poco sobre mí:
          <br />
          Nací en un pequeño pueblo de Uruguay y siempre me describieron como curiosa, el tipo de persona <br />
          que no solo valora el conocimiento, sino que realmente disfruta el proceso de aprender. <br />
          Con los años descubrí mi pasión por crear: convertir ideas en algo real, <br />
          resolver problemas y experimentar la satisfacción silenciosa que nace del trabajo bien hecho.
          <br />
          Esa pasión me llevó a trabajar como Support Engineer, navegando herramientas y desafíos complejos, <br />
          y también como desarrolladora ayudando a marcas a dar vida a sus ideas, <br />
          transformando obstáculos en soluciones y visiones en productos terminados de los que se sienten orgullosos.
          <br />
          Estoy acá porque amo construir. Y me encantaría mostrarte cómo lo hago.
        </div>
        <div className="ConteinerButtonOpen">
          <button className="ButtonMain" onClick={() => setOpen(!open)}>
            {open ? "See Less" : "See More"}
          </button>
        </div>
      </div>
      <div className={`PopUpMain ${open ? "open" : ""}`}>
        <div className="OpenMainContainer">
          <div className="PopUpDescription">Mi camino profesional me llevo a desempeñarme como Ingeniera en Soporte a Desarrolladora Frontend, <br /> combinando el pensamiento analitico con creatividad para poder solucionar problemas</div>
          <div className="PopUpSupport">
            <div className="SupportDate">2023-2024</div>
            <div className="SupportName">Ingeniera en Soporte</div>
            <div className="SupportDetails">Microsoft Power Apps(TCS)</div>
            <ul className="SupportList">
              <li>Soporte técnico avanzado para aplicaciones <br /> empresariales en Microsoft Power Platform.</li>
              <li>Resolución de incidentes críticos mediante <br /> troubleshooting, análisis de logs y debugging en JavaScript.</li>
              <li>Extracción y análisis de datos <br /> utilizando SQL en herramientas internas.</li>
              <li>Integración con bases de datos <br /> personalizadas y entornos on-premise.</li>
              <li>Gestión de altos volúmenes de tickets<br /> en simultáneo, cumpliendo SLAs exigentes.</li>
            </ul>
          </div>
          <div className="PopUpPuma">
            <div className="PumaDate">2024-2025</div>
            <div className="PumaName">IT Operations</div>
            <div className="PumaDetails">Puma Energy(TCS)</div>
            <ul className="PumaList">
              <li>Soporte IT global para usuarios <br /> en regiones EMEA, APAC y Américas, <br /> resolviendo incidentes de alta severidad.</li>
              <li>Gestión de colas de tickets: priorización, <br /> asignación y seguimiento de casos.</li>
              <li>Ejecución de procesos batch (job queues) <br /> y publicaciones diarias en bases de <br /> datos con alto nivel de autonomía.</li>
            </ul>
          </div>
          <div className="PopUpOna">
            <div className="OnaDate">2024-Presente</div>
            <div className="OnaName">Frontend Ecommerce</div>
            <div className="OnaDetails">Ona Digital Studio(Freelance)</div>
            <ul className="OnaList">
              <li>Desarrollo y personalización de tiendas <br /> Shopify utilizando JavaScript, <br /> Liquid, HTML y CSS.</li>
              <li>Implementación de mejoras de performance <br /> y experiencia de usuario.</li>
              <li>Integración y ajuste de aplicaciones <br /> de terceros según necesidades del negocio.</li>
              <li>Creación de datalayers personalizados <br /> e implementación de Google Analytics.</li>
              <li>Adaptación a wireframes de UX/UI y <br /> requerimientos específicos de cada cliente.</li>
            </ul>
          </div>
          {open && (
          <div className="PopUpButtonConteiner">
            <button className="PopUpButtonClose" onClick={() => setOpen(false)}>See Less</button>
          </div>
        )}
        </div>
      </div>
      </div>
  )
}

export default AboutMe