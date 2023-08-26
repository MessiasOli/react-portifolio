import { useEffect } from "react"
import "./header.css"
import HeaderImage from "../../assets/header.jpg"
import data from "./data"
import AOS from 'aos'
import 'aos/dist/aos.css'

function Header() {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in" data-aos-anchor-placement="top-center">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Hajia Bintu</h3>
        <p data-aos="fade-up">
          You are a click aaway from building your dream website or web app. Send me the details of you project form a modern, mobile responsive, higly performance website today!
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => {
              return <a key={item.id} 
                        href={item.link} 
                        target="_blank"
                        rel="noopener noreferrer">
                          {item.icon}
                        </a>
            })
          }
        </div>
      </div>
    </header>
  )
}

export default Header