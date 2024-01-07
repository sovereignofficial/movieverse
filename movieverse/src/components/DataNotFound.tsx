import React from "react";
import { PiPopcornDuotone } from "react-icons/pi";

export const DataNotFound: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div className="grid place-items-center gap-2">
       <PiPopcornDuotone style={{color:'gray'}} size={40}/>
      <p className="text-indigo-100">{message}</p>
    </div>
  );
};
