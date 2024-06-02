"use client";

import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import store from "@/redux/store";
import { apitFunctions } from "@/untils/apitFunctions";
import { calculateSalaryFunction } from "@/untils/calculateSalaryFunction";
import { useSelector } from "react-redux";

const YourSalary = () => {

  const [grossEarning, setGrossEarning] = useState(0);
  const [grossDeduction, setGrossDeduction] = useState(0);
  const [employeeEPF, setEmployeeEPF] = useState(0);
  const [apit, setApit] = useState(0);
  const [employerEPF, setEmployerEPF] = useState(0);
  const [employerETF, setEmployerETF] = useState(0);
  const [bSalary, setBSalary] = useState(0);

  // console.log("1", basicSalary);


  const Data = useSelector((state) => state.items)
  // console.log("abc", abc)
  

  useEffect(() => {

    // console.log("-=-=", store.getState().items)
    // let Data = store.getState().items;

    console.log("Data", Data)

    let basicSalary = Data.basicSalary;
    const deductions = Data.deductions;
    const earnings = Data.earnings;

    setBSalary(Number(basicSalary));

    let sumOfEarnings = 0;
    let epfAllowed = [];
    let sumOfEpfAllowed = 0;
    let sumOfDeduction = 0;

    epfAllowed = earnings.filter((earning) => earning.epf);

    sumOfEarnings = earnings.reduce(
      (sum, earning) => sum + Number(earning.amount),
      0
    );
    sumOfEpfAllowed = epfAllowed.reduce(
      (sum, earning) => sum + Number(earning.amount),
      0
    );
    sumOfDeduction = deductions.reduce(
      (sum, value) => sum + Number(value.amount),
      0
    );

    const calculateItems = calculateSalaryFunction(
      Number(basicSalary),
      Number(sumOfEpfAllowed),
      Number(sumOfEarnings),
      Number(sumOfDeduction)
    );

    setGrossEarning(calculateItems.grossEarnings);
    setGrossDeduction(calculateItems.grossDeduction);
    setEmployerETF(calculateItems.employerETF);
    setEmployerEPF(calculateItems.employerEPF);
    setEmployeeEPF(calculateItems.employeeEPF);

    const apit = apitFunctions(calculateItems.grossEarnings);

    setApit(apit);

  }, [Data])

  return (
    <Box
      sx={{
        // bgcolor: "",
        border: "solid 2px",
        borderColor: "#E0E0E0",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "480px",
        // minWidth: "480px",
        minHeight: {xs: "450px", md: "550px"},
        mx: {xs: "10px", md: "0px"},
        mb: {xs: "10px", md: "0px"}
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
          <Typography>{bSalary}.00</Typography>
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
          <Typography>{grossEarning}.00</Typography>
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
          <Typography>{grossDeduction}.00</Typography>
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
          <Typography>{employeeEPF}.00</Typography>
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
          <Typography>{apit}.00</Typography>
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
            <Typography fontWeight={"bold"} color="initial">Net Salary(Take Home)</Typography>
            <Typography fontWeight={"bold"} color="initial">{grossEarning-grossDeduction-apit}.00</Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            mb: 1,
          }}
        >
          <Typography sx={{ fontSize: "12px" }}>Contribution from the Employer</Typography>
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
          <Typography>Employer EPF (12%)</Typography>
          <Typography>{employerEPF}.00</Typography>
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
          <Typography>Employer ETF (3%)</Typography>
          <Typography>{employerETF}.00</Typography>
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
          <Typography>{employerEPF+grossEarning}.00</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YourSalary;
