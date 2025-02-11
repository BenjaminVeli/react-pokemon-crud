import Header from "../components/Header";
import { useForm } from "react-hook-form";
import useUserForm from "../hooks/useUserForm";
import { Pokemon, User } from "../types";
import { getPokemons } from "../api/pokemonApi";
import { useEffect, useState } from "react";

const Home = () => {
  const { register, handleSubmit, reset } = useForm<User>();
  const { addUser } = useUserForm();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const onSubmit = (data: User) => {
    addUser(data);
    reset();
  };

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data.results));
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-semibold text-center tracking-tighter text-blackCarbon mb-10">Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blackCarbon">
                <div className="flex justify-between md:gap-x-28 gap-x-10">
                  <label htmlFor="nombres" className="font-medium text-base">Nombres :</label>
                  <input type="text" {...register("nombres", { required: true })} className="outline-none border border-blackCarbon rounded-sm py-0.5 px-2" />
                </div>

                <div className="flex justify-between md:gap-x-28 gap-x-10">
                  <label htmlFor="apellidos" className="font-medium text-base">Apellidos :</label>
                  <input type="text" {...register("apellidos", { required: true })} className="outline-none border border-blackCarbon rounded-sm py-0.5 px-2" />
                </div>

                <div className="flex justify-between md:gap-x-28 gap-x-10">
                  <label htmlFor="nickname" className="font-medium text-base">Nickname :</label>
                  <input type="text" {...register("nickname", { required: true })} className="outline-none border border-blackCarbon rounded-sm py-0.5 px-2" />
                </div>

                <div className="flex justify-between md:gap-x-28 gap-x-10">
                  <label htmlFor="correo" className="font-medium text-base">Correo :</label>
                  <input type="email" {...register("correo", { required: true })} className="outline-none border border-blackCarbon rounded-sm py-0.5 px-2" />
                </div>

                <div className="flex justify-between md:gap-x-28 gap-x-10">
                  <label htmlFor="password" className="font-medium text-base">Contraseña :</label>
                  <input type="password" {...register("password", { required: true })} className="outline-none border border-blackCarbon rounded-sm py-0.5 px-2" />
                </div>

                <div className="flex justify-between md:gap-x-28 gap-x-10">
                  <label htmlFor="fechaNacimiento" className="font-medium text-base">Fecha de Nacimiento :</label>
                  <input type="date" {...register("fechaNacimiento", { required: true })} className="outline-none border border-blackCarbon rounded-sm py-0.5 px-2" />
                </div>

                <div className="flex justify-between md:gap-x-28 gap-x-10">
                  <label htmlFor="phone" className="font-medium text-base">Teléfono :</label>
                  <input type="number" {...register("phone", { required: true })} className="outline-none border border-blackCarbon rounded-sm py-0.5 px-2" />
                </div>

                <div className="flex justify-between md:gap-x-28 gap-x-10">
                  <label htmlFor="namePokemon" className="font-medium text-base">Pokemon favorito:</label>
                  <select {...register("namePokemon", { required: true })} className="outline-none border border-blackCarbon rounded-sm py-0.5 px-2">
                    <option value="">Selecciona un Pokémon</option>
                    {pokemons.map((pokemon) => (
                      <option key={pokemon.name} value={pokemon.name}>
                        {pokemon.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit" className="bg-[#18171c] rounded-sm px-10 py-1 mt-8 cursor-pointer hover:bg-white border border-[#18171c] transition-all duration-500 group">
                <span className="text-white font-medium group-hover:text-[#18171c] transition-all duration-500">Enviar</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;