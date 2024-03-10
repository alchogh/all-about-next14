export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="bg-cyan-800">
      authLayout
      {children}
    </h1>
  );
}
