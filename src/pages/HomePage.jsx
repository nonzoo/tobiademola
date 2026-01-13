import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="
            scroll-mt-20 min-h-[calc(90vh-5rem)] pt-20 flex items-center justify-center
            bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/IMG_8337.jpg')]
            bg-cover bg-position-[center_20%]
          "
      >
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              Tobi Ademola
            </h1>

            <p className="text-2xl md:text-3xl mt-13 text-slate-200 mb-10">
              Gospel • Worship • Inspirational
            </p>
          </div>
        </div>
      </section>

      {/* Music */}
      <section className="w-full py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium mb-6 tracking-wider text-slate-400">
            LATEST RELEASE
          </p>
          <div className="bg-amber-100  rounded-2xl p-8 flex flex-col md:flex-row gap-8">
            {/* Cover */}
            <div className="flex items-center justify-center">
              <img
                src="/Been so Good cover.jpeg"
                alt="Cover"
                className="w-64 h-64 bg-slate-700 rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-center gap-4">
              <p className="text-sm font-medium tracking-wider text-slate-700">
                SINGLE
              </p>
              <h3 className="text-3xl md:text-4xl font-bold font-heading mb-1">
                Been So Good
              </h3>
              <p className="text-lg text-slate-700 mb-4">2025</p>

              <div className="flex flex-wrap gap-3">
                {[
                  {
                    icon: "fab fa-spotify",
                    bg: "#1db954",
                    color: "#fff",
                    url: "https://open.spotify.com",
                  },
                  {
                    icon: "fa-sharp-duotone fa-solid fa-circle-play",
                    bg: "#fc3c44",
                    color: "#fff",
                    url: "https://music.youtube.com/watch?v=WQqkAKKCx6k&si=pieupdXSpkh7YKWi",
                  },
                  {
                    icon: "fab fa-soundcloud",
                    bg: "#ff5500",
                    color: "#fff",
                    url: "https://soundcloud.com",
                  },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full font-medium text-sm flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: s.bg, color: s.color }}
                  >
                    <i className={s.icon}></i>
                    {s.icon.includes("spotify")
                      ? "Spotify"
                      : s.icon.includes("duotone")
                      ? "YouTube Music"
                      : s.icon.includes("soundcloud")
                      ? "SoundCloud"
                      : ""}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                to="/music"
                className="text-sm tracking-widest text-slate-600 hover:text-amber-400 transition-colors"
              >
                VIEW ALL MUSIC →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-14">
            About
          </h2>

          <div className="flex flex-col md:flex-row gap-10">
            <img src="/GAZ_3811.jpg" className="w-64 h-80 rounded-xl" />

            <div className="flex-1">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Tobi Ademola is a gospel music minister whose songs are rooted
                in faith, worship, and heartfelt expression.
              </p>

              <Link to="/about">
                <button className="px-6 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-400">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
