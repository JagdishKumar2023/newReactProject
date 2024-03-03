import styled from "@emotion/styled";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

export const Navbar = () => {
  return (
    <AppBar position="stick">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search.." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge>
            <Notifications />
          </Badge>
        </Icons>
      </StyledToolBar>
    </AppBar>
  );
};
