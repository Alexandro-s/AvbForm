"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-black/50" : "bg-neutral-900 "}
      `}
    >
      <nav className="w-full ">
        <div className="w-full flex items-center justify-around h-16">

          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo-2.png"
              width={70}
              height={50}
              alt="Logo AVB - Aço Verde do Brasil"
              className="object-contain"
            />
            <span className="text-white font-semibold text-lg tracking-wide">
              AVB | Aço Verde do Brasil
            </span>
          </Link>

        </div>
      </nav>
    </header>
  );
}
