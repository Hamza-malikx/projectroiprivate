import { Box, Flex, Image } from "@chakra-ui/react";

import InfoCard from "../components/Charts/InfoCard";
import WatchList from "../components/Charts/WatchList";
import TransactionInfo from "../components/Charts/TransactionInfo";
import InfoGraph from "../components/Charts/InfoGraph";

const ChartsScreen = () => {
  return (
    <>
      <Box display="flex" marginTop={8} h={"25rem"}>
        <Flex flex={1}>
          <InfoCard />
        </Flex>
        <Flex flex={3.5}>
          <InfoGraph />
        </Flex>
        <Flex flex={1}>
          <WatchList />
        </Flex>
      </Box>
      <Box display="flex" marginTop={8} h={"18rem"}>
        <Flex flex={1.1}>
          <Image marginLeft={4} src={"/Youtube.png"} w={"100%"} />
        </Flex>
        <Flex flex={3.5}>
          <TransactionInfo />
        </Flex>
        <Flex flex={1}>
          <Image marginRight={4} src={"/AD.png"} w={"100%"} />
        </Flex>
      </Box>
    </>
  );
};

export default ChartsScreen;
