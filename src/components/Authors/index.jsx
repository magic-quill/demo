// GalleryComponent.jsx
import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import "./index.css";

const Gallery = () => {
  const gifs = [
    {
      id: 1,
      url: "zichen",
      title: "Zichen Liu 🤵",
    },
    {
      id: 2,
      url: "yue",
      title: "Yue Yu 🩳",
    },
    {
      id: 3,
      url: "hao",
      title: "Hao Ouyang 🐰",
    },
    {
      id: 4,
      url: "qiuyu",
      title: "Qiuyu Wang 💥",
    },
    {
      id: 5,
      url: "ka leong",
      title: "Ka Leong Cheng 💡",
    },
    {
      id: 6,
      url: "wen",
      title: "Wen Wang 🏀",
    },
    {
      id: 7,
      url: "zhiheng",
      title: "Zhiheng Liu 🛁",
    },
    {
      id: 8,
      url: "qifeng",
      title: "Qifeng Chen 🏔️",
    },
    {
      id: 9,
      url: "yujun",
      title: "Yujun Shen 🧓🏻",
    },
  ];

  // Breakpoints for different screen sizes
  const breakpointColumns = {
    default: 5,
    1100: 5,
    700: 3,
    500: 2,
  };

  return (
    <div className="content authors-gallery">
      <h2 className="title">Author Gallery</h2>
      <div className="text" style={{ textAlign: "center" }}>
        Hover/click on us to use MagicQuill 🤪
      </div>
      <br />
      <div className="masonry-grid">
        {gifs.map((gif) => (
          <div key={gif.id} className="gif-item">
            <div className="gif-container">
              <img
                className="gif-preview"
                src={`${import.meta.env.BASE_URL}authors/frame_${gif.url}.png`}
                alt={gif.title}
                loading="lazy"
              />
              <img
                className="gif-full"
                src={`${import.meta.env.BASE_URL}authors/${gif.url}.gif`}
                alt={gif.title}
                // loading="lazy"
              />
            </div>
            <div className="gif-overlay">
              <h3>{gif.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
