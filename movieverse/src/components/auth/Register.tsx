import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "~/hooks/useUsers";
import { RegisterUser } from "~/types/users";

export const Register = () => {
  const navigate = useNavigate();
  const email = useRef("");
  const fullName = useRef("");
  const age = useRef(0);
  const password = useRef("");
  const {registerUser} = useUsers();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData:RegisterUser = {
      email:email.current,
      fullName:fullName.current,
      password:password.current,
      age:age.current
    }
    registerUser(userData);
  };
  
  return (
    <section>
      <div>
        <h2>Create an account</h2>
        <button onClick={()=> navigate(-1)}>Back</button>
      </div>
      <form className="text-black" onSubmit={(e) => handleRegister(e)}>
        <input
          onChange={(e) => (email.current = e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => (fullName.current = e.target.value)}
          type="text"
          placeholder="full name"
        />
        <input onChange={(e)=> age.current = Number(e.target.value)} type="number" min={0} placeholder="age"/>
        <input
          onChange={(e) => (password.current = e.target.value)}
          type="password"
        />
        <button className="text-white" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};
