"use client";

import { useEffect, useState } from "react";
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
import { calculateSalaryFunction } from "@/untils/calculateSalaryFunction";
import { useDispatch } from "react-redux";
import { addAllEarnings, addBasicSalary, addDeductions } from "@/redux/itemService";
import { setEarnings } from "@/reducers/itemsSlice";

const CalculateYourSalary = () => {
  const [earnings, setAllEarnings] = useState([
    { id: Date.now(), title: "", amount: "", epf: false },
  ]);
  const [deductions, setDeductions] = useState([
    { id: Date.now(), title: "", amount: "" },
  ]);
  const [basicSalary, setBasicSalary] = useState("");

  const dispatch = useDispatch();

  const handleAddAllowance = () => {
    setAllEarnings([
      ...earnings,
      { id: Date.now(), title: "", amount: "", epf: false },
    ]);
  };

  const handleRemoveAllowance = (id) => {
    if (earnings.length !== 1) {
      setAllEarnings(earnings.filter((allowance) => allowance.id !== id));
    }
  };

  const handleAddDeduction = () => {
    setDeductions([...deductions, { id: Date.now(), title: "", amount: "" }]);
  };

  const handleRemoveDeduction = (id) => {
    if (deductions.length !== 1) {
      setDeductions(deductions.filter((deduction) => deduction.id !== id));
    }
  };

  const handleAllowanceChange = (id, field, value) => {
    setAllEarnings(
      earnings.map((allowance) =>
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
    setAllEarnings([{ id: Date.now(), title: "", amount: "", epf: false }]);
    setDeductions([{ id: Date.now(), title: "", amount: "" }]);
  };

  useEffect(() => {

    const fetch = async () => {

      addAllEarnings(earnings);
      addBasicSalary(basicSalary);
      addDeductions(deductions);
    };

    fetch();
  }, [earnings, deductions, basicSalary]);

  // console.log(earnings);
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#FAFAFA ",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "680px",
          minHeight: "550px",
          mx: { xs: "10px", md: "0px" },
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

          <Grid
            item
            xs={6}
            display={"flex"}
            justifyContent={"end"}
            alignContent={"center"}
          >
            <Button
              onClick={handleResetButton}
              variant="text"
              color="primary"
              startIcon={<ReplayIcon />}
            >
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
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
            />
          </Grid>

          <Grid mt={2} item xs={12}>
            <Typography sx={{ fontSize: "16px" }}> Earnings</Typography>
            <Typography sx={{ fontSize: "12px", color: "#757575" }}>
              Allowance, Fixed Allowance, Bonus and etc.
            </Typography>
          </Grid>

          {earnings.map((allowance) => (
            <Grid container spacing={1} p={"8px"} key={allowance.id}>
              <Grid mt={0} item xs={6} sm={4}>
                <TextField
                  size="small"
                  placeholder="Pay Details (Title)"
                  fullWidth
                  value={allowance.title}
                  onChange={(e) =>
                    handleAllowanceChange(allowance.id, "title", e.target.value)
                  }
                />
              </Grid>
              <Grid mt={0} item xs={6} sm={2}>
                <TextField
                  size="small"
                  placeholder="Amount"
                  fullWidth
                  value={allowance.amount}
                  onChange={(e) =>
                    handleAllowanceChange(
                      allowance.id,
                      "amount",
                      e.target.value
                    )
                  }
                />
              </Grid>
              <Grid mt={0} item xs={12} sm={6}>
                <IconButton onClick={() => handleRemoveAllowance(allowance.id)}>
                  <CloseIcon />
                </IconButton>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={allowance.epf}
                      onChange={(e) =>
                        handleAllowanceChange(
                          allowance.id,
                          "epf",
                          e.target.checked
                        )
                      }
                    />
                  }
                  label="EPF/ETF"
                />
              </Grid>
            </Grid>
          ))}

          <Grid mt={0} item xs={12}>
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
            <Grid container p={"8px"} spacing={1} key={deduction.id}>
              <Grid mt={0} item xs={6} sm={4}>
                <TextField
                  size="small"
                  placeholder="Pay Details (Title)"
                  // sx={{ width: { md: "60%" }, paddingRight: 1 }}
                  fullWidth
                  value={deduction.title}
                  onChange={(e) =>
                    handleDeductionChange(deduction.id, "title", e.target.value)
                  }
                />
              </Grid>
              <Grid mt={0} item xs={5} sm={2}>
                <TextField
                  size="small"
                  placeholder="Amount"
                  // sx={{ width: { md: "40%" } }}
                  fullWidth
                  value={deduction.amount}
                  onChange={(e) =>
                    handleDeductionChange(
                      deduction.id,
                      "amount",
                      e.target.value
                    )
                  }
                />
              </Grid>
              <Grid mt={0} item xs={1} sm={6}>
                <IconButton onClick={() => handleRemoveDeduction(deduction.id)}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}

          <Grid mt={0} item xs={12}>
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
