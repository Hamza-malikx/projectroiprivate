import { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

interface details {
  type: string;
  num: string;
}

const TransactionTime = () => {
  const [Time, setTime] = useState<String>("12H");

  const timeArr: string[] = ["5M", "12H", "1H", "24H"];
  const timeDetails: { type: string; num: string }[] = [
    {
      type: "TXN",
      num: "20",
    },
    {
      type: "Buy",
      num: "20",
    },
    {
      type: "Sell",
      num: "20",
    },
    {
      type: "Volume",
      num: "20",
    },
  ];

  return (
    <Box display={"flex"} flexDirection={"column"} marginTop={5}>
      <Flex flexDirection={"row"}>
        {timeArr.map((time: string) => (
          <Button
            color={"brand.600"}
            bg={Time === time ? "brand.101" : "brand.100"}
            borderTopRadius={10}
            borderBottomRadius={0}
            onClick={() => {
              setTime(time);
            }}
            _hover={{}}
          >
            {time}
          </Button>
        ))}
      </Flex>
      <Flex
        flexDirection={"row"}
        bg={"brand.102"}
        justifyContent={"space-evenly"}
      >
        {timeDetails.map((details: details) => (
          <Flex flexDirection={"column"}>
            <Text color={"brand.600"}>{details.type}</Text>
            <Text color={"brand.700"}>{details.num}</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default TransactionTime;
