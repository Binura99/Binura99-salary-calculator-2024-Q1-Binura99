import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const YourSalary = () => {
  return (
    <Box
      sx={{
        // bgcolor: "",
        border: "solid 2px",
        borderColor: "#E0E0E0",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "480px",
        minWidth: "480px",
        minHeight: "550px"

        
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} mb={2}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "20px" }}
          >
            Your Salary
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            mb: 1,
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>Item</Typography>
          <Typography sx={{ fontSize: "12px" }}>Amount</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Typography>Basic Salary</Typography>
          <Typography>Amount</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Typography>Gross Earning</Typography>
          <Typography>Amount</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Typography>Gross Deduction</Typography>
          <Typography>Amount</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Typography>Employee EPF (8%)</Typography>
          <Typography>Amount</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Typography>APIT</Typography>
          <Typography>Amount</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            my: 2
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              border: "solid 1px",
              p: 1,
              width: "100%",
              borderRadius: "4px",
              borderColor: "#E0E0E0",
            }}
          >
            <Typography color="initial">Net Salary(Take Home)</Typography>
            <Typography color="initial">xxxxx</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            mb: 1,
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>Item</Typography>
          <Typography sx={{ fontSize: "12px" }}>Amount</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Typography>APIT</Typography>
          <Typography>Amount</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Typography>APIT</Typography>
          <Typography>Amount</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            mt: 3
          }}
        >
          <Typography>CTC (Cost To Company)</Typography>
          <Typography>xxxx</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YourSalary;
