import React from "react";
import { Button, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import ButtonNavbarCollapse from "./ButtonNavbarCollapse";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "100%",
    background: "transparent",
  },
});

const NavbarCollapse = ({ classes }) => (
  <div className={classes.root}>
    <ButtonNavbarCollapse>
      <MenuItem>Login</MenuItem>
      <MenuItem>Signup</MenuItem>
    </ButtonNavbarCollapse>
    <div className={classes.buttonBar} id="appbar-collapse">
      <Button color="inherit">Login</Button>
      <Button color="inherit">Signup</Button>
    </div>
  </div>
);

export default withStyles(styles)(NavbarCollapse);
