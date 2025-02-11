import Header from "../components/Header";
import { User } from "../types";
import { useEffect, useState } from "react";

const ListUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="container">
          {users.map((user, index) => (
            <li key={index}>
              <p>Nombres: {user.nombres}</p>
              <p>Apellidos: {user.apellidos}</p>
              <p>Nickname: {user.nickname}</p>
              <p>Correo: {user.correo}</p>
              <p>Fecha de Nacimiento: {user.fechaNacimiento}</p>
              <p>Teléfono: {user.phone}</p>
            </li>
          ))}
        </div>
      </div>
    </>
  )
}

export default ListUsers