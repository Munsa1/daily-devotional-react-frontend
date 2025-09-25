import mountains from "../../assets/images/Mountains.avif";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <div id="hero-image">
          <img src={mountains} alt="Snow Covered Mountains" />
        </div>
      </div>

      <span className="image-text left-margin">
        Snow Covered Mountains
      </span>

      <div className="hero-audio">
        <audio src="" controls></audio>
      </div>
    </section>
  );
};

export default Hero;
