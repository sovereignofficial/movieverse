import { useNavigate } from "react-router-dom";
import { useUsers } from "~/hooks/useUsers";
import { FormContainer } from "../forms/Form";
import { validateAge, validateName, validatePassword } from "~/utils/validate";
import Toast from "../Toast";

export const Register = () => {
  const navigate = useNavigate();
  const { registerUser, registerError } = useUsers();

  return (
    <>
      {registerError && <Toast message={registerError.message} type="error" />}
      <section className="page space-y-10">
        <div className="page-header space-x-5">
          <button className="btn-secondary" onClick={() => navigate('/auth/login')}>
            Back
          </button>
          <h1>Create an account</h1>
        </div>
        <div className="page-body grid place-items-center text-center !lg:w-8/12 mx-auto space-y-6">
          <FormContainer
            onSubmit={(values) => registerUser(values)}
            initialValues={{
              fullName: "",
              gender: "",
              age: 12,
              email: "",
              password: "",
            }}
          >
            <FormContainer.textInput
              label="Full name"
              name="fullName"
              placeholder={"John Doe"}
              maxLength={60}
              validate={validateName}
            />
            <FormContainer.textInput
              label="Age"
              name="age"
              placeholder={"18"}
              maxLength={3}
              validate={validateAge}
            />
            <FormContainer.selectInput
              name="gender"
              label="Gender"
              options={[
                {
                  value: "0",
                  label: "Female",
                },
                {
                  value: "1",
                  label: "Male",
                },
              ]}
            />
            <FormContainer.emailInput
              name="email"
              label="Email address"
              placeholder="example@example.co"
              maxLength={100}
            />
            <FormContainer.passwordInput
              label="Password"
              name="password"
              placeholder="*******"
              maxLength={60}
              validate={validatePassword}
            />
            <FormContainer.submitBtn
              className="btn-primary mx-auto !mt-14 "
              disabled={false}
            >
              Register
            </FormContainer.submitBtn>
          </FormContainer>
        </div>
      </section>
    </>
  );
};
