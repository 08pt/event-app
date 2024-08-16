import Link from "next/link";
import React, { useState } from "react";

interface DropdownProps {
  label: string;
  items: { name: string; href: string }[];
  onClick?: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="hover:text-gray-300 uppercase font-extrabold">
        {label}
      </button>
      <div
        className={`absolute left-0 py-2 bg-white text-black rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={onClick}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
