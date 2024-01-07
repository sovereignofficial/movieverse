import { memo } from "react";

export const CardBody: React.FC<{ title: string; overview: string }> = memo(
  ({ title, overview }) => {
    return (
      <div className="text-center p-2">
        <h3 className="sm:text-xs md:text-base lg:text-lg">{title}</h3>
        <p className="text-zinc-400 truncate text-xs">{overview}</p>
      </div>
    );
  }
);
