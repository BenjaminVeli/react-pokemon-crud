import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger }
    from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RiEyeFill } from "react-icons/ri";
import { User } from "@/types";

interface ViewButtonProps {
    user: User;
}

const ViewButton = ({ user }: ViewButtonProps) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">
                    <span className="text-yellow-500">Ver</span>
                    <RiEyeFill className="text-yellow-500" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Información del Usuario</AlertDialogTitle>
                    <AlertDialogDescription className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold">Nombres:</p>
                                <p>{user.nombres}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Apellidos:</p>
                                <p>{user.apellidos}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Nickname:</p>
                                <p>{user.nickname}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Correo:</p>
                                <p>{user.correo}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Fecha de Nacimiento:</p>
                                <p>{user.fechaNacimiento}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Teléfono:</p>
                                <p>{user.phone}</p>
                            </div>
                            <div>
                                <p className="font-semibold">Pokémon Favorito:</p>
                                <p>{user.namePokemon}</p>
                            </div>
                            {user.pokemonImageUrl && (
                                <div className="col-span-2 flex flex-col items-center">
                                    <img
                                        src={user.pokemonImageUrl}
                                        alt={user.namePokemon}
                                        className="w-24 h-24 object-contain"
                                    />
                                    <p className="text-sm font-medium capitalize">{user.namePokemon}</p>
                                </div>
                            )}
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction>Cerrar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
export default ViewButton