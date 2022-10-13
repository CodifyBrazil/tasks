import { 
        Box, 
        Flex, 
        InputGroup, 
        InputLeftAddon, 
        Input, 
        Radio,
        RadioGroup,
        Text,
        Stack } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";
import { useState } from 'react';
import moment from "moment";


export const Search = () => {

    const [value, setValue] = useState('0');
    const [data, setData] = useState(() => moment().format('YYYY-M-D'));
    

    return (
        <Flex justify={'center'}>
            <Box 
            display={'flex'}
            flexDirection='column'
            bg={'#fff'} 
            w='40%' 
            h='150px' 
            mt='60px'
            border={'1px solid #fff'} 
            pos='absolute' 
            boxShadow={'md'}
            >

                <Box>
                    <InputGroup 
                    w='80%' 
                    h='16' 
                    m={'auto'} 
                    size='sm'
                    mt='30px'>
                        <InputLeftAddon 
                        children={<RiSearch2Line />} 
                        bg='blue.500' 
                        color={'white'} 
                        fontSize='15px'/>
                        <Input type='text' placeholder='Pesquisar tarefa'/>
                    </InputGroup>
                </Box>

                <Box display={'flex'} m='auto' mt='-5px'>

                    <Box display={'inline-block'} w='230px'>
                        <RadioGroup borderRight={'2px solid #ccc'} onChange={setValue} value={value}>
                        <Stack direction='row'>
                            <Radio value='0' size={'sm'} colorScheme='blue'>Todos</Radio>
                            <Radio value='1' size={'sm'} colorScheme='green'>Concluidas</Radio>
                            <Radio value='2' size={'sm'} colorScheme='red'>a fazer</Radio>
                        </Stack>
                        </RadioGroup>
                    </Box>
                    <Box display={'flex'} ml='10px'>
                        <Text fontSize={'14px'}>De:</Text> 
                        <Input 
                        display={'inline-block'}
                        placeholder="Selecione a Data"
                        size="xs"
                        type="date"
                        mr='10px'
                        ml='5px'
                        onChange={(e) => setData(e.target.value)}
                        value={data}
                        />
                        <Text fontSize={'14px'}>Até: </Text> 
                        <Input
                        display={'inline-block'}
                        placeholder="Selecione a Data"
                        size="xs"
                        type="date"
                        ml='5px'
                        />
                    </Box>

                </Box>
            </Box>
        </Flex>
    )
}