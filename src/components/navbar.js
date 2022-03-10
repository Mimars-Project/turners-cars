import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/images/turners-3.png' alt='Turners Logo' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/check-vehicle' className='nav-links' onClick={closeMobileMenu}>
                Check Vehicle
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                Search
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/ux-design' className='nav-links' onClick={closeMobileMenu}>
                UX Template
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar