function DevotionCard({ image, title, text }) {
  return (
    <div className="devotions-card d-flex left-margin right-margin">
      <img src={image} alt={title} />
      <div className="card-text">
        <h3 className="app-color-text-2">{title}</h3>
        <p className="app-color-text-2">{text}</p>
      </div>
    </div>
  );
}

export default function OtherDevotions() {
  return (
    <section className="other-devotions app-color-bg-1">
      <h2 className="left-margin app-color-text-2">Other Devotions</h2>
      <DevotionCard
        image="/src/assets/images/italy street.webp"
        title="Devotion Title 1"
        text="Short description of the devotion."
      />
      <DevotionCard
        image="/src/assets/images/river.webp"
        title="Devotion Title 2"
        text="Short description of the devotion."
      />
    </section>
  );
}
