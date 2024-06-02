"use client";

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
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import resetIcon from "../assets/Iconcolor.png";
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';

const CalculateYourSalary = () => {
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
              {" "}
              Calculate Your Salary
            </Typography>
          </Grid>

          <Grid item xs={6} display={"flex"} justifyContent={"end"} alignContent={"center"}>
            <Button variant="text" color="primary" startIcon={<ReplayIcon/>}>
              Reset
            </Button>
          </Grid>

          <Grid mt={2} item xs={6}>
            <Typography sx={{ fontSize: "16px" }}> Basic Salary </Typography>
            <TextField
              // value={}
              // onChange={}
              size="small"
              placeholder="Basic Salary"
              sx={{ mt: 1 }}
              fullWidth
            />
          </Grid>

          <Grid mt={2} item xs={12}>
            <Typography sx={{ fontSize: "16px" }}> Earnings</Typography>
            <Typography sx={{ fontSize: "12px", color: "#757575" }}>
              {" "}
              Allowance, Fixed Allowance, Bonus and etc.
            </Typography>
          </Grid>

          <Grid mt={0} item xs={6}>
            <TextField
              // value={}
              // onChange={}
              size="small"
              placeholder="Pay Deatils(Title)"
              sx={{ width: { md: "60%" }, paddingRight: 1 }}
            />
            <TextField
              // value={}
              // onChange={}
              size="small"
              placeholder="Amount"
              sx={{ width: { md: "40%" } }}
            />
          </Grid>

          <Grid mt={0} item xs={6}>
            <IconButton>
              <CloseIcon />
            </IconButton>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="EPF/ETF"
            />
          </Grid>

          <Grid mt={0} item xs={6}>
            <Button startIcon={<AddIcon />} variant="text" color="primary">
              Add New Allowance
            </Button>
          </Grid>

          <Divider orientation="horizontal" sx={{ width: "100%", my:2 }} />

          <Grid mb={0} item xs={12}>
            <Typography sx={{ fontSize: "16px" }}> Deductions</Typography>
            <Typography sx={{ fontSize: "12px", color: "#757575" }}>
              {" "}
              Salary Advances, Loan Deductions and all
            </Typography>
          </Grid>

          <Grid mt={0} item xs={6}>
            <TextField
              // value={}
              // onChange={}
              size="small"
              placeholder="Pay Deatils(Title)"
              sx={{ width: { md: "60%" }, paddingRight: 1 }}
            />
            <TextField
              // value={}
              // onChange={}
              size="small"
              placeholder="Amount"
              sx={{ width: { md: "40%" } }}
            />
          </Grid>

          <Grid mt={0} item xs={6}>
          <IconButton>
              <CloseIcon />
            </IconButton>
          </Grid>

          <Grid mt={0} item xs={6}>
            <Button startIcon={<AddIcon />} variant="text" color="primary">
              Add New Allowance
            </Button>
          </Grid>
          
        </Grid>
      </Box>
    </div>
  );
};

export default CalculateYourSalary;
