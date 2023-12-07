import { useRef } from "react"
import { Link } from "react-router-dom"
import { useUsers } from "~/hooks/useUsers";

export const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const {loginUser} = useUsers();

  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const loginCredentials = {
      email:email.current,
      password:password.current
    }
    loginUser(loginCredentials);
  }
  return (
    <div>
       <form className="text-black" onSubmit={(e)=>handleLogin(e)}>
        <input onChange={(e)=>email.current = e.target.value} type="text" placeholder="email address"/>
        <input onChange={(e)=>password.current = e.target.value} type="password" />
        <button className="text-red-500" type="submit">Login</button>
       </form>
       <Link to={'/auth/register'}>or create a new account</Link>
    </div>
  )
}
