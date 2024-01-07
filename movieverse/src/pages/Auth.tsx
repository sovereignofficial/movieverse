import { Outlet } from "react-router-dom";
import { LogoDesktop } from "~/components/logo/LogoDesktop";
import { LogoMobile } from "~/components/logo/LogoMobile";

export const Auth = () => {
  return (
    <div className="page space-y-10">
      <div className="page-header">
        <div className="sm:hidden md:block">
          <LogoDesktop />
        </div>
        <div className="sm:block md:hidden">
          <LogoMobile />
        </div>
      </div>
      <div className="page-body">
        <Outlet />
      </div>
    </div>
  );
};
