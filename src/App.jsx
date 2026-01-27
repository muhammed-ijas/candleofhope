import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Vision from "./components/Vision";
import Projects from "./components/Projects";
import Contact from "./components/ContactUs";
import JoinUs from "./pages/JoinUs";
import Donate from "./pages/Donate";
import Events from "./pages/Events";

function App() {
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Hero images to preload
  const heroImages = [
    '/image4.png',
    '/image5.jpg',
    '/image6.jpg',
    '/image7.jpg',
    '/image8.jpg',
  ];

  useEffect(() => {
    // Preload all hero images
    const preloadImages = async () => {
      const imagePromises = heroImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        // Still set as loaded even if some images fail
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  const handleLoadingComplete = () => {
    // Only hide loading screen when both timer is done AND images are loaded
    if (imagesLoaded) {
      setLoading(false);
    }
  };

  // Auto-hide loading when images are loaded (even if timer isn't done)
  useEffect(() => {
    if (imagesLoaded && !loading) {
      setLoading(false);
    }
  }, [imagesLoaded]);

  if (loading) {
    return <Loading onLoadingComplete={handleLoadingComplete} imagesLoaded={imagesLoaded} />;
  }

  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;