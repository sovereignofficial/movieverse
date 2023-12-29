import { useNavigate } from 'react-router-dom'

export const PanelNav = () => {
    const navigate = useNavigate();

  return (
    <nav className='flex justify-center gap-1'>
        <button onClick={()=>navigate(`/account`)} className='btn-primary !rounded !bg-zinc-900'>Recent Activities</button>
        <button onClick={()=>navigate(`/account/movies`)} className='btn-primary !rounded !bg-zinc-900'>Favorite Movies</button>
        <button onClick={()=>navigate(`/account/tv`)} className='btn-primary !rounded !bg-zinc-900'>Favorite Tv Shows</button>
        <button onClick={()=>navigate(`/account/people`)} className='btn-primary !rounded !bg-zinc-900'>Favorite People</button>
        <button onClick={()=>navigate(`/account/settings`)} className='btn-primary !rounded !bg-zinc-900'>Settings</button>
    </nav>
  )
}
