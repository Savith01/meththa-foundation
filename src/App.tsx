import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import YourJourney from './pages/YourJourney';
import Products from './pages/Products';
import ResearchDev from './pages/ResearchDev';
import FundUs from './pages/FundUs';
import './App.css';

// ScrollToTop component moves page to height 0 upon path transitions
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/your-journey" element={<YourJourney />} />
          <Route path="/products" element={<Products />} />
          <Route path="/research" element={<ResearchDev />} />
          <Route path="/fund-us" element={<FundUs />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
