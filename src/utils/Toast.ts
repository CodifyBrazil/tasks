import { useToast } from "@chakra-ui/react";

const toast = useToast();

export const ToastFront = {
    success: (id: string) =>{
        toast({
            title: `Item ${id} foi modificado`,
            description: "Já atualizamos no banco de dados.",
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
    },
    error: (id: string) =>{
        toast({
            title: `Item ${id} foi modificado`,
            description: "Já atualizamos no banco de dados.",
            status: 'error',
            duration: 2000,
            isClosable: true,
        });
    },
}