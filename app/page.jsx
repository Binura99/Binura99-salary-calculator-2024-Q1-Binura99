import React from "react";
import Grid from "@mui/material/Grid";
import CalculateYourSalary from "@/components/CalculateYourSalary";
import YourSalary from "@/components/YourSalary";

const Home = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "end", alignItems:"center", height: "100vh"}}>
          <CalculateYourSalary />
        </Grid>
        <Grid item xs={12} md={6} sx={{display: "flex", justifyContent: "start", alignItems:"center", height: "100vh"}}>
          <YourSalary />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
