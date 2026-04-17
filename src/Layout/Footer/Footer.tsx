import './Footer.css'

function Footer() {
  return (
    <>
      <div className='FooterMain'>
        <div className='TitleConteinerFooter'>
          <div className='SubtitleFooter'>Te queda alguna duda?</div>
          <div className='TitleFooter'>Charlemos!</div>
        </div>
        <div className='LinkConteinerFooter'>
          <a className='Linkedin' href="https://www.linkedin.com/in/mar%C3%ADa-jos%C3%A9-ara%C3%BAjo/"><img className='LinkedinLogo' src="\Materials\Linkedin.png" alt="" /></a>
          <a className='Email' href="mailto:mariajosearaujopiedra@gmail.com"><img className='EmailLogo' src="\Materials\Email.png" alt="" /></a>
        </div>
      </div>
    </>
  )
}

export default Footer;