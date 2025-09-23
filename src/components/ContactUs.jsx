export default function ContactUs() {
  return (
    <section className="contact-us app-color-bg-2">
      <h2 className="left-margin app-color-text-2">Contact Us</h2>
      <form className="left-margin">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" className="app-color-bg-1 app-color-text-2">
          Send
        </button>
      </form>
    </section>
  );
}
