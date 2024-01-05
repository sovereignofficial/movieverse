import { useAccount } from "~/hooks/useAccount";
import { FormContainer } from "../forms/Form";
import { useUsersStore } from "~/zustand/usersStore";
import { validateAge, validateName } from "~/utils/validate";
import { useEffect, useState } from "react";
import { useMessageListener } from "~/hooks/useMessageListener";
import Toast from "../Toast";

export const UpdateCredentials = () => {
  const { email, fullName, gender, age } = useUsersStore();
  const { updateCredentialsFn, credentialsError, credentialsSuccess, credLoading } = useAccount();
  const [messages, setMessages] = useState<
    { name: string; value: string | null }[]
  >([]);

  useEffect(() => {
    setMessages([
      { name: "credentialsError", value: credentialsError?.message || null },
      {
        name: "credentialsSuccess",
        value: credentialsSuccess ? "Credentials updated." : null,
      },
    ]);
  }, [credentialsError, credentialsSuccess]);

  const currentMessage = useMessageListener(messages);


  return (
    <FormContainer
      onSubmit={(values) => updateCredentialsFn({ email, credentials: values })}
      initialValues={{
        fullName: fullName,
        gender: gender,
        age: age,
      }}
    >
      <FormContainer.textInput
        label="Full name"
        name="fullName"
        placeholder={fullName}
        maxLength={60}
        validate={validateName}
      />
      <FormContainer.textInput
        label="Age"
        name="age"
        placeholder={age.toString()}
        maxLength={3}
        validate={validateAge}
      />
      <FormContainer.selectInput
        name="gender"
        label="Gender"
        defaultValue={gender?.toString()}
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
      <FormContainer.submitBtn className="btn-primary !my-10" disabled={credLoading}>
        Update credentials
      </FormContainer.submitBtn>
      {currentMessage && <Toast type={currentMessage.name.includes('Error') ? 'error' : 'success'} message={currentMessage.value} />}
    </FormContainer>
  );
};
