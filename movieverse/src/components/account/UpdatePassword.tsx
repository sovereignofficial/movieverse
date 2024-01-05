import { useAccount } from "~/hooks/useAccount";
import { FormContainer } from "../forms/Form";
import { useUsersStore } from "~/zustand/usersStore";
import { validatePassword } from "~/utils/validate";
import { useEffect, useState } from "react";
import { useMessageListener } from "~/hooks/useMessageListener";
import Toast from "../Toast";

export const UpdatePassword = () => {
  const { email } = useUsersStore();
  const { updatePasswordFn, passwordError, passwordSuccess, passwordLoading } = useAccount();

  const [messages, setMessages] = useState<
    { name: string; value: string | null }[]
  >([]);

  useEffect(() => {
    setMessages([
      { name: "passwordError", value: passwordError?.message || null },
      {
        name: "passwordSuccess",
        value: passwordSuccess ? "Credentials updated." : null,
      },
    ]);
  }, [passwordError, passwordSuccess]);

  const currentMessage = useMessageListener(messages);

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
        validate={validatePassword}
      />
      <FormContainer.submitBtn className="btn-primary !my-10" disabled={passwordLoading}>
        Update password
      </FormContainer.submitBtn>
      {currentMessage && (
        <Toast
          type={currentMessage.name.includes("Error") ? "error" : "success"}
          message={currentMessage.value}
        />
      )}
    </FormContainer>
  );
};
