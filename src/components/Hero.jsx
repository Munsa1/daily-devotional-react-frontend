export default function Hero() {
  return (
    <section className="hero app-color-bg-1 d-flex">
      <div className="hero-text">
        <h2 className="left-margin app-color-text-2">Faith Over Fear</h2>
        <p className="left-margin app-color-text-2 text-size">
          Trust in God in all circumstances, for His strength sustains us.
        </p>
        <span className="left-margin app-color-text-2">
          Philippians 4:13
        </span>
      </div>
      <img
        src="/src/assets/images/mountain.jpg"
        alt="Mountains"
        className="hero-img"
      />
    </section>
  );
}
