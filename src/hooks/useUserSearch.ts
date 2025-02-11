import { useState } from "react";
import { User } from "../types";

const useUserSearch = (users: User[]) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter(user =>
    user.nickname.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return { searchQuery, setSearchQuery, filteredUsers };
};

export default useUserSearch;
