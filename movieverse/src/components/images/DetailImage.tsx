import { memo } from "react";

export const DetailImage: React.FC<{ imgUrl: string; alt: string }> = memo(
  ({ imgUrl, alt }) => {
    return (
      <div className="aspect-square rounded-xl w-full relative overflow-hidden">
        <img
          loading="lazy"
          className="w-full h-full object-fill"
          src={imgUrl}
          alt={alt}
        />
      </div>
    );
  }
);
