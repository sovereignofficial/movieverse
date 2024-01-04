import { useUsersStore } from "~/zustand/usersStore";

export const UserInfoList = () => {
  const { fullName, email, age, gender } = useUsersStore();
  const getGender = (gender: number) => {
    return gender === 0 ? "Female" : "Male";
  };
  return (
    <div className="bg-gray-900 p-5 rounded-xl space-y-4">
      <h3>Credentials</h3>
      <ul>
        <li className="grid grid-cols-2">
          <p className="font-medium">Full name</p>
          <p>{fullName}</p>
        </li>
        <li className="grid grid-cols-2">
          <p className="font-medium">Email address</p>
          <p>{email}</p>
        </li>
        <li className="grid grid-cols-2">
          <p className="font-medium">Age</p>
          <p>{age} years old</p>
        </li>
        <li className="grid grid-cols-2">
          <p className="font-medium">Gender </p>
          <p>{getGender(gender)}</p>
        </li>
      </ul>
    </div>
  );
};
