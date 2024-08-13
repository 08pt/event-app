"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { FaTimes, FaBars } from "react-icons/fa";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-btnColor text-white px-4 sm:px-32 py-4 relative z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-4 font-extrabold uppercase">
            {navItems.map((item) => (
              <NavItem key={item.name} href={item.href} name={item.name} />
            ))}
          </div>
        </div>
        <div className="hidden md:flex">
          <button className="bg-bgColor text-tColor px-16  py-2 rounded-4xl hover:bg-tColor hover:text-bgColor">
            Explore More
          </button>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {isOpen ? "" : <FaBars />}
        </button>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-btnColor text-white p-4 transition-transform duration-500 ease-in-out z-40 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        style={{
          transition: "transform 500ms ease-in-out, opacity 500ms ease-in-out",
        }}
      >
        {isOpen && (
          <button
            className="text-2xl absolute top-4 right-4"
            onClick={handleToggle}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        )}
        <div className="flex flex-col mt-16 font-bold uppercase">
          <Logo />
          {navItems.map((item) => (
            <NavItem
              key={item.name}
              href={item.href}
              name={item.name}
              onClick={handleToggle}
            />
          ))}
          <button className="bg-bgColor hover:bg-dBtn hover:text-bgColor text-tColor px-4 py-2 rounded-4xl mt-4 mx-auto">
            Explore More
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
