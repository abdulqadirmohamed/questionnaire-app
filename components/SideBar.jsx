import Link from "next/link";
import React from "react";
import {BiTachometer} from 'react-icons/bi'
import {AiOutlineForm, AiOutlineFundProjectionScreen, AiOutlineSetting} from 'react-icons/ai'

const SideBar = () => {
  const sideLinks = [
    { id: 1, url: "/", title: "Dashboard", icon: <BiTachometer/> },
    { id: 3, url: "/forms", title: "Forms", icon: <AiOutlineForm/> },
    { id: 2, url: "/test", title: "Projects", icon: <AiOutlineFundProjectionScreen/> },
    { id: 4, url: "/features", title: "Setting", icon: <AiOutlineSetting/> },
    { id: 4, url: "/research", title: "Research", icon: <AiOutlineSetting/> },
  ];
  return (
    <div className="w-fit bg-white h-screen p-5 flex flex-col items-left justify-between">
      <div className="flex flex-col gap-8 px-2">
        {sideLinks.map((sideLink) => (
          <div className="flex items-center gap-2 group hover:bg-[#545FDD] hover:text-white px-4 py-2 rounded-md cursor-pointer">
            <span className="text-[#545FDD] group-hover:text-white">{sideLink.icon}</span>
            <Link href={sideLink.url}>{sideLink.title}</Link>
          </div>
        ))}
      </div>
      <div>
        <Link href="#">Logout</Link>
      </div>
    </div>
  );
};

export default SideBar;
