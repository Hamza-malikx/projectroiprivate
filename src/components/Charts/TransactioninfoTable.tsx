import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const TransactioninfoTable = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th color={"brand.600"}>To convert</Th>
            <Th color={"brand.600"}>To convert</Th>
            <Th color={"brand.600"}>To convert</Th>
            <Th color={"brand.600"}>into</Th>
            <Th isNumeric color={"brand.600"}>
              multiply by
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td color={"brand.700"}>inches</Td>
            <Td color={"brand.700"}>millimetres (mm)</Td>
            <Td color={"brand.700"}>millimetres (mm)</Td>
            <Td color={"brand.700"}>millimetres (mm)</Td>

            <Td isNumeric color={"brand.700"}>
              25.4
            </Td>
          </Tr>
          <Tr>
            <Td color={"brand.700"}>feet</Td>
            <Td color={"brand.700"}>millimetres (mm)</Td>
            <Td color={"brand.700"}>millimetres (mm)</Td>
            <Td color={"brand.700"}>centimetres (cm)</Td>
            <Td isNumeric color={"brand.700"}>
              30.48
            </Td>
          </Tr>
          <Tr>
            <Td color={"brand.700"}>yards</Td>
            <Td color={"brand.700"}>millimetres (mm)</Td>
            <Td color={"brand.700"}>millimetres (mm)</Td>
            <Td color={"brand.700"}>metres (m)</Td>
            <Td isNumeric color={"brand.700"}>
              0.91444
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactioninfoTable;
