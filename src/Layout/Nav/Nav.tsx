import './Nav.css'

function Nav() {
  return (
    <div className="NavOptions">
      <div className='SobreMi'>
        <a href="#about">ABOUT ME</a>
      </div>
      <div className='EstudioDeCasos'>
        <a href="#CaseStudy">CASE STUDY</a>
      </div>
      <div className='Contacto'>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  )
}
export default Nav;
