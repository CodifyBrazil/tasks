import { Flex, Box, Button } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";

export const MenuOPtions = () => {
    return (
        <Flex 
        bgColor={'white'}
        w='40%' 
        h='50px' 
        pos={'absolute'} 
        ml='30%' mt='220px'
        align={'center'}
        justify='flex-end'
        boxShadow={'md'}>
            <Box>
                <Button size={'sm'} colorScheme={'blue'}><FaTrashAlt /> Lixo (12)</Button>
            </Box>
        </Flex>
    )
}