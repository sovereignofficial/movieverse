import React from "react";

export const ValueImg:React.FC<{src:string,alt:string}> = ({src,alt}) => {
  return (
    <div className="h-52 w-52 lg:w-full lg:h-full rounded-xl relative overflow-hidden grid place-items-center">
      <img
        className="w-full h-full object-cover"
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};
