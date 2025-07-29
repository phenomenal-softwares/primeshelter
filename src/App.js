import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HeroSection from "./components/HeroSection/HeroSection";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";
import About from "./components/About/About";
import PostRequest from "./components/CTA/PostRequest";
import FindAgents from "./components/CTA/FindAgents";
import ListProperty from "./components/CTA/ListProperty";

import SearchResults from "./pages/SearchResults/SearchResults";
import PropertyRequestPage from "./pages/RequestPage/RequestPage";
import AgentsPage from "./pages/Agents/AgentsPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import SignInPage from "./pages/Auth/SignInPage";

import "./App.css";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProperties />
      <About />
      <div className="cta-section">
        <PostRequest />
        <FindAgents />
        <ListProperty />
      </div>
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
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
        {/* Add more routes later as needed */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
