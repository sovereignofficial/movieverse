import { useUsersStore } from "~/zustand/usersStore";

export const UserInfoList = () => {
  const { fullName, email, age, gender } = useUsersStore();
  const getGender = (gender: number) => {
    return gender === 0 ? "Female" : "Male";
  };
  return (
    <div className="bg-gray-900 p-5 rounded-xl space-y-4">
      <h3>Credentials</h3>
      <ul className="space-y-4">
        <li className="lg:grid lg:grid-cols-2">
          <p className="font-medium sm:text-sm">Full name</p>
          <p>{fullName}</p>
        </li>
        <li className="lg:grid lg:grid-cols-2">
          <p className="font-medium sm:text-sm">Email address</p>
          <p>{email}</p>
        </li>
        <li className="lg:grid lg:grid-cols-2">
          <p className="font-medium sm:text-sm">Age</p>
          <p>{age ?? "?"} years old</p>
        </li>
        <li className="lg:grid lg:grid-cols-2">
          <p className="font-medium sm:text-sm">Gender </p>
          <p>{getGender(gender)}</p>
        </li>
      </ul>
    </div>
  );
};
