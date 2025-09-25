import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return <header>
                {/* Start of Mobile Menu Design */}
        <div class="mobile-nav-container">
    <div className="mobile-view d-flex app-margin">
      <a href="#">
        <FontAwesomeIcon icon={faBars} />
      </a>
      <a href="#" id="openSearch">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </a>
    </div>
        </div>
    </header>
}

export default Header;