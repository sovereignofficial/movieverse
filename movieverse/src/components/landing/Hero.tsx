import { ReactNode } from "react";
import { LandingSection } from "../LandingSection";

export const Hero:React.FC<{children:ReactNode, aurora:boolean}> = ({aurora,children}) => {
  return (
    <LandingSection name="hero">
      <div className={`flex flex-col justify-center items-center gap-10 col-span-2 ${aurora &&" aurora-bg-extra"} w-full h-full`}>
        <div className="flex flex-col items-center">
            {children}
        </div>
      </div>
    </LandingSection>
  );
};
