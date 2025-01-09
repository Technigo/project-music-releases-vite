import spookifyLogo from '../assets/spookify_logo.png'

const Header = () => {
  return (
    <div className="header" aria-label="Spookify header">
      <img src={spookifyLogo} alt="Spookify Logo" className="header-logo" />
      <h1>Spookify</h1>
    </div>
  )
}

export default Header
  