import './Nav.css'

function Nav() {
  return (
    <div className="NavOptions">
      <div className='SobreMi'>
        <a href="#about"><img className='SobreMiimg' src="/Materials/Sobremi.jpeg" alt="" /></a>
      </div>
      <div className='EstudioDeCasos'>
        <a href="#CaseStudy"><img className='EstudioDeCasosimg' src="/Materials/EstudioDeCasos.jpeg" alt="" /></a>
      </div>
      <div className='Contacto'>
        <a href="#contact"><img className='ContactoImg' src="/Materials/Contacto.jpeg" alt="" /></a>
      </div>
    </div>
  )
}
export default Nav;
