import { useAccount } from "~/hooks/useAccount";
import { FormContainer } from "../forms/Form";
import { useUsersStore } from "~/zustand/usersStore";

export const UpdatePassword = () => {
  const { email } = useUsersStore();
  const { updatePasswordFn } = useAccount();

  return (
    <FormContainer
      onSubmit={(values) =>
        updatePasswordFn({ email, newPassword: values.password })
      }
      initialValues={{
        password: "",
      }}
    >
      <FormContainer.passwordInput
        label="Password"
        name="password"
        placeholder="New password"
        maxLength={60}
      />
      <FormContainer.submitBtn className="btn-primary" disabled={false}>
        Update password
      </FormContainer.submitBtn>
    </FormContainer>
  );
};
