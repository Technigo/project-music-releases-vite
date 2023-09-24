// Import SVG file for logo and the CSS file for this component to apply styles.
import logo from "../../../public/technigo-logo.svg"

import "./Footer.css"

// Define the Footer component as a functional component.
export const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <p>Anna Robertsson, 2023 | Web Development student at
          <a href="https://www.technigo.io" target="_blank" title="Technigo" rel="noreferrer">
            <img src={logo} alt="Technigo logo"/>
          </a>
        </p>
      </div>
      <address className="contact">
        <a href="https://www.linkedin.com/in/anna-robertsson-829967272/" target="_blank" title="Anna's LinkedIn" rel="noreferrer"><i
          className="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/AnnaRobertsson" target="_blank" title="Anna's GitHub" rel="noreferrer"><i
          className="fa-brands fa-github"></i></a>
        <a href="mailto:robertsson_anna@hotmail.com" target="_blank" title="Anna's e-mail" rel="noreferrer"><i
          className="fa-solid fa-envelope"></i></a>
      </address>
    </div>
  )
}