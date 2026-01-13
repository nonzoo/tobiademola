import React from "react";

export default function YouTubeEmbed({ videoId }) {
  return (
    <div className="mt-8">
      {/* Frame wrapper */}
      <div
        className="
          relative w-full overflow-hidden
          rounded-2xl
          bg-amber-200/40
          ring-1 ring-amber-300/40
          shadow-sm
        "
        style={{ aspectRatio: "16 / 9" }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="YouTube video player"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="
            absolute inset-0
            w-full h-full
            rounded-2xl
          "
        />
      </div>

      {/* Caption */}
      <p className="mt-3 text-xs text-slate-600 tracking-wide">
        Watch on YouTube
      </p>
    </div>
  );
}
