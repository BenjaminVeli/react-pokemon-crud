import { useState, useEffect } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogCancel }
    from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RiBallPenFill } from "react-icons/ri";
import { getPokemons, getPokemonDetails } from "../api/pokemonApi";
import { Pokemon, User } from "../types";

interface EditButtonProps {
    user: User;
    onEdit: (id: number, data: Partial<User>) => void;
}

const EditButton = ({ user, onEdit }: EditButtonProps) => {
    const [formData, setFormData] = useState({
        nombres: user?.nombres || '',
        apellidos: user?.apellidos || '',
        nickname: user?.nickname || '',
        correo: user?.correo || '',
        password: user?.password || '',
        fechaNacimiento: user?.fechaNacimiento || '',
        phone: user?.phone || '',
        namePokemon: user?.namePokemon || '',
        pokemonImageUrl: user.pokemonImageUrl || '',
    });

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

    useEffect(() => {
        getPokemons().then((data) => setPokemons(data.results));
    }, []);

    useEffect(() => {
        if (formData.namePokemon) {
            getPokemonDetails(formData.namePokemon).then((data) => {
                setSelectedPokemon(data);
                setFormData(prev => ({
                    ...prev,
                    pokemonImageUrl: data.sprites.front_default
                }));
            });
        }
    }, [formData.namePokemon]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        onEdit(user.id, formData);
    };

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">
                    <span className="text-blue-500">Editar</span>
                    <RiBallPenFill className="text-blue-500" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="max-h-[400px] overflow-y-auto">
                <AlertDialogHeader>
                    <AlertDialogTitle>Editar información del usuario</AlertDialogTitle>
                    <AlertDialogDescription>
                        <div className="space-y-4 py-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nombres
                                </label>
                                <input
                                    type="text"
                                    name="nombres"
                                    value={formData.nombres}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    name="apellidos"
                                    value={formData.apellidos}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Nickname
                                </label>
                                <input
                                    type="text"
                                    name="nickname"
                                    value={formData.nickname}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    name="correo"
                                    value={formData.correo}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Fecha de Nacimiento
                                </label>
                                <input
                                    type="date"
                                    name="fechaNacimiento"
                                    value={formData.fechaNacimiento}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Pokemon favorito</label>
                                <select
                                    name="namePokemon"
                                    value={formData.namePokemon}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                >
                                    <option value="">Selecciona un Pokémon</option>
                                    {pokemons.map((pokemon) => (
                                        <option key={pokemon.name} value={pokemon.name}>
                                            {pokemon.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {selectedPokemon && (
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
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>
                        Guardar cambios
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default EditButton;