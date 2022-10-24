import { Box, Text } from '@chakra-ui/react';
import React from 'react';

type TitleProps = {
    title: string;
}

export const Header = ({title}: TitleProps) => {
    return (
        <header>
            <Box bg={'white'} w='100%' h='60px' borderBottom={'1px solid #ccc'}>
                <Text color={'blue.400'} fontSize='4xl' fontWeight={'bold'} ml='25px' mt={'4px'}>{title}</Text>
            </Box>
        </header>
    )
}