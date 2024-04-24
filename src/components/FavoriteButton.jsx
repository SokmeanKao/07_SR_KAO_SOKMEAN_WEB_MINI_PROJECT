"use client";
import Image from "next/image";
import React, { useState } from "react";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = (value) => {
    setIsFavorite(value); // Set the favorite status based on the passed value
  };
  console.log(isFavorite)
  return (
    <div>
      <button
        className={`border border-gray rounded-lg p-2 ${
          isFavorite ? "true" : "false"
        }`}
        onClick={() => handleClick(!isFavorite)} // Toggle the value on click
      >
        <Image
          src="/assets/icons/star.svg"
          width={20}
          height={20}
          alt="black star"
          style={{ fill: isFavorite ? "yellow" : "black" }} // Change fill color to yellow when favorite
        />
      </button>
    </div>
  );
};

export default FavoriteButton;
