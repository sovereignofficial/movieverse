import React from "react";

export const ProfileImage:React.FC<{src?:string | null}> = ({src}) => {
  return (
    <div className="relative overflow-hidden rounded-full sm:w-20 sm:h-20 lg:w-40 lg:h-40">
      <img className="w-full h-full object-center" src={src ? src : "/avatar.jpg"} />
    </div>
  );
};
