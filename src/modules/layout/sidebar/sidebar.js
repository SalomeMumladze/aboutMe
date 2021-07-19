import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Link } from "@material-ui/core";
import Avatar from "./avatar/Avatar";
import color from "modules/component/color/color";
import About from "./about/About";
import Coding from "./coding/Coding";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Grid item spacing={3} className={classes.container}>
      <Grid className={classes.header}>
        <Avatar />
      </Grid>
      <Grid className={classes.box}>
        <About />
        <Coding />
      </Grid>
      <Grid className={classes.social}>
        <Link
          className={classes.icon}
          href="https://github.com/salome775?tab=repositories"
          target="_blank"
        >
          <GitHubIcon />
        </Link>
        <Link
          className={classes.icon}
          href="https://www.linkedin.com/in/salome-mumladze-40b763194/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link className={classes.icon}>
          <EmailIcon />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Sidebar;

const useStyles = makeStyles((theme) => ({
  container: {
    width: "290px",
    height: "auto",
    zIndex: 999,
    boxShadow: "0 3px 8px 0 rgb(15 15 20 / 90%)",
    transition: ".55s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      width: "190px",
    },
  },
  border: {
    borderBottom: "1px solid #ffc107",
    paddingBottom: "10px",
  },
  header: {
    padding: 20,
    background:
      "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
  },
  box: {
    padding: "0px 30px",
  },
  cv: {
    display: "flex",
    alignItems: "center",
    padding: "20px 5px",
    color: color.gray,
    textDecoration: "none",
    fontWeight: 600,
    "&:hover": {
      color: "#fafafc",
      textShadow: " 0 0 3px rgb(250 250 252 / 40%)",
      transition: ".55s ease-in-out",
    },
  },
  icon: {
    color: color.gray,
    width: "17px",
    margin: "0px 5px",
    "&:hover": {
      color: "#fafafc",
      textShadow: " 0 0 3px rgb(250 250 252 / 40%)",
      transition: ".55s ease-in-out",
    },
  },
  social: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50px",
    width: "100%",
    background:
      "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
    color: color.gray,
  },
}));
