import { Outlet } from "react-router-dom";
import { Logo } from "~/components/Logo";

export const Auth = () => {
  return (
    <div className="page space-y-10">
      <div className="page-header">
        <Logo/>
      </div>
      <div className="page-body">
        <Outlet />
      </div>
    </div>
  );
};
