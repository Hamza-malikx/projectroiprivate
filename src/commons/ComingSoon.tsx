import { Box, Text, useToast } from "@chakra-ui/react";

interface ComingSoonProps {
  name: string;
}

const ComingSoon = ({ name }: ComingSoonProps) => {
  const toast = useToast();

  return (
    <Box
      display={"flex"}
      flexDirection="column"
      onClick={() => {
        toast({
          title: "Coming Soon",
          description: "This feature would be coming soon",
          status: "info",
          duration: 2000,
          isClosable: true,
        });
      }}
    >
      <Text color={"brand.700"} opacity="0.3">
        {name}
      </Text>
      <Box bg={"brand.200"} borderRadius={20} marginLeft={"10px"}>
        <Text color={"brand.700"} fontSize={"8"}>
          Coming Soon
        </Text>
      </Box>
    </Box>
  );
};

export default ComingSoon;
