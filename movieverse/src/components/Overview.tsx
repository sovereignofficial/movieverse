import React from "react";
import { FaRegClock, FaDollarSign, FaCalendar } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";

export const Overview: React.FC<{
  budget: number;
  runtime: number;
  revenue: number;
  release_date: string;
}> = ({ budget, runtime, revenue, release_date }) => {
  return (
    <ul className="grid grid-cols-2 gap-2">
      <li className="flex justify-start items-center gap-1">
        <TbMoneybag size={20} />
        <p className="font-medium">${budget} budget</p>
      </li>
      <li className="flex justify-start items-center gap-1">
        <FaRegClock size={20} />
        <p className="font-medium">{runtime} min</p>
      </li>
      <li className="flex justify-start items-center gap-1">
        <FaDollarSign size={20} />
        <p className="font-medium">{revenue}M revenue</p>
      </li>
      <li className="flex justify-start items-center gap-1">
        <FaCalendar size={20} />
        <p className="font-medium">{release_date}</p>
      </li>
    </ul>
  );
};