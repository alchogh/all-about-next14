import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Codevolution",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      about layout
      {children}
    </>
  );
}
