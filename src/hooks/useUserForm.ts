import { useState, useEffect } from "react";
import { User } from "../types";

const useUserForm = () => {
  const [users, setUsers] = useState<User[]>(() => {
    try {
      const savedUsers = localStorage.getItem("users");
      return savedUsers ? JSON.parse(savedUsers) : [];
    } catch (error) {
      console.error("Error parsing users from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (data: User) => {
    setUsers(prevUsers => {
      const nextId = prevUsers.length > 0
        ? Math.max(...prevUsers.map(user => user.id)) + 1
        : 1;

      return [...prevUsers, { ...data, id: nextId }];
    });
  };

  const deleteUser = (id: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return { users, addUser, deleteUser };
};

export default useUserForm;
