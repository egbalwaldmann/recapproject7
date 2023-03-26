import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name, location, image, mapURL, description }) => {
  return (
    <div className="card">
      <Link href={`/attraction/${id}`}  className="card-title" >
        <h2>
          {name} in {location}
        </h2>
        <Image
          src={image}
          className="card-img"
          // src="/logo5.png"
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </Link>
    </div>
  );
};

export default Card;
