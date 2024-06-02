import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

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
    }}
    >
      <Grid container spacing={0}>

        <Grid item xs={12}>
        <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "20px" }}
            >
              Your Salary
            </Typography>
        </Grid>
        
        <Grid item xs={12}>
        <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "20px" }}
            >
              Your Salary
            </Typography>
        </Grid>

      </Grid>
    </Box>
  )
}

export default YourSalary