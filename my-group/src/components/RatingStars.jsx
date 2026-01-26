// src/components/RatingStars.jsx
import React from "react";

export default function RatingStars({ rating = 0 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <span aria-label={`Rating ${rating} out of 5`} className="inline-flex gap-0.5">
      {[...Array(5)].map((_, i) => {
        const idx = i + 1;
        const fill = idx <= full ? "currentColor" : "rgba(19,195,139,.22)";
        const isHalf = half && idx === full + 1;
        return (
          <svg
            key={i}
            viewBox="0 0 24 24"
            aria-hidden="true"
            width="16"
            height="16"
            fill={isHalf ? `url(#half${i})` : fill}
          >
            {isHalf && (
              <defs>
                <linearGradient id={`half${i}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="rgba(19,195,139,.22)" />
                </linearGradient>
              </defs>
            )}
            <path d="M12 2l2.9 6.6 7.1.6-5.4 4.6 1.6 6.9L12 17.9 5.8 20.7l1.6-6.9-5.4-4.6 7.1-.6z" />
          </svg>
        );
      })}
    </span>
  );
}
