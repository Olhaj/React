import { useContext } from "react";
import GlobalContext from "../context/index";

function UserList() {
  const { users } = useContext(GlobalContext);

  if (!users || users.length === 0) {
    return <p>Empty List</p>;
  }
  return (
    <div>
      <h1>User list</h1>
      {users.map((user) => {
        return (
          <li key={user.id}>
            <span>{user.username}</span>
            <span>user.email</span>
          </li>
        );
      })}
    </div>
  );
}

export default UserList;
