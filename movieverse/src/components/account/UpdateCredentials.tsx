import { useAccount } from "~/hooks/useAccount";
import { FormContainer } from "../forms/Form";
import { useUsersStore } from "~/zustand/usersStore";

export const UpdateCredentials = () => {
  const { email, fullName, gender, age } = useUsersStore();
  const { updateCredentialsFn } = useAccount();

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
      />
      <FormContainer.textInput
        label="Age"
        name="age"
        placeholder={age.toString()}
        maxLength={3}
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
      <FormContainer.submitBtn className="btn-primary" disabled={false}>
        Update credentials
      </FormContainer.submitBtn>
    </FormContainer>
  );
};
