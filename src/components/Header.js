import React, { useState, useEffect, useContext } from 'react';
import "./Header.css"
import { Link, useLocation } from "react-router-dom";
import { HeaderContext } from './HeaderContext';


function Header() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      
      // Cleanup on component unmount
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const location = useLocation();
    const { headerRef } = useContext(HeaderContext);

    const handleNavClick = (path) => {
        if (location.pathname === path) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header ref={headerRef} className={scrolled ? 'scrolled' : ''}>
            <a href="/" id="textL">sihyunlights</a>
            <div id="headerMenu">
            <div id="headerLinks">
              <ul>
                <li>
                    <a
                        href="https://behance.net/sihyunlights"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Behance"
                        ><i className="fa-brands fa-behance fa-lg"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://youtube.com/@sihyunlights"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="YouTube"
                        ><i className="fa-brands fa-youtube fa-lg"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://x.com/sihyunlights"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        ><i className="fa-brands fa-x-twitter fa-lg"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://instagram.com/sihyunlights"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="Instagram"
                        ><i className="fa-brands fa-instagram fa-lg"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/sihyunlts"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub"
                        ><i className="fa-brands fa-github fa-lg"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="https://soundcloud.com/sihyunlights"
                        target="_blank" rel="noopener noreferrer"
                        aria-label="SoundCloud"
                        ><i className="fa-brands fa-soundcloud fa-lg"></i>
                    </a>
                </li>
              </ul>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link
                        to='/'
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        onClick={() => handleNavClick('/')}
                        >home</Link>
                    </li>
                    <li>
                        <Link
                        to='/projects'
                        className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                        onClick={() => handleNavClick('/projects')}
                        >projects</Link>
                    </li>
                    <li>
                        <Link
                        to='/history'
                        className={`nav-link ${location.pathname === '/history' ? 'active' : ''}`}
                        onClick={() => handleNavClick('/history')}
                        >history</Link>
                    </li>
                    <li>
                        <a className='nav-link' target="_blank" rel="noopener noreferrer" href="https://blog.sihyunlights.com/">blog</a>
                    </li>
                </ul>
            </nav>
            </div>
            <a href="https://youtu.be/StAy4_K6NNI" id="textR">website</a>
        </header>
    );
}

export default Header;