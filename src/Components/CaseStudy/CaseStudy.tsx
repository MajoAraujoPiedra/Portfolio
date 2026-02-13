import './CaseStudy.css'

  const cases = [
    {
      link: "/project-1",
      images: ["/Materials/Star.gif", "/Materials/Star.gif", "/Materials/Star.gif"],
    },
    {
      link: "/project-2",
      images: ["/Materials/Star.gif", "/Materials/Star.gif"],
    },
    {
      link: "/project-3",
      images: ["/Materials/Star.gif", "/Materials/Star.gif"],
    },
  ];

function CaseStudy() {
  return (
    <section id="CaseStudy">
      <div className='gallery'>
        {cases.map((c, i) => (
                <a key={i} href={c.link} className="case">
                  <div className="track">
                    {[...c.images, ...c.images].map((src, j) => (
                      <img key={j} src={src} />
                    ))}
                  </div>
                </a>
              ))}
      </div>
    </section>

  )
}
export default CaseStudy;