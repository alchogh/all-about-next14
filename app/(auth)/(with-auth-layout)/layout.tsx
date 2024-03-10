"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <div className="bg-cyan-800 flex  justify-around text-white">
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-black"
        />
      </div>
      {navLink.map((nav) => {
        const isActive = pathname.startsWith(nav.href);
        return (
          <Link
            href={nav.href}
            key={nav.id}
            className={`${isActive ? "bg-yellow-700" : ""}`}
          >
            {nav.name}
          </Link>
        );
      })}

      {children}
    </div>
  );
}
const navLink = [
  {
    id: 1,
    name: "Register",
    href: "/register",
  },
  {
    id: 2,
    name: "Login",
    href: "/login",
  },
  {
    id: 3,
    name: "Forgot Password",
    href: "/forgot-password",
  },
];
