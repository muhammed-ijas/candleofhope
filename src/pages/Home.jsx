import Hero from '../components/Hero';
import About from '../components/About';
import Vision from '../components/Vision';
import AreasOfWork from '../components/AreasOfWork';
import Projects from '../components/Projects';
import Candle from '../components/Candle';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Vision />
      <AreasOfWork />
      <Projects />
      <Candle />

      {/* <Testimonials /> */}
      {/* <JoinUs /> */}
      {/* <ContactMap /> */}
    </div>
  );
}

export default Home;