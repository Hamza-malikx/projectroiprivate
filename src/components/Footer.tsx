import { Box, Button, Flex, Text, Icon } from "@chakra-ui/react";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      marginTop={10}
      paddingBottom={10}
    >
      <Flex
        flexDirection={"row"}
        w={"95%"}
        h={20}
        bg={"brand.300"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={20}
      >
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Text color={"brand.600"} fontSize={"15px"}>
            © 2022 ProjectROI. All rights reserved.
          </Text>
        </Flex>
        <Flex flex={2} justifyContent={"center"} alignItems={"center"}>
          <Text
            color={"brand.700"}
            fontSize={"15px"}
          >{`Privacy Policy    -    Terms of Use`}</Text>
        </Flex>
        <Flex flex={1} justifyContent={"center"} alignItems={"center"}>
          <Icon as={GrTwitter} w={6} h={6} color={"brand.700"} />
          <Button
            bg={"brand.400"}
            color={"brand.700"}
            borderRadius={20}
            marginLeft={10}
          >
            Contact Us
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
