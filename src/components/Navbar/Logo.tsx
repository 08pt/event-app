import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <div className="text-xl font-bold">
      <Link href="/">MyLogo</Link>
    </div>
  );
};

export default Logo;
