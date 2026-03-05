import React from "react";
import Link from "next/link";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = "w-24",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      <div className="font-bold text-xl tracking-tight text-neutral-900 dark:text-neutral-100">
        AMMAR <span className="text-primary-6000 italic">Tours</span>
      </div>
    </Link>
  );
};

export default Logo;
