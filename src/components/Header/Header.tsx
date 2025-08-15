"use client";
import React, { useState } from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoSearch } from "react-icons/io5";
import OpenCartSheet from "../products/Cart_Sheet";
import { usePathname } from "next/navigation";
import { Heart, Search, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);

  const NavMenu = [
    { title: "Home", path: "/" },
    { title: "All Categories", path: "/shop" },
    { title: "Become A Retailer", path: "/flash-sale" },
    { title: "About Us", path: "/blog" },
    { title: "Contact Us", path: "/contact-us" },
  ];

  return (
    <header className="bg-white relative z-50 shadow-sm">
      <Card className="max-w-full overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <header className="flex flex-wrap items-center justify-between py-4 gap-4">
            <Link
              href={"/"}
              className="flex-shrink-0 w-[100px] md:w-[140px] max-w-[200px] lg:max-w-[350px] aspect-[16/3]"
            >
              <Image
                src={"/images/logo1.jpg"}
                alt="logo"
                width={140}      // This can stay, Next/Image will scale responsively inside container
                height={80}
                className="object-contain"
              />
            </Link>


            {/* Desktop search */}
            <div className="flex-1 px-2 hidden lg:flex max-w-xl">
              <div className="flex items-center relative w-full">
                <Input
                  type="text"
                  placeholder="I am shopping for..."
                  className="rounded-r-none border-primary"
                />
                <Button className="rounded-l-none px-4">
                  <Search size={20} />
                </Button>
                {/* Search results dropdown can be implemented here */}
              </div>
            </div>

            {/* Wishlist, Cart, Login - desktop */}
            <div className="hidden lg:flex min-w-[300px] justify-end space-x-6">
              <div className="flex items-center gap-2 cursor-pointer select-none">
                <Heart size={25} />
                <div className="flex flex-col items-start">
                  <span className="w-5 h-5 text-sm bg-primary text-white grid place-content-center rounded-full mb-1">
                    0
                  </span>
                  <span className="text-sm font-medium text-gray-700">Wishlist</span>
                </div>
              </div>
              <OpenCartSheet />
              <Link href="/login">
                <Button>Login</Button>
              </Link>
            </div>

            {/* Mobile search & cart */}
            <div className="flex items-center gap-3 lg:hidden flex-shrink-0">
              <OpenCartSheet />
              <Button variant={"outline"} onClick={() => setMobileSearchOpen(true)} aria-label="Open search">
                <IoSearch size={20} />
              </Button>
              <Link href="/login">
                <Button size="sm">Login</Button>
              </Link>
            </div>
          </header>

          {/* Navigation */}
          <nav className="border-t pt-2 overflow-x-auto scrollbar-none no-scrollbar max-w-full">
            <ul className="flex space-x-4 text-sm whitespace-nowrap">
              {NavMenu.map((item) => (
                <li key={item.path} className="flex-shrink-0">
                  <Link
                    href={item.path}
                    className={`inline-block px-4 py-2 rounded-md hover:bg-muted select-none ${pathname === item.path
                      ? "font-bold text-primary bg-muted"
                      : "text-gray-700"
                      }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Card>

      {/* Mobile Fullscreen Search Dialog */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-white z-[100] p-4 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <Input
              type="search"
              placeholder="Search products..."
              className="flex-1 border border-primary rounded"
              autoFocus
              aria-label="Search products"
            />
            <Button variant="ghost" onClick={() => setMobileSearchOpen(false)} aria-label="Close search">
              <X size={22} />
            </Button>
          </div>

          {/* Search suggestions */}
          <div className="flex-1 overflow-y-auto">
            <h4 className="text-sm font-semibold mb-3 text-gray-700">Suggestions</h4>
            <ul className="space-y-2">
              {["Laptop", "Mobile Phone", "Keyboard", "Mouse"].map((suggestion) => (
                <li
                  key={suggestion}
                  className="p-3 border rounded-md hover:bg-muted cursor-pointer select-none"
                  tabIndex={0}
                  role="button"
                  onClick={() => {
                    /* Implement suggestion select */
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      /* Implement suggestion select */
                    }
                  }}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
