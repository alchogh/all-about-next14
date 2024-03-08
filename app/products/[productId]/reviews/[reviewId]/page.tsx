import React from "react";

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      <p> productId: {params.productId} </p>
      <p> reviewId: {params.reviewId} </p>
    </div>
  );
}
