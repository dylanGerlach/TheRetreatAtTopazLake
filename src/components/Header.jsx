import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="12" width="6" height="12" fill="currentColor" opacity="0.8"/>
            <rect x="14" y="8" width="6" height="16" fill="currentColor"/>
            <rect x="22" y="4" width="6" height="20" fill="currentColor" opacity="0.6"/>
          </svg>
          <span>TOPAZ</span>
        </div>
        
        <nav className="nav">
          <button className="menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
