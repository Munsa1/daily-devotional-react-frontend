import mountains from "../../assets/images/Mountains.avif";
import styles from './hero.module.css'

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero-image-container']}>
        <div id="hero-image" className={styles['hero-image']}>
          <img src={mountains} alt="Snow Covered Mountains" />
        </div>
      </div>

      <span className={`${styles['image-text']} left-margin`}>
        Snow Covered Mountains
      </span>

      <div className={styles["hero-audio"]}>
        <audio src="" controls></audio>
      </div>
    </section>
  );
};

export default Hero;
