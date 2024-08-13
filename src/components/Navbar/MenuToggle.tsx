import React from "react";
import { FaBars } from "react-icons/fa";

interface MenuToggleProps {
  isOpen: boolean;
  handleToggle: () => void;
}

const MenuToggle: React.FC<MenuToggleProps> = ({ isOpen, handleToggle }) => {
  return (
    <button className="md:hidden text-2xl" onClick={handleToggle}>
      <FaBars />
    </button>
  );
};

export default MenuToggle;
