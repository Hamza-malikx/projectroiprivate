import { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ComingSoon from "../commons/ComingSoon";
import { useLocation } from "react-router";

const Navbar = () => {
  const loc = useLocation();
  const [selectedButton, setSelectedButton] = useState<String>(
    loc.pathname.slice(1)
  );

  useEffect(() => {
    setSelectedButton(loc.pathname.slice(1));
  }, [loc]);

  return (
    <Box
      bg={"brand.300"}
      w={"65%"}
      marginLeft={"17.5%"}
      display="flex"
      flexDirection={"row"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      borderRadius={"30px"}
      padding={"1%"}
    >
      <ComingSoon name={"Dashboard"} />
      <Link to="profiler">
        <Button
          bg={selectedButton === "profiler" ? "brand.400" : "brand.300"}
          color={"brand.700"}
          fontWeight="normal"
          borderRadius={20}
          onClick={() => setSelectedButton("scenarios")}
          _hover={{
            bg: selectedButton === "profiler" ? "brand.400" : "brand.300",
          }}
        >
          Profiler
        </Button>
      </Link>
      <ComingSoon name={"Rules & Alerts"} />
      <Link to={"report"}>
        <Button
          bg={selectedButton === "report" ? "brand.400" : "brand.300"}
          color={"brand.700"}
          fontWeight="normal"
          borderRadius={20}
          onClick={() => setSelectedButton("report")}
          _hover={{
            bg: selectedButton === "report" ? "brand.400" : "brand.300",
          }}
        >
          Reports
        </Button>
      </Link>
      <ComingSoon name={"My Projects"} />
      <Link to="charts">
        <Button
          bg={selectedButton === "charts" ? "brand.400" : "brand.300"}
          color={"brand.700"}
          fontWeight="normal"
          borderRadius={20}
          onClick={() => setSelectedButton("charts")}
          _hover={{
            bg: selectedButton === "charts" ? "brand.400" : "brand.300",
          }}
        >
          Charts
        </Button>
      </Link>
    </Box>
  );
};

export default Navbar;
