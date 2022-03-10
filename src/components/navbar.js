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
              <Link to='/buy' className='nav-links' onClick={closeMobileMenu}>
                BUY
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/sell' className='nav-links' onClick={closeMobileMenu}>
                SELL
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/ux-design' className='nav-links' onClick={closeMobileMenu}>
                INSURANCE
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                ABOUT
              </Link>
            </li>
          </ul>
          <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Vector" d="M13.4599 9.31633L13.3746 9.41481L13.4918 9.47172C16.7631 11.0611 18.9 14.473 18.9 18.2963C18.9 18.6337 18.6381 18.9 18.3214 18.9H0.678571C0.362561 18.9 0.1 18.6336 0.1 18.2963C0.1 15.4746 1.27667 12.794 3.32822 10.9401C3.56881 10.7229 3.93256 10.7487 4.14207 10.9984L4.14209 10.9984C4.35417 11.2511 4.32844 11.6338 4.08585 11.8528L4.08579 11.8529C2.4616 13.3214 1.46371 15.379 1.28597 17.5846L1.27726 17.6926H1.38564H17.615H17.7233L17.7147 17.5846C17.4533 14.3082 15.3977 11.4726 12.4088 10.3048L12.361 10.2861L12.3179 10.3141C11.4984 10.8468 10.5346 11.1593 9.5 11.1593C6.56545 11.1593 4.17143 8.6819 4.17143 5.62963C4.17143 2.57736 6.56545 0.1 9.5 0.1C12.4346 0.1 14.8286 2.57736 14.8286 5.62963C14.8286 7.04662 14.3078 8.3367 13.4599 9.31633ZM9.5 1.30741C7.19598 1.30741 5.32857 3.2493 5.32857 5.62963C5.32857 8.00995 7.19598 9.95185 9.5 9.95185C11.804 9.95185 13.6714 8.00995 13.6714 5.62963C13.6714 3.2493 11.804 1.30741 9.5 1.30741Z" fill="#FEFEFE" stroke="#FEFEFE" stroke-width="0.2"/>
            </svg>
          </Link>
          <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.8208 15.6927L13.2544 12.1263C13.0761 11.8291 13.195 11.5913 13.195 11.5913L13.2544 11.4724C15.5131 8.26262 14.9187 3.92346 11.8278 1.4864C8.79636 -0.772341 4.4572 -0.415697 1.90125 2.37801C0.593559 3.86402 -0.119728 5.76612 -0.000846609 7.72766C0.118035 9.74864 1.00964 11.5319 2.5551 12.8395C4.57608 14.5633 7.31034 15.0388 9.80685 14.0878C10.0446 13.9689 10.2229 13.7906 10.2824 13.5528C10.3418 13.3151 10.2824 13.0179 10.104 12.8395C9.86629 12.6018 9.56909 12.5423 9.27188 12.6612C8.26139 13.0179 7.13202 13.0773 6.06209 12.899C3.74391 12.4235 1.96069 10.5214 1.60405 8.20318C1.30685 6.30108 1.90125 4.45843 3.26838 3.15074C4.57608 1.84304 6.47818 1.24864 8.32083 1.54584C10.639 1.90248 12.4817 3.74514 12.9572 6.00388C13.3138 7.7871 12.8978 9.62976 11.7089 10.9969C11.2334 11.5319 11.2929 12.364 11.7684 12.8395L15.632 16.7032C15.7509 16.8221 15.9887 16.9409 16.167 16.9409C16.3453 16.9409 16.5831 16.8815 16.702 16.7032C17.0586 16.4654 17.0586 15.9899 16.8208 15.6927Z" fill="#FEFEFE"/>
            </svg>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar