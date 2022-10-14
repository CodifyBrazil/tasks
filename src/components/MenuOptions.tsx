import {
  Flex,
  Box,
  Button,
  useDisclosure,
  Text,
  Link,
  Tooltip,
  Badge,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaTrashAlt, FaPlusSquare, FaShareSquare } from "react-icons/fa";
import { useEffect, useState } from "react";
import moment from "moment";

import { trashInstance } from "../utils/Task";
import { trashProps, TaskListProps } from "../types/TaskListProps";

export const MenuOPtions = () => {
  useEffect(() => {
    getValueTrash();
  }, []);

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  const [valueTrash, setValueTrash] = useState<trashProps[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayTwo />);

  const getDaysInTrash = (indexArray: number) => {
    debugger;
    const dateInsertTrash = moment(valueTrash[indexArray].insertAt);

    const daysPermitionTrash: number = 15;
    const trashDateAddDays = moment(new Date()).add(daysPermitionTrash, "days");
    const diff = moment(dateInsertTrash).diff(moment(trashDateAddDays));
    const dueDate = moment.duration(diff).asDays();

    const diff2 = moment(dateInsertTrash, "DD-MM-YYYY").diff(
      moment(trashDateAddDays, "DD-MM-YYYY")
    );
    const response = moment.duration(diff2).asDays();

    const diferenca = moment.duration({
      days: trashDateAddDays.date() - dateInsertTrash.date(),
    });

    const dateNow = moment();

    const sum = diferenca.asDays() - dateNow.date();

    console.log(`${diferenca.asDays()} - ${dateNow.date()} = ${sum}`);
    return dueDate;
  };

  const getValueTrash = async () => {
    const dataFiltro = new Date(new Date().getFullYear(), new Date().getMonth(), (new Date().getDate() - 15));
    let { data } = await trashInstance.getTrashAll(`insertAt >= ${dataFiltro}`);
    setValueTrash(data);
  };

  return (
    <Flex
      bgColor={"white"}
      w="40%"
      h="50px"
      pos={"absolute"}
      ml="30%"
      mt="220px"
      align={"center"}
      justify="flex-end"
      boxShadow={"md"}
    >
      <Box>
        <Button
          onClick={() => {
            setOverlay(<OverlayTwo />);
            onOpen();
          }}
          size={"sm"}
          colorScheme={"yellow"}
          borderRadius="3px"
        >
          <FaTrashAlt /> Lixo ({valueTrash.length})
        </Button>
        <Button
          size={"sm"}
          colorScheme={"green"}
          borderRadius="3px"
          ml="5px"
          mr="10px"
        >
          <FaPlusSquare /> Adicionar
        </Button>
      </Box>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl">
        {overlay}
        <ModalContent>
          <ModalHeader>Lixeira ({valueTrash.length})</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Badge colorScheme={"orange"}>
              Os itens da lixeira seram excluidos permanentemente em 15 dias
            </Badge>
            <hr />
            {valueTrash.map((item, index) => (
              <Box
                key={index}
                _hover={{ background: "#fafafa", cursor: "pointer" }}
                w={"full"}
                border={"1px solid #fafafa"}
                m="auto"
                h="35px"
                mt="3px"
              >
                <Box display={"flex"} justifyContent="space-between">
                  <Box>
                    <Text
                      alignItems={"center"}
                      ml="10px"
                      mt="3px"
                      color={"#606060"}
                    >
                      {" "}
                      {item.name}{" "}
                    </Text>
                  </Box>
                  <Box display={"flex"} alignItems="center" mt="5px">
                    <Tooltip
                      label={`${getDaysInTrash(
                        index
                      )} dias para ser excluido para sempre`}
                      placement="auto"
                    >
                      <Badge colorScheme={"red"} mr="15px">
                        14 dias
                      </Badge>
                    </Tooltip>

                    <Tooltip
                      label="Recuperar"
                      fontSize="md"
                      placement="auto"
                      bg={"#333"}
                    >
                      <Link
                        href="#"
                        _hover={{ color: "green" }}
                        color="#565656"
                      >
                        <FaShareSquare />
                      </Link>
                    </Tooltip>

                    <Tooltip
                      label="Excluir permanentemente"
                      bg="#333"
                      placement="auto"
                      fontSize={"md"}
                    >
                      <Link
                        href="#"
                        _hover={{ color: "red" }}
                        color="#565656"
                        mr="20px"
                        ml="20px"
                      >
                        <FaTrashAlt />
                      </Link>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
