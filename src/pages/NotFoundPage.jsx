import React from "react";

const FloatingIcon = ({ className, style }) => (
  <div
    className={`absolute opacity-10 animate-float ${className}`}
    style={style}
  ></div>
);

const NavButton = ({ href, iconClass, text }) => (
  <a
    href={href}
    className="
      rounded-xl px-6 py-5 font-medium text-center
      bg-amber-500 text-white
      hover:bg-amber-400 transition-colors
      shadow-lg
    "
  >
    <i className={`mb-2 block text-2xl ${iconClass}`}></i>
    <span className="block">{text}</span>
  </a>
);

function NotFoundPage() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-amber-50">
      {/* Floating Icons */}
      <FloatingIcon className="fas fa-music text-amber-400" style={{ top: "10%", left: "10%", fontSize: "4rem" }} />
      <FloatingIcon className="fas fa-compact-disc text-amber-500" style={{ top: "70%", right: "15%", fontSize: "3.5rem" }} />
      <FloatingIcon className="fas fa-headphones text-amber-400" style={{ top: "30%", right: "20%", fontSize: "3rem" }} />
      <FloatingIcon className="fas fa-guitar text-amber-500" style={{ bottom: "20%", left: "20%", fontSize: "3.5rem" }} />

      {/* Content */}
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full text-center">
          {/* 404 */}
          <h1
            className="font-bold mb-6"
            style={{
              fontSize: "clamp(6rem, 18vw, 11rem)",
              background: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}
          >
            404
          </h1>

          {/* Text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-600 mb-12">
            Looks like this page missed the beat. Let's get you back on track.
          </p>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            <NavButton href="/" iconClass="fas fa-home" text="Go Home" />
            <NavButton href="/music" iconClass="fas fa-music" text="Music" />
            <NavButton href="/about" iconClass="fas fa-user" text="About Tobi" />
          </div>

          {/* Help */}
          <p className="text-sm text-slate-500">
            Need help?{" "}
            <a
              href="mailto:support@arianova.com"
              className="text-amber-600 hover:underline"
            >
              Contact support
            </a>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default NotFoundPage;
