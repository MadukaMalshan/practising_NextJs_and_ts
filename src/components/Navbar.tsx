"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 ${
            isActive("/") 
              ? "bg-gradient-to-br from-blue-700 to-blue-900 shadow-blue-500/50" 
              : "bg-gradient-to-br from-blue-600 to-blue-800"
          }`}>
            <span className="text-white font-bold text-lg md:text-xl">M</span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hidden sm:block">
            MyWebsite
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-4 md:gap-8 lg:gap-12 text-gray-700 font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link 
                href={link.href}
                className={`relative group px-3 md:px-4 py-2 text-sm md:text-base transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-blue-600 font-bold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-1 md:h-1.5 bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 rounded-full ${
                  isActive(link.href) 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            </li>
          ))}
          <li>
            <button className="px-5 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-sm md:text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}