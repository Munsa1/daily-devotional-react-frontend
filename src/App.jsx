import AdminPanel from './components/AdminPanel/AdminPanel'
import ContactUs from './components/ContactUs/ContactUs'
import Devotional from './components/Devotional/Devotional'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import OtherDevotions from './components/Other Devotions/OtherDevotions'
import VerseOfTheDay from './components/VerseOfDay/VerseOfTheDay'
function App() {
  return (
    <>
    <Header />
    <Hero />
    <Devotional />
    <VerseOfTheDay />
    <AdminPanel />
    <ContactUs />
    <OtherDevotions />
    <Footer />
    </>
  )
}
export default App
