import { useState } from "react";
import { Box, ButtonGroup, Button, Flex, Text } from "@chakra-ui/react";
import Switch from "react-switch";
import TransactioninfoTable from "./TransactioninfoTable";

const TransactionInfo = () => {
  const [switchSelected, setswitchSelected] = useState<boolean>(false);
  const [transactionButton, settransactionButton] = useState<string>("all");

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      borderRadius={40}
      borderColor={"brand.200"}
      borderWidth={"2px"}
      paddingX={8}
      marginX={4}
      w={"100%"}
    >
      <Flex flexDirection={"row"} alignItems={"center"} marginTop={4}>
        <ButtonGroup
          bg={"brand.500"}
          borderRadius={40}
          paddingY={1.5}
          paddingX={1.5}
        >
          <Button
            borderRadius={20}
            bg={transactionButton === "all" ? "brand.400" : "brand.500"}
            color={"brand.700"}
            _hover={{
              bg: transactionButton === "all" ? "brand.400" : "brand.500",
            }}
            onClick={() => {
              settransactionButton("all");
            }}
          >
            All Transactions
          </Button>
          <Button
            borderRadius={20}
            bg={transactionButton === "my" ? "brand.400" : "brand.500"}
            color={"brand.700"}
            _hover={{
              bg: transactionButton === "my" ? "brand.400" : "brand.500",
            }}
            onClick={() => {
              settransactionButton("my");
            }}
          >
            My Transactions
          </Button>
        </ButtonGroup>
        <Box marginLeft={5}>
          <Switch
            onChange={() => {
              setswitchSelected(!switchSelected);
            }}
            checked={switchSelected}
            checkedIcon={false}
            uncheckedIcon={false}
            offColor={"#2D3546"}
            onColor={"#2E1F8B"}
            offHandleColor={"#6D24E4"}
            onHandleColor={"#6D24E4"}
          />
        </Box>
        <Text marginLeft={5} color={"brand.700"}>
          Plot
        </Text>
      </Flex>
      <TransactioninfoTable />
    </Box>
  );
};

export default TransactionInfo;
