import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUsers } from "~/hooks/useUsers";

export const ProtectedRoutes = () => {
   const navigate = useNavigate();
  const {
    isAuthenticating,
    isAuthenticated,
    authSuccess
  } = useUsers();

  useEffect(()=>{
    if(!isAuthenticated && !isAuthenticating && authSuccess){
      navigate('/auth/login');
    }
  },[isAuthenticated,navigate,isAuthenticating,authSuccess])

  if (isAuthenticating) return <p>Authenticating...</p>;

  if (isAuthenticated) return <Outlet />;
};
