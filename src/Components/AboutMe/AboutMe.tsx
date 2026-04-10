import { useState } from "react"
import "./AboutMe.css"


function AboutMe() {
  const [open, setOpen] = useState(false)
  const [educationOpen, setEducationOpen] = useState(false)

  return (
    <section id="about" className="about-wrapper">
    <div className="about-banner">
      <h2>About <br />Me </h2> 
      <h5>Welcome to my Portfolio!</h5>

      <p>
        Here you’ll find my work, my experience, and the story behind how I built this space from scratch.
        <br />
        But first, a little about me:
        <br />
        I was born in a small town in Uruguay and was always described as curious, the kind of person <br /> 
        who not only values knowledge, but truly enjoys the process of learning. <br /> 
        Over the years, I discovered my passion for creating: turning ideas into something real, <br /> 
        solving problems, and experiencing the quiet satisfaction that comes from hard work well done.
        <br />
        That passion has led me to work as a Support Engineer, navigating complex tools and challenges, <br /> 
        and also as a consultant helping brands bring their ideas to life, <br /> 
        transforming obstacles into solutions and visions into finished products they’re proud of.
        <br />
        I’m here because I love building. And I’d love to show you how I do it.
      </p>
      <button
        className="about-cta"
        onClick={() => setOpen(!open)}
      >
        {open ? "See Less" : "See More"}
      </button>
    </div>
    <div className={`about-panel ${open ? "open" : ""}`}>
      <div className="OpenMainContainer">
          <img
            className="EducationButton"
            src="./Materials/MyEducation.png"
            alt=""
          />
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setEducationOpen(true)
        }}
      >
      </div>
      {educationOpen && (
        <div
          className="education-overlay"
          onClick={() => setEducationOpen(false)}>
          <div
            className="education-modal"
            onClick={(e) => e.stopPropagation()}
          ></div>
        </div>
      )}
      {open && (
          <button
            className="about-panel-close"
            onClick={() => setOpen(false)}
          >
            See Less
          </button>
      )}
    </div>
    </section>
  )
}

export default AboutMe