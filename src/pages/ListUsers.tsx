import Header from "../components/Header";
import toast, { Toaster } from "react-hot-toast";

import EditButton from "@/components/EditButton";
import ViewButton from "@/components/ViewButton";
import DeleteButton from "../components/DeleteButton";
import useUserForm from "@/hooks/useUserForm";
import useUserSearch from "@/hooks/useUserSearch";
import { User } from "@/types";

import { IoSearchSharp } from "react-icons/io5";

const ListUsers = () => {
  const { users, deleteUser, editUser } = useUserForm();
  const { searchQuery, setSearchQuery, filteredUsers } = useUserSearch(users);

  const handleDeleteUser = (id: number) => {
    deleteUser(id);
    toast.success('Usuario eliminado exitosamente');
  };

  const handleEditUser = (id: number, data: Partial<User>) => {
    editUser(id, data);
    toast.success('Usuario actualizado exitosamente');
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <Toaster />
      <div className="pt-16 sm:pt-24">
        <div className="container">
          <div className="relative overflow-hidden">
            <div className="p-4">
              <h2 className="text-4xl md:text-6xl font-semibold text-center tracking-tighter text-blackCarbon">
                Lista de Usuarios
              </h2>
            </div>

            <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 pb-4">
              <div className="flex px-4 py-2 items-center border border-gray-300 rounded-lg w-80 hover:border-blackCarbon transition-all duration-500 group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Escriba el nickname de un usuario"
                  className="outline-none text-sm w-full"
                />
                <IoSearchSharp
                  size={20}
                  className="text-gray-300 group-hover:text-blackCarbon transition-all duration-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-blackCarbon">
                  <tr>
                    <th scope="col" className="p-4">Id</th>
                    <th scope="col" className="p-4">Nombres</th>
                    <th scope="col" className="p-4">Apellidos</th>
                    <th scope="col" className="p-4">Nickname</th>
                    <th scope="col" className="p-4">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="border-b dark:border-gray-300 dark:hover:bg-gray-300 transition-all duration-500">
                      <td className="px-4 py-3 font-medium whitespace-nowrap text-stone-900">{user.id}</td>
                      <td className="px-4 py-3 font-medium whitespace-nowrap text-stone-900">{user.nombres}</td>
                      <td className="px-4 py-3 font-medium whitespace-nowrap text-stone-900">{user.apellidos}</td>
                      <td className="px-4 py-3 font-medium whitespace-nowrap text-stone-900">{user.nickname}</td>
                      <td className="px-4 py-3 font-medium whitespace-nowrap text-stone-900">
                        <div className="flex items-center justify-center space-x-4">
                          <ViewButton user={user} />
                          <EditButton user={user} onEdit={handleEditUser} />
                          <DeleteButton userId={user.id} onDelete={handleDeleteUser} />
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredUsers.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-4 py-3 text-center text-gray-500">
                        No se encontraron usuarios con ese nickname.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUsers;