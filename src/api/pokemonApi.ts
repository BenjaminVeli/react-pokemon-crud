import axios from "axios";
import { PokemonResponse } from "../types";

export const apiURL = import.meta.env.VITE_POKEMON_API_URL as string;

export const getPokemons = async (): Promise<PokemonResponse> => {
    const response = await axios.get(apiURL);
    return response.data;
};