import WONDER_IMAGES, { WonderImageProps } from "../../../wonders";
import Image from "next/image";
import Modal from "@/components/modal";

export default function PhotoDetail({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const photo: WonderImageProps = WONDER_IMAGES.find((p) => p.id === id)!;
  return (
    <Modal>
      <Image
        src={photo.src}
        alt={photo.name}
        className="w-full object-cver aspect-square"
      />
      <div className="bg-white py-4">
        <h2>{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
