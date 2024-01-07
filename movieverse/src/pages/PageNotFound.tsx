import { useNavigate } from "react-router-dom";
import { DataNotFound } from "~/components/DataNotFound";
import { LogoDesktop } from "~/components/logo/LogoDesktop";
import { LogoMobile } from "~/components/logo/LogoMobile";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page space-y-32">
      <div className="sm:hidden md:block">
        <LogoDesktop />
      </div>
      <div className="sm:block md:hidden">
        <LogoMobile />
      </div>
      <div className="page-header space-x-4">
        <button className="btn-secondary" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1>404 Not Found</h1>
      </div>
      <div className="page-body h-full grid place-items-center ">
        <DataNotFound message="We could not found the page you're looking for due to 404 error." />
      </div>
    </div>
  );
};
