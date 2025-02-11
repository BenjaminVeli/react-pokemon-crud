import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger }
    from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { IoTrash } from "react-icons/io5";

const DeleteButton = ({ onDelete, userId }: { onDelete: (id: number) => void, userId: number }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">
                    <span className="text-red-500">Eliminar</span>
                    <IoTrash className="text-red-500" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Estás seguro de que deseas eliminar este usuario?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Este usuario se eliminará de forma permanente.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onDelete(userId)}>
                        Aceptar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteButton