import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiMoon } from "react-icons/fi";

import { connectMetaMask } from "../utils/Function";

const SearchBar = () => {
  const [search, setsearch] = useState<
    string | ReadonlyArray<string> | number | undefined
  >("");
  const [metamask, setmetamask] = useState<String>("");

  return (
    <Box
      bg={"brand.800"}
      height="20"
      paddingLeft="16"
      display={"flex"}
      flexDirection={"row"}
      alignItems="center"
    >
      <Flex flex="1" alignContent={"center"}>
        <Image src={"/FAZE.png"} w="20" h="8" />
      </Flex>
      <Flex flex="1" paddingRight={10} alignItems={"center"}>
        <InputGroup bg="brand.500" borderRadius={"20"} marginLeft={8}>
          <InputLeftElement children={<SearchIcon color={"brand.700"} />} />
          <Input
            value={search}
            type={"text"}
            onChange={(e: any) => setsearch(e.target.value)}
            placeholder="Search Projects"
            borderRadius={"20"}
            borderColor={"brand.500"}
            _placeholder={{
              color: "brand.600",
            }}
          />
        </InputGroup>
      </Flex>
      <Flex
        flex="1.4"
        paddingLeft={"12"}
        justifyContent="space-evenly"
        alignItems={"center"}
      >
        <Text color={"brand.700"} fontSize="16px" fontWeight={"semibold"}>
          Feature Request
        </Text>
        <Button
          bg={"brand.400"}
          color={"brand.700"}
          fontWeight="normal"
          borderRadius={20}
          onClick={() => {
            connectMetaMask(setmetamask);
          }}
          paddingLeft={metamask ? "8" : "4"}
          paddingRight={metamask ? "8" : "4"}
        >
          {!metamask
            ? `Connect MetaMask`
            : `${metamask.slice(0, 4)}....${metamask.slice(
                metamask.length - 4,
                metamask.length
              )}`}
        </Button>
        <SunIcon color={"brand.600"} w={6} h={6} />
        <Icon as={FiMoon} color={"brand.700"} w={6} h={6} />
      </Flex>
    </Box>
  );
};

export default SearchBar;
