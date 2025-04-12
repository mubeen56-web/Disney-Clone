import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import avtar from "../assets/images/don.svg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical, HiSearch } from "react-icons/hi";
import Headeritem from "./Headeritem";

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINAL",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex items-center gap-8">
        <img src={logo} alt="" className="w-[80px] object-cover md:w-[100px]" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <Headeritem name={item.name} Icon={item.icon} />
          ))}
        </div> 
        <div className="md:hidden flex gap-8">
          {menu.map((item,index) =>index<3&& (
            <Headeritem name={''} Icon={item.icon} />
          ))}
          <div className="md:hidden relative" onClick={()=>setToggle(!toggle)}>
            <Headeritem name={''} Icon={HiDotsVertical} />
           {toggle? <div className="absolute top-8 left-4 bg-gray-900 border-[1px] border-gray-700 rounded-lg py-2 px-4">
            {menu.map((item,index) =>index>2&& (
            <Headeritem name={item.name} Icon={item.icon} />
          ))}
          </div>
          :null}
        </div>
        </div>  
      </div>
      <div>
        <img src={avtar} alt="" className="w-[50px] rounded-full" />
      </div>
    </div>
  );
};

export default Header;
