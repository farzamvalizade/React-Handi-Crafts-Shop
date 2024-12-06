import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Ostans from './components/Ostans';
import ProductList from './components/Product';
import Footer from "./components/Footer";

function AppContent() {
  const location = useLocation();


  const hideNavAndFooter = location.pathname === '/ostans';

  return (
    <>
      {!hideNavAndFooter && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ostans" element={<Ostans />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;