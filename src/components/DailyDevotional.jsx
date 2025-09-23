export default function DailyDevotional() {
  return (
    <section className="devotional app-color-bg-2 d-flex">
      <img
        src="/src/assets/images/devotional.jpg"
        alt="Devotional"
        className="devotional-img"
      />
      <div className="devotional-text">
        <h2 className="left-margin app-color-text-2">God's Patience</h2>
        <p className="left-margin app-color-text-2 text-size">
          God is slow to anger and gives us time to repent. But He loves us too
          much to leave us the way we are.
        </p>
        <span className="left-margin app-color-text-2">September 23, 2025</span>
      </div>
    </section>
  );
}
