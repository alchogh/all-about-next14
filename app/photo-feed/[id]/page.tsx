import React from "react";
import WONDER_IMAGES, { WonderImageProps } from "../wonders";
import Image from "next/image";

export default function PhotoDetail({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const photo: WonderImageProps = WONDER_IMAGES.find((p) => p.id === id)!;
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4"> {photo.name}</h1>
        </div>
        <Image
          src={photo.src}
          alt={photo.name}
          className="w-full object-cver aspect-square"
        />
      </div>
    </div>
  );
}
