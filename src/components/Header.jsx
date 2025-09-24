import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import '../../src/App.css'

export default function Header() {
  return (
    <header id="header">
      <div className="mobile-nav-container">
        <div className="mobile-view d-flex app-margin">
          <a href="#">
            <FontAwesomeIcon icon={faBars} />
          </a>
          <a href="#" id="openSearch">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
        </div>
      </div>

      <nav>
        <div className="desktop-view left-margin-desk right-margin-desk">
          <div className="left-part">
            <ul className="li d-flex">
              <li>
                <a href="#" id="openSearch2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
              <li><a href="#" className="hover-effect bold-links">Audios</a></li>
              <li><a href="#" className="hover-effect bold-links">Videos</a></li>
              <li><a href="#" className="hover-effect bold-links">Sermons</a></li>
            </ul>
          </div>

          <div className="mid-part">
            <ul className="li d-flex">
              <li><a href="index.html" className="bold-links">Church Name</a></li>
            </ul>
          </div>

          <div className="right-part">
            <ul className="li d-flex">
              <li><a href="#aboutUs" className="hover-effect bold-links">About</a></li>
              <li><a href="#contact" className="hover-effect bold-links">Connect</a></li>
              <li><a href="#" className="hover-effect bold-links font-size-link">Store</a></li>
              <li>
                <a href="#" className="button-effect bold-links font-size-link">
                  <button className="donate-btn">Donate</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="my-links d-flex hidden gb-popup-scale-blur">
        <div className="close-btn-container d-flex">
          <FontAwesomeIcon icon={faXmark} className="close-btn-style" />
        </div>
        <ul className="d-flex">
          <li><a href="#devotion" className="link">Devotion</a></li>
          <li><a href="#aboutUs" className="link">About Us</a></li>
          <li><a href="#contact" className="link">Contact</a></li>
          <li><a href="#videos" className="link">Videos</a></li>
          <li><a href="#audio" className="link">Audio</a></li>
          <li><a href="#donate" className="link">Donate</a></li>
        </ul>
      </div>

      <div className="overlay hidden gb-popup-scale-blur"></div>

      <div className="hidden search-container gb-popup-scale-blur my-links d-flex" id="searchContainer">
        <div className="close-btn-container d-flex">
          <FontAwesomeIcon icon={faXmark} className="close-btn-style" id="closeSearch" />
        </div>
        <div className="search-bar-cont">
          <div className="search-bar d-flex">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="white" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </header>
  );
}
