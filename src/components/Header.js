import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../Avatar.svg";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Apps, AssignmentInd, ContactMail, Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Footer from "./Footer";


const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    cursor: "pointer"
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/projects" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div">
      <Avatar className={classes.avatar} src={avatar} alt="Hari Anantharaman" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className={classes.typedContainer} onClick={() => setOpen(!open)}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Hari Anantharaman" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Hari Anantharaman"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "MS CS @ CU Boulder",
            "Full-Stack Engineer",
            "harianantharaman.eth",
          ]}
          typeSpeed={40}
          backSpeed={40}
          loop
        />
      </Typography>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </Box>
  );
};

export default Header;
