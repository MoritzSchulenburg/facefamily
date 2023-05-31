import React from "react";
import SidebarLink from "./SidebarLink";
import { AiFillHome, AiOutlineInbox } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Logo from "../public/TreeLogo.png";
import { AiOutlineCalendar, AiOutlineHeart } from "react-icons/ai";

const Sidebar = () => {
  const { data: session } = useSession();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full border-r border-gray-400 pr-0 xl:pr-8">
      <div className="flex items-center justify-center w-14 h-14  p-0 xl:ml-24">
        <Image src={Logo} width={300} alt="Logo" />
        <span className="ml-2 text-white text-lg font-bold">facefamily</span>
      </div>
      <div className="space-y-2 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink href="/" text="Home" Icon={AiFillHome} />
        {/* <SidebarLink href="/" text="Messages" Icon={AiOutlineInbox} /> */}
        <SidebarLink href="/likes" text="Likes" Icon={AiOutlineHeart} />
        <SidebarLink
          href="/calendar"
          text="Calendar"
          Icon={AiOutlineCalendar}
        />
        <SidebarLink
          href="/"
          text="More"
          Icon={HiOutlineDotsCircleHorizontal}
        />
      </div>

      {/* <button className="hidden xl:inline ml-auto bg-[#C4C595] text-white rounded-full w-52 h-[52px] text-lg font-bold hover:bg-black">
        POST
      </button> */}
      <div class="flex items-center justify-center p-0 xl:ml-24 mt-10">
        <div class="flex flex-col items-center">
          <img
            src={session?.user?.image}
            alt=""
            class="h-40 w-40 rounded-full xl:mr-2.5"
          />
          <div class="text-center">
            <h4 class="font-bold text-white">{session?.user?.name}</h4>
            <p class="text-[#C4C595]">@{session?.user?.tag}</p>
          </div>
        </div>
      </div>

      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverEffect xl:ml-auto xl:-mr-5 px-4 py-2"
        onClick={signOut}
      >
        <img
          src={session?.user?.image}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Logout</h4>
        </div>

        <BsThreeDots className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
