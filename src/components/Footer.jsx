import gitHubLogo from '../assets/GitHub-logo.png'

const Footer = () => {
  return (
    <div className="footer" aria-label="GitHub logo">
      <div className="footer-content">
        <img src={gitHubLogo} alt="GitHub Logo" className="footer-logo" />
        <a href="https://github.com/Joheri1" aria-label="Link to Johanna's GitHub account" target="_blank" rel="noopener noreferrer">
          Joheri1
        </a>
      </div>
      <div className="footer-copyright">
        <h3>© 2024 Copyright - Developed by Johanna Eriksson</h3>
      </div>
    </div>
  )
}

export default Footer