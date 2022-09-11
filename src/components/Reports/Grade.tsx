import { Box, Text, Image } from "@chakra-ui/react";

type Props = {
  grade: string;
};

const Grade = ({}: Props) => {
  return (
    <Box
      w={"100%"}
      paddingTop={4}
      paddingRight={6}
      paddingLeft={6}
      marginTop={4}
      display="flex"
      alignItems={"center"}
      justifyContent={"left"}
      columnGap={10}
    >
      <Box>
        <Image src="/rating.png" />
      </Box>

      <Box display={"flex"} alignItems={"center"} columnGap={5}>
        <Box boxSize="fit-content">
          <Image src="/dummy.png" h={20} />
        </Box>
        <Box display={"flex"} flexDirection="column" rowGap={2}>
          <Text
            fontSize={"2xl"}
            color="white"
            fontWeight="bold"
            alignSelf={"flex-start"}
          >
            Project Name
          </Text>
          <Box display="flex" columnGap={5} alignItems="center">
            <Image src="/badge.png" />
            <Text fontSize={"sm"} color="white">
              $COMB
            </Text>
            <a href="https://ai92ndjajdvs">
              <Text fontSize="md" color={"link.600"}>
                https://ai92ndjajdvs
              </Text>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Grade;
