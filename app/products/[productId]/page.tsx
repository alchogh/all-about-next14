import { Metadata } from "next";
import Link from "next/link";

interface PrudctDetailProps {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: PrudctDetailProps): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: {
      absolute: `Product ${title}`,
    },
  };
};

export default function ProductDetails({ params }: PrudctDetailProps) {
  return (
    <div>
      <Link href="/">home</Link>
      ProductDetails
      {params.productId}
    </div>
  );
}
