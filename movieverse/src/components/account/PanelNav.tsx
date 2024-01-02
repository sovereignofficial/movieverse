import { useLocation, useNavigate } from 'react-router-dom'

export const PanelNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    console.log(pathname);

  return (
    <nav className='flex justify-center gap-1'>
        <button onClick={()=>navigate(`/account`)} className={`btn-primary !rounded  !bg-transparent border-b ${pathname === "/account" ? "border-red-500" : "border-zinc-500"} `}>Recent Activities</button>
        <button onClick={()=>navigate(`/account/movies`)} className={`btn-primary !rounded  !bg-transparent border-b ${pathname === "/account/movies" ? "border-red-500" : "border-zinc-500"} `}>Favorite Movies</button>
        <button onClick={()=>navigate(`/account/tv`)} className={`btn-primary !rounded  !bg-transparent border-b ${pathname === "/account/tv" ? "border-red-500" : "border-zinc-500"} `}>Favorite Tv Shows</button>
        <button onClick={()=>navigate(`/account/people`)} className={`btn-primary !rounded  !bg-transparent border-b ${pathname === "/account/people" ? "border-red-500" : "border-zinc-500"} `}>Favorite People</button>
        <button onClick={()=>navigate(`/account/settings`)} className={`btn-primary !rounded  !bg-transparent border-b ${pathname === "/account/settings" ? "border-red-500" : "border-zinc-500"} `}>Settings</button>
    </nav>
  )
}
