import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from './SocialLinks.module.css'
export default function SocialLinks() {
  return (
    <div className={styles['social-links']}>
      <ul className={`${styles['socials']} d-flex`}>
        <li>
          <a
            href="https://web.facebook.com/munsa.mibenge.9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/MibengeMunsa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@munsamibenge6307"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/munsa-mibenge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
}
