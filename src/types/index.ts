// INTERFACE FOR USER
export interface User {
    nombres: string;
    apellidos: string;
    nickname: string;
    correo: string;
    password: string;
    fechaNacimiento: string;
    phone: string;
}

// INTERFACE FOR HEADER
export interface NavItemsProps {
    closeMenu: (() => void) | null;
}