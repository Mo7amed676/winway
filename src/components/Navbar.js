import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faBell, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

function Navbar() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <>
      <nav className="navbar">
        <img src="#" alt="Logo" />

        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
        />

        <ul className="navbar__links">
          <li><a href="/">Home</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/mentors">Mentors</a></li>
          <li><a href="/about-us">About Us</a></li>
        </ul>

        <div className="navbar__icons">
          <FontAwesomeIcon icon={faCartPlus} />
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
            <g clip-path="url(#clip0_0_4343)">
              <path d="M30.284 5.436C29.909 4.98592 29.4394 4.62393 28.9087 4.37575C28.378 4.12757 27.7992 3.99929 27.2133 4H5.656L5.6 3.532C5.4854 2.55922 5.01785 1.66231 4.28599 1.0113C3.55413 0.360298 2.60884 0.000455725 1.62933 0L1.33333 0C0.979711 0 0.640573 0.140476 0.390524 0.390524C0.140476 0.640573 0 0.979711 0 1.33333C0 1.68696 0.140476 2.02609 0.390524 2.27614C0.640573 2.52619 0.979711 2.66667 1.33333 2.66667H1.62933C1.95591 2.66671 2.27112 2.78661 2.51516 3.00362C2.75921 3.22063 2.91512 3.51967 2.95333 3.844L4.788 19.444C4.97847 21.0664 5.75797 22.5624 6.97854 23.648C8.19912 24.7337 9.77581 25.3334 11.4093 25.3333H25.3333C25.687 25.3333 26.0261 25.1929 26.2761 24.9428C26.5262 24.6928 26.6667 24.3536 26.6667 24C26.6667 23.6464 26.5262 23.3072 26.2761 23.0572C26.0261 22.8071 25.687 22.6667 25.3333 22.6667H11.4093C10.5841 22.6643 9.77973 22.4068 9.10658 21.9294C8.43343 21.452 7.92442 20.7781 7.64933 20H23.5427C25.1057 20.0001 26.6191 19.451 27.8184 18.4486C29.0177 17.4462 29.8267 16.0543 30.104 14.516L31.1507 8.71067C31.2551 8.13468 31.2317 7.54276 31.0819 6.97685C30.9321 6.41094 30.6597 5.8849 30.284 5.436ZM28.5333 8.23733L27.4853 14.0427C27.3188 14.9667 26.8326 15.8027 26.1118 16.4043C25.391 17.0059 24.4815 17.3348 23.5427 17.3333H7.22533L5.97067 6.66667H27.2133C27.4092 6.6655 27.6029 6.70749 27.7807 6.78967C27.9585 6.87185 28.116 6.9922 28.242 7.14214C28.368 7.29209 28.4595 7.46796 28.5098 7.65725C28.5602 7.84654 28.5682 8.04459 28.5333 8.23733Z" fill="black" />
              <path d="M9.33365 32.0008C10.8064 32.0008 12.0003 30.8069 12.0003 29.3341C12.0003 27.8614 10.8064 26.6675 9.33365 26.6675C7.8609 26.6675 6.66699 27.8614 6.66699 29.3341C6.66699 30.8069 7.8609 32.0008 9.33365 32.0008Z" fill="black" />
              <path d="M22.6667 32.0008C24.1394 32.0008 25.3333 30.8069 25.3333 29.3341C25.3333 27.8614 24.1394 26.6675 22.6667 26.6675C21.1939 26.6675 20 27.8614 20 29.3341C20 30.8069 21.1939 32.0008 22.6667 32.0008Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_0_4343">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </nav>
    </>
  )
}

export default Navbar
