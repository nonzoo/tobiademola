import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MusicPage from "./pages/MusicPage";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./sections/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-full overflow-auto">
      <NavBar onOpen={() => setMenuOpen(true)} />
      <SideBar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="mt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/gallery" element={<GalleryPage />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
