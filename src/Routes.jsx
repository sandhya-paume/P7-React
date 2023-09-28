import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Index/Header.jsx";
import Banner from "./Pages/Home/Index/Banner.jsx";
import Gallery from "./Pages/Home/Index/Gallery.jsx";
import Footer from "./Components/Index/Footer.jsx";
import Accommodation from './Pages/Accommodation_Sheet/Index/Accommodation.jsx';
import About from "./Pages/About/About.jsx";
import Error from "./Pages/Error_404/Error.jsx";

export default function AppRoutes() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<><Header/><Banner/><Gallery/><Footer/></>} />
        <Route path="/Accueil" element={<><Header/><Banner/><Gallery/><Footer/></>} />
        <Route path="/accommodation/:AccommodationId" element={<><Header/><Accommodation/><Footer/></>} />
        <Route path="/A Propos" element={<><Header/><About/><Footer/></>} />
        <Route path="*" element={<><Header/><Error/><Footer/></>} />
      </Routes>
    </Router>
  );
}
