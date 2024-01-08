import React from "react";

export const ProfileImage:React.FC<{src?:string | null}> = ({src}) => {
  return (
    <div className="relative overflow-hidden rounded-full sm:w-10 sm:h-10 md:w-20 md:h-20 lg:w-40 lg:h-40">
      <img className="w-full h-full object-center" src={src ? src : "/avatar.jpg"} loading="lazy" alt="user-profile-image" />
    </div>
  );
};
