// INTERFACE FOR USER
export interface User {
    id: number;
    nombres: string;
    apellidos: string;
    nickname: string;
    correo: string;
    password: string;
    fechaNacimiento: string;
    phone: string;
    namePokemon: string;
    pokemonImageUrl?: string; 
}

// INTERFACE FOR HEADER
export interface NavItemsProps {
    closeMenu: (() => void) | null;
}

// INTERFACE FOR Pokemon
export interface Pokemon {
    name: string;
    url: string;
    sprites: {
        front_default: string;
    };
}

// INTERFACE FOR PokemonObject
export interface PokemonResponse {
    results: Pokemon[];
}