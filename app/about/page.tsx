import { Suspense } from "react";
import { Reviews } from "@/components/reviews";
import { cookies } from "next/headers";

export default function About() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("about server");
  return (
    <h1>
      about page {new Date().toLocaleDateString()}
      <Suspense fallback={<p>loading</p>}>
        <Reviews />
      </Suspense>
    </h1>
  );
}
