import React from "react";

export const ProfileImage:React.FC<{src?:string | null}> = ({src}) => {
  return (
    <div className="relative overflow-hidden rounded-full w-40 h-40">
      <img className="w-full h-full object-center" src={src ? src : "/avatar.jpg"} />
    </div>
  );
};
