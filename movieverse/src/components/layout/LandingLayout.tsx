import { Outlet, useNavigate } from "react-router-dom";
import { LandingHeader } from "../header/LandingHeader";
import { useEffect } from "react";
import { useUsers } from "~/hooks/useUsers";

export const LandingLayout = () => {
  const navigate = useNavigate();
  const {isAuthenticated} = useUsers();
  
  useEffect(()=>{
    if(isAuthenticated){
      navigate('/movies');
    }
  },[isAuthenticated,navigate])

  return (
    <div id="landing-layout">
      <LandingHeader />
      <Outlet/>
    </div>
  );
};
