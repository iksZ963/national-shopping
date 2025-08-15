"use client";
// components/Header.js
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header_1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    fetch("/navData.json")
      .then((response) => response.json())
      .then((data) => setNavData(data));
  }, []);

  const halfLength = Math.ceil(navData.length / 2);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between md:justify-center gap-8 items-center">
        <div className="hidden md:flex space-x-6">
          {navData.slice(0, halfLength).map((item: any, index: any) => (
            <Link
              className="text-gray-800 hover:text-orange-500"
              key={index}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Image src="/logo-middle.png" alt="Logo" width={100} height={100} />
        </div>
        {/* <div className="flex justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Image src="/logo-middle.png" alt="Logo" width={100} height={100} className="h-10 w-10"/>
        </div> */}

        <div className="hidden md:flex items-center space-x-6">
          {navData.slice(halfLength).map((item: any, index: any) => (
            <Link
              className="text-gray-800 hover:text-orange-500"
              key={index}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <Link
              className="border border-gray-400 text-gray-800 hover:bg-gray-100 py-2 px-4 rounded"
              href="/login"
            >
              LOG IN
            </Link>
            <Link
              className="bg-orange-500 text-white hover:bg-orange-700 py-2 px-4 rounded"
              href="/signup"
            >
              SIGN UP
            </Link>
          </div>
        </div>

        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6 fill-current text-gray-800"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.364 5.636l1.414 1.414L13.414 13l6.364 6.364-1.414 1.414L12 14.414l-6.364 6.364-1.414-1.414L10.586 13 4.222 6.636 5.636 5.222 12 11.586l6.364-6.364z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <nav className="px-6 pt-2 pb-4 space-y-2">
            {navData.map((item: any, index: any) => (
              <Link
                className="block text-gray-800 hover:text-orange-500"
                key={index}
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
            <Link
              className="block border border-gray-400 text-gray-800 hover:bg-gray-100 py-2 px-4 rounded"
              href="/login"
            >
              LOG IN
            </Link>
            <Link
              className="block bg-orange-500 text-white hover:bg-orange-700 py-2 px-4 rounded"
              href="/signup"
            >
              SIGN UP
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header_1;
