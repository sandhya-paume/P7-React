// ROUTERS //

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./Components/Index/Header.jsx";
import Banner from "../src/Pages/Home/Index/Banner.jsx";
import Gallery from "../src/Pages/Home/Index/Gallery.jsx";
import Footer from "../src/Components/Index/Footer.jsx";
import Accommodation from './Pages/Accommodation_Sheet/Index/Accommodation';
import About from "../src/Pages/About/About.jsx";
import Error from "./Pages/Error_404/Error.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode> 
    <Router>
      <Routes> 
        <Route path="/" element={<><Header/><Banner/><Gallery/><Footer/></>} />
        <Route path="/Accueil" element={<><Header/><Banner/><Gallery/><Footer/></>} />
        <Route path="/accommodation/:AccommodationId" element={<><Header/><Accommodation/><Footer/></>} />
        <Route path="/A Propos" element={<><Header/><About/><Footer/></>} />
        <Route path="*" element={<><Header/><Error/><Footer/></>} />
      </Routes>
    </Router>
  </React.StrictMode>
  );

