import { Box, Text, Checkbox, useToast, Spinner, Link } from '@chakra-ui/react';
import { BsFillCheckCircleFill, BsFillExclamationTriangleFill, BsFillTrashFill } from "react-icons/bs";

import { useEffect, useState, useContext } from 'react';
import { taskIntance } from '../service/api';
import { TaskListProps } from '../types/TaskListProps';
import React from 'react';

import { ExempleContext } from '../context/global';

export default () => {

    const {getAllTask} = useContext(ExempleContext);

    const toast = useToast();

    useEffect(() => {
        getList();
    }, []);

    const [loading, setLoading] = useState<boolean>(false);
    const [item, setItem] = useState<TaskListProps[]>([]);

    const getList = async () => {
        setLoading(true);
        const params = '?_limit=20';
        setItem(await getAllTask({params}));
        setLoading(false);
    };

    //arrumar codigo
    const handleComplete = async (id: string) => {

        let idNumber: number = parseInt(id);
        try {
            setLoading(true);
            let data = await getAllTask({id: idNumber});
            let object: TaskListProps = {
                id: idNumber,
                name: data.name,
                createAt: data.createAt,
                expireAt: data.expireDate,
                isDone: (data.isDone) ? false : true
            };
            await taskIntance.updateTaskId(object);
            getList();
            setLoading(false);

            toast({
                title: (data.isDone) ? 'Tarefa desfeita' : 'Tarefa Concluida',
                //description: "Já atualizamos no banco de dados.",
                status: (data.isDone) ? 'info' : 'success',
                duration: 2000,
                isClosable: true,
                icon: <BsFillCheckCircleFill width={'20px'} />
            });
        }
        catch (e) {
            toast({
                title: `Item ${idNumber} não foi modificado`,
                description: `Erro: ${e}`,
                status: 'error',
                duration: 2000,
                isClosable: true,
                icon: <BsFillExclamationTriangleFill />
            });
        }
    };

    const handleDeleteTask = async (id: string) => {
        try {
            await taskIntance.deleteTaskId(id);
            toast({
                title: `Item ${id} foi excluido com sucesso.`,
                //description: "Item Excluido com sucesso",
                status: 'error',
                duration: 2000,
                isClosable: true,
                icon: <BsFillTrashFill />
            });
        }
        catch (e) {
            console.log(`Error Task.TSX: ${e}`);
        }
    };

    return (
        <div>
            {loading &&
                <Spinner
                    ml='45%'
                    mt='10px'
                    mb='10px'
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl' />}
            {item.length > 2 && item.map((item, index) => (
                <Box
                    key={index}
                    _hover={{ background: "#fafafa", cursor: "pointer" }}
                    w={'97%'}
                    border={'1px solid #fafafa'}
                    m='auto'
                    h='35px'
                    mt='3px'>

                    {item.isDone &&
                        <Box display={'flex'} justifyContent='space-between' bg='#fafafa' h='35px'>
                            <Box display={'flex'} alignItems='center'>
                                <Text as='del' alignItems={'center'} ml='10px' mt='3px' color={'#ccc'}>{item.name}</Text>
                            </Box>
                            <Box display='flex' alignItems={'center'}>
                                <Link onClick={(e) => handleDeleteTask(`${item.id}`)} fontSize={'14px'} textColor={'red.300'} mr='10px'>Excluir</Link>
                                <Checkbox className='checkbox' mr='10px' onChange={(e) => handleComplete(`${item.id}`)} defaultChecked></Checkbox>
                            </Box>
                        </Box>}

                    {!item.isDone &&
                        <Box display={'flex'} justifyContent='space-between'>
                            <Text alignItems={'center'} ml='10px' mt='3px' color={'#606060'}>{item.name}</Text>
                            <Checkbox className='checkbox' mr='10px' onChange={(e) => handleComplete(`${item.id}`)}></Checkbox>
                        </Box>}
                </Box>
            ))}



                <Box
                    _hover={{ background: "#fafafa", cursor: "pointer" }}
                    w={'97%'}
                    border={'1px solid #fafafa'}
                    m='auto'
                    h='35px'
                    mt='3px'>

                    {item.isDone &&
                        <Box display={'flex'} justifyContent='space-between' bg='#fafafa' h='35px'>
                            <Box display={'flex'} alignItems='center'>
                                <Text as='del' alignItems={'center'} ml='10px' mt='3px' color={'#ccc'}>{item.name}</Text>
                            </Box>
                            <Box display='flex' alignItems={'center'}>
                                <Link onClick={(e) => handleDeleteTask(`${item.id}`)} fontSize={'14px'} textColor={'red.300'} mr='10px'>Excluir</Link>
                                <Checkbox className='checkbox' mr='10px' onChange={(e) => handleComplete(`${item.id}`)} defaultChecked></Checkbox>
                            </Box>
                        </Box>}

                    {!item.isDone &&
                        <Box display={'flex'} justifyContent='space-between'>
                            <Text alignItems={'center'} ml='10px' mt='3px' color={'#606060'}>{item.name}</Text>
                            <Checkbox className='checkbox' mr='10px' onChange={(e) => handleComplete(`${item.id}`)}></Checkbox>
                        </Box>}
                </Box>

        </div>
    );
};