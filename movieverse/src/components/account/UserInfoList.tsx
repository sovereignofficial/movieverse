import { useUsersStore } from "~/zustand/usersStore"

export const UserInfoList = () => {
    const {fullName,email,age,gender} = useUsersStore();

  return (
    <div className="bg-zinc-900 p-5 rounded-xl space-y-4">
        <h3>Credentials</h3>
        <ul>
            <li>Full name {fullName}</li>
            <li>Email address {email}</li>
            <li>Age {age} years old.</li>
            <li>Gender {gender}</li>
        </ul>
    </div>
  )
}
