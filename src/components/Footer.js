import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction href={"https://www.linkedin.com/in/hari-anantharaman-1908/"} target="_blank" icon={<LinkedIn />} className={classes.root} />
      <BottomNavigationAction href={"https://github.com/harian19"} target="_blank" icon={<GitHub />} className={classes.root} />
      <BottomNavigationAction href={"https://www.instagram.com/hari.anantharaman/"} target="_blank" icon={<Instagram />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
