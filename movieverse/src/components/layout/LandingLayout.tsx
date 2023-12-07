import { Outlet, useNavigate } from "react-router-dom";
import { LandingHeader } from "../header/LandingHeader";
import { useEffect } from "react";
import { useUsers } from "~/hooks/useUsers";

export const LandingLayout = () => {
  const navigate = useNavigate();
  const {isAuthenticated} = useUsers();
  
  useEffect(()=>{
    if(isAuthenticated){
      navigate('/popular');
    }
  },[isAuthenticated,navigate])

  return (
    <div>
      <LandingHeader />
      LandingLayout
      <Outlet/>
    </div>
  );
};
