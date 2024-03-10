"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your roder");
    router.push("/");
  };
  return (
    <>
      <div className="bg-green-600">hi</div>
      <button onClick={handleClick}>place order</button>
    </>
  );
}
