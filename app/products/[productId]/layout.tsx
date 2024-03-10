export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Feature products</p>
      {children}
    </>
  );
}
