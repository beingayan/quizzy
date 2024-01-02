import { AppBar, Typography } from "@mui/material";
import React from "react";

const TopBar = () => {
  return (

    <AppBar position="static">
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, textAlign: "center", lineHeight: "50px" }}
        height={50}
      >
        Quizzy Mania
        
      </Typography>
    </AppBar>
  );
};

export default TopBar;
