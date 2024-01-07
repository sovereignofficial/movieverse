import { memo } from "react";

export const CardHeader: React.FC<{ imgAddress: string; title: string }> = memo(
  ({ imgAddress, title }) => {
    return (
      <div className="w-full flex items-center justify-center p-2">
        <div className="lg:h-60 lg:w-60 md:w-40 md:h-40 sm:aspect-square rounded-xl flex items-center justify-center relative overflow-hidden">
          <img
            loading="lazy"
            src={imgAddress}
            alt={`${title} poster`}
            className="w-full h-full object-center"
          />
        </div>
      </div>
    );
  }
);
