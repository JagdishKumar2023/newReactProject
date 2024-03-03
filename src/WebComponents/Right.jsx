import { Box } from "@mui/material";
import React from "react";

export const Right = () => {
  return (
    <Box
      bgcolor="yellow"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};
