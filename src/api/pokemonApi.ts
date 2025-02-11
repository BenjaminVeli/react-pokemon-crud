import axios from "axios";
import { Pokemon, PokemonResponse } from "../types";

export const apiURL = import.meta.env.VITE_POKEMON_API_URL as string;

export const getPokemons = async (): Promise<PokemonResponse> => {
    const response = await axios.get(`${apiURL}/?limit=151`);
    return response.data;
};

export const getPokemonDetails = async (name: string): Promise<Pokemon> => {
    const response = await axios.get(`${apiURL}/${name}`);
    return response.data;
};
