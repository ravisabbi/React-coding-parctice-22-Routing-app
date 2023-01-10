// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-section">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <p className="wave-heading">Wave</p>
    </div>
    <ul className="nav-items-list">
      <li>
        <Link className="nav-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="nav-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
