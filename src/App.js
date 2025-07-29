import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import HeroSection from './components/HeroSection/HeroSection';
import FeaturedProperties from './components/FeaturedProperties/FeaturedProperties';
import About from './components/About/About';
import CTASection from './components/CTA/CTASection';

import SearchResults from './components/SearchResults/SearchResults';
import PropertyRequestPage from './pages/RequestPage/RequestPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <About />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/property-request" element={<PropertyRequestPage />} />
        {/* Add more routes later as needed */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
