import React from "react";
import Grid from "@mui/material/Grid";
import CalculateYourSalary from "@/components/CalculateYourSalary";
import YourSalary from "@/components/YourSalary";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: {xs: "column", md: "row"},
          gap: 2,
          overflow: "auto"
        }}
      >
        <CalculateYourSalary />
        <YourSalary />
      </Box>
    </div>
  );
};

export default Home;
