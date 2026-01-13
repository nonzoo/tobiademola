export default function Footer() {
  return (
    <footer className="bg-amber-50 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-6 text-2xl text-amber-700">
          <a href="https://www.instagram.com/tobiademola_?igsh=bXJ1MzY1Z2oyeXJn" aria-label="Instagram" target="_blank" className="hover:text-amber-500 transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/tobiademola_" aria-label="Twitter" target="_blank" className="hover:text-amber-500 transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.Youtube.com/@Tobi_Ademola" aria-label="YouTube" target="_blank" className="hover:text-amber-500 transition-colors">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.tiktok.com/@tobi_ademola?_r=1&_t=ZS-92uUcbXuK6U" aria-label="TikTok" target="_blank" className="hover:text-amber-500 transition-colors">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="https://www.facebook.com/share/1AeHGMRddD/?mibextid=wwXIfr" target="_blank" aria-label="Facebook" className="hover:text-amber-500 transition-colors">
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-slate-700">
          © 2025 Tobi Ademola. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
