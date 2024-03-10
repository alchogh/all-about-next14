import Link from "next/link";
import React from "react";

export default function ProductList({
  params,
}: {
  params: { productId: string };
}) {
  const id = 100;
  return (
    <div className="flex flex-col">
      <Link href="/">home</Link>
      {/* <Link href={`/products/${params.productId}`}>Product List1</Link> */}
      <Link href="/" replace>
        Product List2
      </Link>
      <Link href={`/products/${id}`}>Product {id}</Link>
    </div>
  );
}
