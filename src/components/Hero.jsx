import Button from './common/Button';

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/image1.jpg)' }}
      >
        {/* Warm Overlay matching logo colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 via-primary/50 to-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          Candle of Hope
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 text-cream drop-shadow-lg">
          International
        </h2>
        <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          Empowering rural communities through transformative educational and social initiatives across East and Northeast India
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="large"
            onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
          <Button 
            variant="secondary" 
            size="large"
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Join Our Mission
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-cream" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;