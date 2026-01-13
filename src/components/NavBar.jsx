import { Link } from "react-router-dom";

export default function Navbar({ onOpen }) {
  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50 h-20
       bg-amber-50/80 backdrop-blur-md py-6 

      "
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Artist name / brand */}
        <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
          <Link
            to="/"
            className="hover:text-amber-500 transition-colors sirivennela-bold"
          >
            Tobi Ademola
          </Link>
        </h1>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-slate-700 hover:text-amber-500 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-slate-700 hover:text-amber-500 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            to="/music"
            className="text-slate-700 hover:text-amber-500 transition-colors font-medium"
          >
            Music
          </Link>
          <Link
            to="/gallery"
            className="text-slate-700 hover:text-amber-500 transition-colors font-medium"
          >
            Gallery
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          onClick={onOpen}
          className="md:hidden text-2xl text-slate-700 hover:text-amber-500 transition-colors"
          aria-label="Open menu"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}
