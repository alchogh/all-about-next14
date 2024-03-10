import { Metadata } from "next";

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
    title: `Product ${title}`,
  };
};

export default function ProductDetails({ params }: PrudctDetailProps) {
  return (
    <div>
      ProductDetails
      {params.productId}
    </div>
  );
}
