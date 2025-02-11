import { useState } from "react";
import { User } from "../types";

const useUserForm = () => {
  const [users, setUsers] = useState<User[]>(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const addUser = (data: User) => {
    const newUsers = [...users, data];
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return { users, addUser };
};

export default useUserForm;