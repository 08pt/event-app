import React from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  name: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, name, onClick }) => {
  return (
    <Link
      href={href}
      className="hover:bg-gray-700 px-3 py-2 rounded"
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default NavItem;
