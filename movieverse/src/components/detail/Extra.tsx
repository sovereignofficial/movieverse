import React, { ReactNode } from "react";


export const Extra: React.FC<{
  children: ReactNode[];
}> = ({ children }) => {
  return (
    <ul className="grid grid-cols-2 gap-2 p-5 sm:w-full md:w-9/12 mx-auto">
      {children.map((item,key) => (
        <li key={key} className="flex justify-start items-center gap-1">{item}</li>
      ))}

    </ul>
  );
};
