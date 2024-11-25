import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';
import './App.css';

// Import Components
import Navbar from './navbar';
import Header from './Header';
import Footer from './Footer';
import Home from './home';
import AboutSection from './About';
import FAQ from './Faq';
import ContactForm from './Contact';
import Collections from './collections';

// Import Product Pages
import PVCCupboard from './products/PVCCupboards';
import PVCDoors from './products/PVCDoors';
import UPVCDoors from './products/UPVCDoors';
import UPVCWindows from './products/UPVCWindows';
import WPCDoors from './products/WPCDoors';
import WPCFrames from './products/WPCFrames';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* About Route */}
          <Route
            path="/about"
            element={
              <>
                <Header />
                <Navbar />
                <AboutSection />
                <Footer />
              </>
            }
          />

          {/* FAQ Route */}
          <Route
            path="/faq"
            element={
              <>
                <Header />
                <Navbar />
                <FAQ />
                <Footer />
              </>
            }
          />

          {/* Contact Route */}
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Navbar />
                <ContactForm />
                <Footer />
              </>
            }
          />

          {/* Collections Route */}
          <Route path="/collections" element={<Collections />} />

          {/* Product Routes */}
          <Route path="/products/PVCCupboards" element={<PVCCupboard />} />
          <Route path="/products/PVCDoors" element={<PVCDoors />} />
          <Route path="/products/UPVCDoors" element={<UPVCDoors />} />
          <Route path="/products/UPVCWindows" element={<UPVCWindows />} />
          <Route path="/products/WPCDoors" element={<WPCDoors />} />
          <Route path="/products/WPCFrames" element={<WPCFrames />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
