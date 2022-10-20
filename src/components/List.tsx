import {Flex, Box, Spinner, Text} from '@chakra-ui/react';
import React from 'react';
import Task from './Task';

export const List = () => {
    
    return (
        <div>
            <Flex justify={'center'}>
                <Box 
                display={'flex'}
                flexDirection='column'
                bg={'#fff'} 
                w={{base: '100%', md: '60%', lg: '60%', '2xl': '40%'}}  
                maxH={'600px'}
                mt='280px'
                border={'1px solid #fff'} 
                pos='absolute' 
                boxShadow={'md'}>

                    <Box>
                        <Task />
                    </Box>
                    
                </Box>
            </Flex>
        </div>
    )
}