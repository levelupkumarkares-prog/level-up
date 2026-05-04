"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

const NAV_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
      <div className="container mx-auto max-w-8xl px-6 md:px-12 flex items-center justify-between py-2">
        <Link href="/" className="flex w-25 h-20 items-center gap-2">
          <Image
            src="/logos/logo2.webp"
            alt="Level Up Capital Logo"
            width={120}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-800">
          {NAV_LINKS.map((item) =>
            item.label === "Contact" ? (
              <Link
                key={item.label}
                href={item.href}
                prefetch={false}
                className="px-8 cursor-pointer py-2 bg-[#B5893A] text-white rounded-md hover:bg-[#D4A73F] transition"
              >
                {item.label} Us
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`relative transition hover:text-black
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#B5893A] after:w-0
                  hover:after:w-full after:transition-all after:duration-300
                  ${pathname === item.href ? "text-black after:w-full" : "text-gray-800"}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-white border-t border-gray-200 shadow-md transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 text-gray-800">
          {NAV_LINKS.map((item) =>
            item.label === "Contact" ? (
              <Link
                key={item.label}
                href={item.href}
                prefetch={false}
                className="px-4 py-2 bg-[#B5893A] text-white rounded-md hover:bg-[#D4A73F] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label} Us
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`relative transition hover:text-black
                  ${pathname === item.href ? "text-black" : "text-gray-800"}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
