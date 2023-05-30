import React from "react";
import Link from "next/link";

const SidebarLink = ({ Icon, text, href }) => {
  return (
    <div className="text-[#d9d9d9] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverEffect px-4 py-2 w-fit">
      <Icon />
      <Link href={href} className="hidden xl:inline">
        {text}
      </Link>
    </div>
  );
};

export default SidebarLink;
