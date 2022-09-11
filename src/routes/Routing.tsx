import { Routes, Route, Navigate } from "react-router";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import ReportsScreen from "../screens/ReportsScreen";
import ChartsScreen from "../screens/ChartsScreen";
import ScenariosScreen from "../screens/ScenariosScreen";
import Footer from "../components/Footer";
import LandingScreen from "../screens/home/LandingScreen";
import { ProfitProfiler } from "../screens/ProfitProfiler";

const Routing = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      {location.pathname === "/" ? (
        <>
          <div>
            <Routes>
              <Route path="/" element={<LandingScreen />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <SearchBar />
          <Box bg={"brand.900"} paddingTop={"4"}>
            <Navbar />
            <Routes>
              <Route path="/profiler" element={<ProfitProfiler />} />
              <Route path="/report" element={<ReportsScreen />} />
              <Route path="/charts" element={<ChartsScreen />} />
              {/* <Route path="/scenarios" element={<ScenariosScreen />} /> */}
              {/* <Route path="/" element={<LandingScreen />} /> */}
              {/* <Route path="/" element={<Navigate to="report" replace />} /> */}
            </Routes>
            <Footer />
          </Box>
        </>
      )}
    </div>
  );
};

export default Routing;
