// GalleryComponent.jsx
import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-css";
import "./index.css";

const Gallery = () => {
  const gifs = [
    {
      id: 1,
      url: "beautiful hair",
      title: "GIF 1",
      tags: ["color", "remove"],
    },
    {
      id: 2,
      url: "handsome bowtie",
      title: "GIF 2",
      tags: ["remove", "add"],
    },
    {
      id: 3,
      url: "necklace",
      title: "GIF 3",
      tags: ["add"],
    },
    {
      id: 4,
      url: "cake flowers",
      title: "GIF 4",
      tags: ["color"],
    },
    {
      id: 5,
      url: "handsome hair",
      title: "GIF 5",
      tags: ["remove", "add", "color"],
    },
    {
      id: 6,
      url: "path",
      title: "GIF 6",
      tags: ["add"],
    },
    {
      id: 7,
      url: "cake",
      title: "GIF 7",
      tags: ["remove", "add", "color"],
    },
    {
      id: 8,
      url: "hat",
      title: "GIF 8",
      tags: ["add"],
    },
    {
      id: 9,
      url: "pillar",
      title: "GIF 9",
      tags: ["add"],
    },
    {
      id: 10,
      url: "car",
      title: "GIF 10",
      tags: ["add", "color"],
    },
    {
      id: 11,
      url: "manga sword",
      title: "GIF 11",
      tags: ["add"],
    },
    {
      id: 12,
      url: "robot antenna",
      title: "GIF 12",
      tags: ["add"],
    },
    {
      id: 13,
      url: "deer",
      title: "GIF 13",
      tags: ["add"],
    },
    {
      id: 14,
      url: "mask",
      title: "GIF 14",
      tags: ["add"],
    },
    {
      id: 15,
      url: "skeleton cowboy",
      title: "GIF 15",
      tags: ["remove", "add"],
    },
    {
      id: 16,
      url: "dolphin",
      title: "GIF 16",
      tags: ["remove", "add"],
    },
    {
      id: 17,
      url: "mona lisa cat",
      title: "GIF 17",
      tags: ["add"],
    },
    {
      id: 18,
      url: "skull fire ball",
      title: "GIF 18",
      tags: ["add"],
    },
    {
      id: 19,
      url: "ghost legs",
      title: "GIF 19",
      tags: ["add"],
    },
    {
      id: 20,
      url: "monster arms",
      title: "GIF 20",
      tags: ["add"],
    },
    {
      id: 21,
      url: "feather",
      title: "GIF 21",
      tags: ["add"],
    },
  ];

  const [displayCount, setDisplayCount] = useState(5);
  const [isMobile, setIsMobile] = useState(false);
  const [shuffledGifs, setShuffledGifs] = useState([]);

  // Breakpoints for different screen sizes
  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  // Shuffle gifs once when component mounts
  useEffect(() => {
    const shuffled = [...gifs].sort(() => Math.random() - 0.5);
    setShuffledGifs(shuffled);
  }, []); // Empty dependency array means this only runs once on mount

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Determine how many items to display
  const itemsToShow = isMobile ? displayCount : shuffledGifs.length;
  const displayedGifs = shuffledGifs.slice(0, itemsToShow);

  const handleShowMore = () => {
    setDisplayCount(shuffledGifs.length);
  };

  return (
    <div className="main-gallery">
      <h2 className="title">Gallery</h2>
      <br />
      <Masonry
        breakpointCols={breakpointColumns}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {displayedGifs.map((gif) => (
          <div key={gif.id} className="gif-item">
            <img
              src={`${import.meta.env.BASE_URL}gallery/${gif.url}.gif`}
              alt={gif.title}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>

      {isMobile && displayCount < shuffledGifs.length && (
        <div className="show-more-container">
          <button onClick={handleShowMore} className="show-more-button">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
