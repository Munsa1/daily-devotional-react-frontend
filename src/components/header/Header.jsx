// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import styles from './header.module.css';

// function Header() {
//   return (
//     <header id="header">
//       <div className={styles['mobile-nav-container']}>
//         <div className={`${styles['mobile-view']} d-flex app-margin`}>
//           <a href="#">
//             <FontAwesomeIcon icon={faBars} />
//           </a>
//           <a href="#" id="openSearch">
//             <FontAwesomeIcon icon={faMagnifyingGlass} />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";
import MobileMenu from "./MobileMenu/MobileMenu.jsx"; // adjust path as needed

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <div className={styles["mobile-nav-container"]}>
        <div className={`${styles["mobile-view"]} d-flex app-margin`}>
          <a href="#" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faBars} />
          </a>
          <a href="#" id="openSearch">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
        </div>
      </div>

      {/* Show Mobile Menu when open */}
      {isMenuOpen && <MobileMenu onClose={handleMenuToggle} />}
    </header>
  );
}

export default Header;
