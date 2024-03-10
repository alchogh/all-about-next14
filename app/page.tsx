import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Link href="/blog" className="p-4 bg-slate-400">
        Blog
      </Link>
      <Link href="/products" className="p-4 bg-slate-400">
        products
      </Link>
      <Link href="/login" className="p-4 bg-slate-400">
        login
      </Link>
    </div>
  );
}
