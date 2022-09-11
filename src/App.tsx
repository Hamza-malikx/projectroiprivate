import { extendTheme, ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import Routing from "./routes/Routing";

function App() {
  const colors: {} = {
    brand: {
      900: "#11192a",
      800: "#172033",
      700: "#fff",
      600: "#C0C2C7",
      500: "#2D3546",
      400: "linear-gradient(260.69deg, #2E1F8B -33.31%, #6D24E4 91.97%)",
      300: "#252C3C",
      200: "#6D24E4",
      101: "#575757",
      102: "linear-gradient(180deg, #575757 0%, rgba(196, 196, 196, 0) 100%)",
      100: "#182030",
    },
    grade: {
      900: "#7CCF32",
    },
    link: {
      600: "#3F70EF",
    },
  };

  const theme: any = extendTheme({ colors });

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Routing />
      </ChakraProvider>
    </div>
  );
}

export default App;
