import React, { useState, useEffect } from "react";

const galleryData = [
  {
    src: "public/Gallery/WhatsApp Image 2026-01-07 at 3.53.48 PM.jpeg",
    caption: "Worship Impact ",
    details: "Kaduna 2026",
    aspect: "3/5",
  },
  {
    src: "/Gallery/WhatsApp Image 2026-01-08 at 9.25.19 PM.jpeg",
    caption: "Live Session",
    details: "",
    aspect: "3/4",
  },
  {
    src: "/Be praised cover.jpeg",
    caption: "Be Praised Oh Lord",
    details: "Cover Art 2024",
    aspect: "1/1",
  },
  {
    src: "public/Gallery/WhatsApp Image 2026-01-07 at 3.53.52 PM.jpeg",
    caption: "Campus Revival",
    details: "Tour 2026",
    aspect: "4/4",
  },
  {
    src: "public/Gallery/WhatsApp Image 2026-01-07 at 4.00.55 PM.jpeg",
    caption: "Studio Session",
    details: "December 2025",
    aspect: "4/3",
  },
  {
    src: "public/Gallery/WhatsApp Image 2026-01-08 at 11.18.19 PM.jpeg",
    caption: "Been So Good",
    details: "Art Cover 2025",
    aspect: "3/4",
  },

];

const GalleryItem = ({ item, index, onClick }) => (
  <div
    className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition"
    style={{ aspectRatio: item.aspect }}
    onClick={() => onClick(index)}
  >
    <img
      src={item.src}
      alt={item.caption}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-lin-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
      <h3 className="text-lg font-semibold text-white">{item.caption}</h3>
      <p className="text-sm text-slate-200">{item.details}</p>
    </div>
  </div>
);

const Lightbox = ({ item, onClose, onNext, onPrev }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white text-2xl hover:bg-white/20"
        onClick={onClose}
      >
        &times;
      </button>

      <button
        className="absolute left-6 w-12 h-12 rounded-full bg-white/10 text-white text-2xl hover:bg-white/20"
        onClick={onPrev}
      >
        &#8249;
      </button>

      <button
        className="absolute right-6 w-12 h-12 rounded-full bg-white/10 text-white text-2xl hover:bg-white/20"
        onClick={onNext}
      >
        &#8250;
      </button>

      <div className="max-w-[90%] max-h-[85%] text-center">
        <img
          src={item.src}
          alt={item.caption}
          className="max-h-[75vh] mx-auto rounded-xl"
        />
        <h3 className="text-xl font-semibold text-white mt-6">{item.caption}</h3>
        <p className="text-sm text-slate-300">{item.details}</p>
      </div>
    </div>
  );
};

function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () =>
    setLightboxIndex((prev) => (prev + 1) % galleryData.length);
  const showPrev = () =>
    setLightboxIndex(
      (prev) => (prev - 1 + galleryData.length) % galleryData.length
    );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div className="w-full min-h-screen bg-amber-50 text-slate-800">

      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-heading">
          Gallery
        </h1>
        <p className="text-lg md:text-xl text-slate-600">
          Visual moments from the journey
        </p>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              index={index}
              onClick={openLightbox}
            />
          ))}
        </div>
      </section>


      {lightboxIndex !== null && (
        <Lightbox
          item={galleryData[lightboxIndex]}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </div>
  );
}

export default GalleryPage;
