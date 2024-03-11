import React from "react";
import WONDER_IMAGES from "./wonders";
import Link from "next/link";
import Image from "next/image";

export default function PhotoFeed() {
  return (
    <main className="mx-auto container">
      <h1 className="text-center text-3xl font-bold my-4">
        New Wonders of the World
      </h1>
      <div className="gird grid-cols-1 md:grid-cols-4 gap-4">
        {WONDER_IMAGES.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
