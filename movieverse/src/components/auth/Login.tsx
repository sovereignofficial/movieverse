import { useUsers } from "~/hooks/useUsers";
import { FormContainer } from "../forms/Form";
import { Link } from "react-router-dom";
import { validatePassword } from "~/utils/validate";
import Toast from "../Toast";

export const Login = () => {
  const { loginUser, loginError } = useUsers();
  console.log(loginError?.message);
  
  return (
   <>
      { loginError && <Toast message={loginError.message} type="error"/>}
    <div className="page space-y-10">

      <div className="page-header">
         <h1>Log in to your account</h1>
      </div>
      <div className="page-body  grid place-items-center text-center !w-8/12 mx-auto">
        <FormContainer
          onSubmit={(values) => loginUser(values)}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          <FormContainer.emailInput
            name="email"
            label="Email address"
            placeholder="example@example.co"
            maxLength={100}
          />
          <FormContainer.passwordInput
            validate={validatePassword}
            label="Password"
            name="password"
            placeholder="*******"
            maxLength={60}
          />
          <FormContainer.submitBtn
            className="btn-primary w-2/12 mx-auto !mt-14"
            disabled={false}
          >
            Login
          </FormContainer.submitBtn>
          <Link to={"/auth/register"} className="text-red-500">
            Don't have account? Create a new one!
          </Link>
        </FormContainer>
      </div>
    </div>
   </>
  );
};
