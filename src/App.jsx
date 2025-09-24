import Header from "./components/Header";
import Hero from "./components/Hero";
import DailyDevotional from "./components/DailyDevotional";
import OtherDevotions from "./components/OtherDevotions";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import './assets/styles/index.css'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DailyDevotional />
        <OtherDevotions />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
