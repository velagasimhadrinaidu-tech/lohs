import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WebProjects from "./pages/WebProjects";
import MobileProjects from "./pages/MobileProjects";
import BackendProjects from "./pages/BackendProjects";
import CloudProjects from "./pages/CloudProjects";
import UIUXProjects from "./pages/UIUXProjects";
import Careers from "./pages/careers"; // Import Careers page
import Investors from "./pages/investors"; // Import Investors page

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Project Pages Routes */}
        <Route path="/web-projects" element={<WebProjects />} />
        <Route path="/mobile-projects" element={<MobileProjects />} />
        <Route path="/backend-projects" element={<BackendProjects />} />
        <Route path="/cloud-projects" element={<CloudProjects />} />
        <Route path="/uiux-projects" element={<UIUXProjects />} />
        
        {/* New Pages Routes */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/investors" element={<Investors />} />
        
        {/* 404 Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;