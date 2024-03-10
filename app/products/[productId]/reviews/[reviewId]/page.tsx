import React from "react";
import { notFound } from "next/navigation";

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(params.reviewId) < 20) notFound();
  return (
    <div>
      <p> productId: {params.productId} </p>
      <p> reviewId: {params.reviewId} </p>
    </div>
  );
}
