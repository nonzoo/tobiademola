import React from "react";
import ContactForm from "../components/ContactForm";
function AboutPage() {
  return (
    <div className="w-full font-body">
      {/* Hero Section */}
      <section
        id="home"
        className="w-full min-h-screen flex items-center justify-center pt-20
          bg-[linear-gradient(rgba(0,0,0,0.35),rgba(0,0,0,0.35)),url('/IMG_8337.jpg')]
          bg-cover bg-position-[right_20%] bg-no-repeat"
      >
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="mb-12">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl mb-8 border-4 ">
              <img
                src="/GAZ_3811.jpg"
                alt="Tobi Ademola"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white font-heading">
            About Tobi Ademola
          </h1>
          <p className="text-2xl md:text-3xl font-medium max-w-3xl mx-auto text-slate-200">
            Gospel • Worship • Inspirational
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section id="story" className="w-full py-24 bg-amber-50/80">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center text-slate-900 font-heading">
            The Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/GAZ_3802.jpg"
                alt="Tobi Ademola"
                className="w-full rounded-2xl shadow-xl "
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6 text-slate-800 text-justify">
                Tobi Ademola was born on the 26th of September in Kaduna,
                Nigeria, to Rev. Emmanuel Ademola and Mrs. Love Ademola. He is
                the eldest of three children. His musical journey began at a
                remarkably early age three (3) years old when his parents first
                noticed him singing. What began as a childhood expression soon
                revealed itself as a divine calling. Under the guidance,
                prayers, and spiritual covering of his parents, this gift grew
                into an unquenchable passion for God. His spiritual and musical
                development was further nurtured under the fatherly leadership
                of Bishop Fred Addo, who contributed immensely to his growth
                both spiritually and musically. Tobi Ademola hails from Owo
                Local Government Area of Ondo State, Western Nigeria. Over time,
                the Holy Spirit has used him to birth songs that have been a
                blessing to the Church and the Body of Christ at large. A
                full-time worshipper, he has released spirit-inspired songs such
                as “Be Praised Oh Lord,” “Been So Good,” and “Your Mercy,” among
                others. Growing up at home, in school, and within the church
                community, Tobi was fondly referred to as “a Levite,” a name
                that reflected both his musical grace and his heart for worship.
                At the core of his calling is a deep desire to see men and women
                worship God in spirit and in truth. Through his ministry, Tobi
                Ademola is committed to bringing joy, inspiring hope, building
                faith, and rekindling the divine connection and fellowship God
                ordained between Himself and mankind from the foundation of
                time, reaching hearts across nations and to the ends of the
                earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-32 bg-amber-400 border-0 h-1" />
      </div>

      {/* Musical Influences */}
      <section id="influences" className="w-full py-24 bg-amber-50/80">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center text-slate-900 font-heading">
            Musical Influences
          </h2>
          <p className="text-xl text-center mb-16 text-slate-800">
            Artists who shaped the sound
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Nathaniel Bassey",
                gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
              },
              {
                name: "Moses Bliss",
                gradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
              },
              {
                name: "Dunsin Oyekan",
                gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)",
              },
              {
                name: "Fred Addo",
                gradient: "linear-gradient(135deg, #b45309 0%, #f59e0b 100%)",
              },
            ].map((inf, i) => (
              <div
                key={i}
                className="influence-badge text-center p-6 rounded-2xl"
                style={{ background: inf.gradient }}
              >
                <i className="fas fa-music text-4xl mb-3 text-white"></i>
                <h3 className="text-xl font-semibold text-white">{inf.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <hr className="w-32 bg-amber-400 border-0 h-1" />
      </div>

      {/* Contact Section */}
      <section id="contact" className="w-full py-24 bg-amber-50/80">
      
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center text-slate-900 font-heading">
            Let's Connect
          </h2>
          <p className="text-xl text-center mb-16 text-slate-800">
            Get in touch for bookings and collaborations
          </p>
          <ContactForm />
          <div className="grid md:grid-cols-2 gap-8 mt-7 mb-12">
            {[
              {
                icon: "fa-envelope",
                title: "Email",
                info: "tobiademolaofficial@gmail.com",
                href: "mailto:tobiademolaofficial@gmail.com",
              },
              {
                icon: "fa-phone",
                title: "Phone",
                info: "07045909553",
                href: "tel:07045909553",
                info2: "09046644354",
                href2: "tel:09046644354",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-amber-100 border border-amber-100"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center`}
                >
                  <i className={`fas ${c.icon} text-2xl text-slate-800`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800">
                  {c.title}
                </h3>
                {c.href ? (
                  <a
                    href={c.href}
                    className="inline-block px-4 py-2 rounded-full text-black transition"
                  >
                    {c.info}
                  </a>
                ) : (
                  <p className="text-slate-700">{c.info}</p>
                )}
                {c.href2 ? (
                  <a
                    href={c.href2}
                    className="inline-block px-4 py-2 rounded-full text-black transition"
                  >
                    {c.info2}
                  </a>
                ) : (
                  <p className="text-slate-700">{c.info2}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
