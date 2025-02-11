import Header from "../components/Header";
import { useForm } from "react-hook-form";
import useUserForm from "../hooks/useUserForm";
import { Pokemon, User } from "../types";
import { getPokemons, getPokemonDetails } from "../api/pokemonApi";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const { register, handleSubmit, reset, watch } = useForm<User>();
  const { addUser } = useUserForm();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const watchPokemon = watch("namePokemon");

  const onSubmit = (data: User) => {
    addUser(data);
    reset();
    toast.success("Formulado enviado correctamente!");
  };

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data.results));
  }, []);

  useEffect(() => {
    if (watchPokemon) {
      getPokemonDetails(watchPokemon).then((data) => setSelectedPokemon(data));
    } else {
      setSelectedPokemon(null);
    }
  }, [watchPokemon]);

  return (
    <>
      <Header />
      <Toaster />
      <div className="flex justify-center items-center min-h-screen">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-semibold text-center tracking-tighter text-blackCarbon mb-10">Formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blackCarbon">
                <div className="flex flex-col">
                  <label htmlFor="nombres" className="font-medium text-base">Nombres :</label>
                  <input type="text" {...register("nombres", { required: true })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Ingrese sus nombres" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="apellidos" className="font-medium text-base">Apellidos :</label>
                  <input type="text" {...register("apellidos", { required: true })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Ingrese sus apellidos" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="nickname" className="font-medium text-base">Nickname :</label>
                  <input type="text" {...register("nickname", { required: true })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Ingrese su nickname" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="correo" className="font-medium text-base">Correo :</label>
                  <input type="email" {...register("correo", { required: true })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Ingrese su correo" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="password" className="font-medium text-base">Contraseña :</label>
                  <input type="password" {...register("password", { required: true })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Ingrese su contraseña" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="fechaNacimiento" className="font-medium text-base">Fecha de Nacimiento :</label>
                  <input type="date" {...register("fechaNacimiento", { required: true })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="font-medium text-base">Teléfono :</label>
                  <input type="number" {...register("phone", { required: true })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Ingrese su teléfono" />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="namePokemon" className="font-medium text-base">Pokemon favorito:</label>
                  <select {...register("namePokemon", { required: true })} className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">
                    <option value="">Selecciona un Pokémon</option>
                    {pokemons.map((pokemon) => (
                      <option key={pokemon.name} value={pokemon.name}>
                        {pokemon.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  {selectedPokemon && selectedPokemon.sprites && (
                    <div className="flex flex-col items-center">
                      <img
                        src={selectedPokemon.sprites.front_default}
                        alt={selectedPokemon.name}
                        className="w-24 h-24 object-contain"
                      />
                      <p className="text-sm font-medium capitalize">
                        {selectedPokemon.name}
                      </p>
                    </div>
                  )}
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