"use client";

import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";

const CalculateYourSalary = () => {
  const [allowances, setAllowances] = useState([{ id: Date.now(), title: "", amount: "", epf: false }]);
  const [deductions, setDeductions] = useState([{ id: Date.now(), title: "", amount: "" }]);

  const handleAddAllowance = () => {
    setAllowances([...allowances, { id: Date.now(), title: "", amount: "", epf: false }]);
  };

  const handleRemoveAllowance = (id) => {
    setAllowances(allowances.filter(allowance => allowance.id !== id));
  };

  const handleAddDeduction = () => {
    setDeductions([...deductions, { id: Date.now(), title: "", amount: "" }]);
  };

  const handleRemoveDeduction = (id) => {
    setDeductions(deductions.filter(deduction => deduction.id !== id));
  };

  const handleAllowanceChange = (id, field, value) => {
    setAllowances(
      allowances.map((allowance) =>
        allowance.id === id ? { ...allowance, [field]: value } : allowance
      )
    );
  };

  const handleDeductionChange = (id, field, value) => {
    setDeductions(
      deductions.map((deduction) =>
        deduction.id === id ? { ...deduction, [field]: value } : deduction
      )
    );
  };

  const handleResetButton = () => {
    setAllowances([{ id: Date.now(), title: "", amount: "", epf: false }]);
    setDeductions([{ id: Date.now(), title: "", amount: "" }]);
  }
console.log(allowances)
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#E0E0E0",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "680px",
          minHeight: "550px"
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "20px" }}
            >
              Calculate Your Salary
            </Typography>
          </Grid>

          <Grid item xs={6} display={"flex"} justifyContent={"end"} alignContent={"center"}>
            <Button onClick={handleResetButton} variant="text" color="primary" startIcon={<ReplayIcon />}>
              Reset
            </Button>
          </Grid>

          <Grid mt={2} item xs={6}>
            <Typography sx={{ fontSize: "16px" }}> Basic Salary </Typography>
            <TextField
              size="small"
              placeholder="Basic Salary"
              sx={{ mt: 1 }}
              fullWidth
            />
          </Grid>

          <Grid mt={2} item xs={12}>
            <Typography sx={{ fontSize: "16px" }}> Earnings</Typography>
            <Typography sx={{ fontSize: "12px", color: "#757575" }}>
              Allowance, Fixed Allowance, Bonus and etc.
            </Typography>
          </Grid>

          {allowances.map((allowance) => (
            <Grid container spacing={1} key={allowance.id}>
              <Grid mt={0} item xs={6}>
                <TextField
                  size="small"
                  placeholder="Pay Details (Title)"
                  sx={{ width: { md: "60%" }, paddingRight: 1 }}
                  value={allowance.title}
                  onChange={(e) =>
                    handleAllowanceChange(allowance.id, "title", e.target.value)
                  }
                />
                <TextField
                  size="small"
                  placeholder="Amount"
                  sx={{ width: { md: "40%" } }}
                  value={allowance.amount}
                  onChange={(e) =>
                    handleAllowanceChange(allowance.id, "amount", e.target.value)
                  }
                />
              </Grid>
              <Grid mt={0} item xs={6}>
                <IconButton onClick={() => handleRemoveAllowance(allowance.id)}>
                  <CloseIcon />
                </IconButton>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={allowance.epf}
                      onChange={(e) =>
                        handleAllowanceChange(allowance.id, "epf", e.target.checked)
                      }
                    />
                  }
                  label="EPF/ETF"
                />
              </Grid>
            </Grid>
          ))}

          <Grid mt={0} item xs={6}>
            <Button
              startIcon={<AddIcon />}
              variant="text"
              color="primary"
              onClick={handleAddAllowance}
            >
              Add New Allowance
            </Button>
          </Grid>

          <Divider orientation="horizontal" sx={{ width: "100%", my: 2 }} />

          <Grid mb={0} item xs={12}>
            <Typography sx={{ fontSize: "16px" }}> Deductions</Typography>
            <Typography sx={{ fontSize: "12px", color: "#757575" }}>
              Salary Advances, Loan Deductions and all
            </Typography>
          </Grid>

          {deductions.map((deduction) => (
            <Grid container spacing={1} key={deduction.id}>
              <Grid mt={0} item xs={6}>
                <TextField
                  size="small"
                  placeholder="Pay Details (Title)"
                  sx={{ width: { md: "60%" }, paddingRight: 1 }}
                  value={deduction.title}
                  onChange={(e) =>
                    handleDeductionChange(deduction.id, "title", e.target.value)
                  }
                />
                <TextField
                  size="small"
                  placeholder="Amount"
                  sx={{ width: { md: "40%" } }}
                  value={deduction.amount}
                  onChange={(e) =>
                    handleDeductionChange(deduction.id, "amount", e.target.value)
                  }
                />
              </Grid>
              <Grid mt={0} item xs={6}>
                <IconButton onClick={() => handleRemoveDeduction(deduction.id)}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}

          <Grid mt={0} item xs={6}>
            <Button
              startIcon={<AddIcon />}
              variant="text"
              color="primary"
              onClick={handleAddDeduction}
            >
              Add New Deduction
            </Button>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
};

export default CalculateYourSalary;
