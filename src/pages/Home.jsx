import Hero from '../components/Hero';
import About from '../components/About';
import Vision from '../components/Vision';
import AreasOfWork from '../components/AreasOfWork';
import Projects from '../components/Projects';
import Candle from '../components/Candle';
import Testimonials from '../components/Testimonials';
import JoinUs from '../components/JoinUs';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Vision />
      <AreasOfWork />
      <Projects />
      <Candle />
      <Testimonials />
      <JoinUs />
      <ContactUs />

    </div>
  );
}

export default Home;