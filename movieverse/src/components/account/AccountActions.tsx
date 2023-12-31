import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useUsers } from "~/hooks/useUsers";

export const AccountActions = () => {
    const {logOutUser} = useUsers();
    const navigate = useNavigate();

    const handleLogOut = () =>{
        logOutUser()
        navigate('/auth/login');
    }
    
    return (
        <div className="flex gap-1 items-center">
            <button className="btn-premium" onClick={()=>navigate('/pricing')}>Buy premium</button>
            <button className="btn-primary flex items-center justify-center gap-2" onClick={()=>handleLogOut()}><BiLogOut size={20}/> Log out</button>
        </div>
    );
}