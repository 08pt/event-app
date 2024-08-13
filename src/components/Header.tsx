import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-bgColor text-white p-4 sm:px-12 sm:py-2 flex flex-col sm:flex-row items-center justify-between">
      {/* Static Text */}
      <div className="flex-1 text-center mb-4 sm:mb-0">
        <p className="text-base sm:text-lg font-ffOne text-btnColor">
          Welcome to our event! Join us on social media!
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <p className="text-base sm:text-lg font-ffOne text-btnColor">
          Follow us:
        </p>
        <div className="flex space-x-4">
          <Link href="https://facebook.com" aria-label="Facebook">
            <FaFacebookF className="text-lg sm:text-xl hover:text-dBtn text-btnColor" />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter">
            <FaTwitter className="text-lg sm:text-xl hover:text-dBtn text-btnColor" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <FaInstagram className="text-lg sm:text-xl hover:text-dBtn text-btnColor" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
