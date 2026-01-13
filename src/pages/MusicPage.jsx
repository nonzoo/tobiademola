import React from "react";
import YouTubeEmbed from "../components/YouTubeEmbed";
import ContactForm from "../components/ContactForm";
function MusicPage() {
  const releases = [
    {
      id: 1,
      type: "SINGLE",
      title: "Be Praised Oh Lord",
      year: "2024",
      image: "/Be praised cover.jpeg",
      links: [
        {
          icon: "fab fa-spotify",
          url: "https://open.spotify.com",
          bg: "#1db954",
          color: "#fff",
        },
        {
          icon: "fab fa-apple",
          url: "https://music.apple.com",
          bg: "#fc3c44",
          color: "#fff",
        },
        {
          icon: "fab fa-soundcloud",
          url: "https://soundcloud.com",
          bg: "#ff5500",
          color: "#fff",
        },
        {
          icon: "fa-sharp-duotone fa-solid fa-circle-play",
          url: "https://music.youtube.com/watch?v=nSyrRsTV978&si=Dyo-IVOZuakhZJkb",
          bg: "#ff0000",
          color: "#fff",
        }
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-amber-50/80 text-slate-900 font-body">
      {/* Page Title */}
      <section className="w-full py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold font-heading tracking-tight">
            Music
          </h2>
        </div>
      </section>

      {/* Featured Release */}
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
              <YouTubeEmbed videoId="ERw8Z3ytZuo" />
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
                    url: "https://music.youtube.com/watch?v=ERw8Z3ytZuo&si=99JNwSaxZQFQJLDZ",
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
          </div>
        </div>
      </section>

      {/* Previous Releases */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium mb-6 tracking-wider text-slate-500">
            PREVIOUS RELEASES
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {releases.map((r) => (
              <div
                key={r.id}
                className="bg-amber-100  rounded-xl overflow-hidden"
              >
                <img src={r.image} className="aspect-square" />
                <div className="p-6 flex flex-col gap-2">
                  <p className="text-xs font-medium tracking-wider text-slate-700">
                    {r.type}
                  </p>
                  <h4 className="text-xl font-bold font-heading">{r.title}</h4>
                  <p className="text-sm text-slate-700">{r.year}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {r.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full text-xs font-medium hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: l.bg, color: l.color }}
                      >
                        <i className={l.icon}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-2xl p-12 text-center bg-amber-100">
            <h3 className="text-3xl font-bold font-heading mb-4">
              Get in Touch
            </h3>
            <p className="text-lg mb-8 text-slate-700">
              For bookings and collaborations
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MusicPage;
