import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

const WatchList = () => {
  return (
    <Box
      bg={"brand.100"}
      w={"100%"}
      marginRight={4}
      borderRadius={40}
      borderWidth={"2px"}
      borderColor={"brand.200"}
      paddingTop={4}
      paddingRight={6}
      paddingLeft={6}
      display="flex"
    >
      <Flex flexDirection={"column"} flex={1}>
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          w={"100%"}
          justifyContent={"center"}
          flex={1}
        >
          <Text color={"brand.700"} fontSize="l">
            Waitlist
          </Text>
          <QuestionIcon color={"brand.600"} w={3} h={3} marginLeft={2} />
        </Flex>
        <Flex flex={6} justifyContent={"center"} alignItems={"center"}>
          <Text color={"brand.600"}>Your watchlist is empty. Add now</Text>
        </Flex>
        <Flex flex={2} justifyContent={"center"} alignItems={"center"}>
          <Button
            bg={"brand.400"}
            color={"brand.700"}
            w={"75%"}
            fontSize={"14px"}
            borderRadius={20}
          >
            Add
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default WatchList;
