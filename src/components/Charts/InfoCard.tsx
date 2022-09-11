import { Box, Flex, Text, Image } from "@chakra-ui/react";
import TransactionTime from "./TransactionTime";

const InfoCard = () => {
  return (
    <Box
      bg={"brand.100"}
      w={"100%"}
      marginLeft={4}
      borderRadius={40}
      borderWidth={"2px"}
      borderColor={"brand.200"}
      paddingTop={4}
      paddingRight={6}
      paddingLeft={6}
    >
      <Flex
        flexDirection={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Image src="/dummy.png" w={8} h={8} />
        <Text color={"brand.700"}>Project Name </Text>
        <Text color={"grade.900"} fontSize="xl" fontWeight={"bold"}>
          A
        </Text>
      </Flex>
      <Flex flexDirection={"row"} justifyContent="space-between" paddingTop={7}>
        <Box display={"flex"} alignItems="flex-start" flexDirection={"column"}>
          <Text color={"brand.600"} fontSize={"14px"}>
            Price USD
          </Text>
          <Text color={"brand.700"} fontSize={"14px"} marginTop={1.5}>
            $1.84
          </Text>
        </Box>
        <Box display="flex" alignItems={"flex-end"} flexDirection={"column"}>
          <Text color={"brand.600"} fontSize={"14px"}>
            Price
          </Text>
          <Text color={"brand.700"} fontSize={"14px"} marginTop={1.5}>
            0.0334 WAFA
          </Text>
        </Box>
      </Flex>
      <Flex flexDirection={"row"} justifyContent="space-between" paddingTop={7}>
        <Box display={"flex"} alignItems="flex-start" flexDirection={"column"}>
          <Text color={"brand.600"} fontSize={"14px"}>
            Liquidity
          </Text>
          <Text color={"brand.700"} fontSize={"14px"} marginTop={1.5}></Text>
        </Box>
        <Box display={"flex"} alignItems="flex-start" flexDirection={"column"}>
          <Text color={"brand.600"} fontSize={"14px"}>
            FDV
          </Text>
          <Text color={"brand.700"} fontSize={"14px"} marginTop={1.5}>
            $1.84M
          </Text>
        </Box>
        <Box display={"flex"} alignItems="flex-end" flexDirection={"column"}>
          <Text color={"brand.600"} fontSize={"14px"}>
            MKT CAP
          </Text>
          <Text color={"brand.700"} fontSize={"14px"} marginTop={1.5}>
            $1.84M
          </Text>
        </Box>
      </Flex>
      <TransactionTime />
    </Box>
  );
};

export default InfoCard;
