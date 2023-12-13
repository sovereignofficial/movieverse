import React from 'react'
import { FaRegClock, FaDollarSign, FaCalendar } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";

export const MovieInfoList:React.FC<{budget:number,runtime:number,revenue:number,release_date:string}> = ({budget,runtime,revenue,release_date}) => {
  return (
    <ul className="grid grid-cols-2">
    <li className="flex justify-start items-center gap-1">
      <TbMoneybag style={{ color: "#fa3b2d" }} />{" "}
      <p className='font-medium'>${budget} budget</p>
    </li>
    <li className="flex justify-start items-center gap-1">
      <FaRegClock style={{ color: "#fa3b2d" }} />{" "}
      <p className='font-medium'>{runtime} min</p>
    </li>
    <li className="flex justify-start items-center gap-1">
      <FaDollarSign style={{ color: "#fa3b2d" }} />{" "}
      <p className='font-medium'>{revenue}M revenue</p>
    </li>
    <li className="flex justify-start items-center gap-1">
      <FaCalendar style={{ color: "#fa3b2d" }} />{" "}
      <p className='font-medium'>{release_date}</p>
    </li>
  </ul>
  )
}
