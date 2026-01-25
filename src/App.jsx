import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Project routes will be added later */}
            {/* <Route path="/projects/community-awareness" element={<CommunityAwareness />} /> */}
            {/* <Route path="/projects/stitching-centre" element={<StitchingCentre />} /> */}
            {/* Add more project routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;