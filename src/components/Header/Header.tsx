import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";

const Header: React.FC = () => (
  <AppBar position="relative">
    <Toolbar>
      <AccessibilityNewIcon />
      <Typography variant="h6" color="inherit" noWrap>
        Character Manager
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
