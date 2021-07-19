import React from "react";
import { Typography, Grid, IconButton, Drawer } from "@material-ui/core";
import color from "modules/component/color/color";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Text from "modules/component/text";
import { Link } from "react-router-dom";

const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      <Grid className={classes.iconContainer}>
        <MenuIcon
          className={classes.icon}
          aria-label="open drawer"
          onClick={handleDrawerOpen}
        />
      </Grid>
      <Typography className={classes.name}>menu</Typography>
      <Drawer
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.root,
        }}
      >
        <div className={classes.iconClose}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </div>
        <Grid>
          <ul class={classes.contain}>
            {menu.map((nav, i) => (
              <li key={i} style={{ margin: "20px 0px" }}>
                <Link to={nav.link} className={classes.link}>
                  <Text
                    color="darkGray"
                    fontWeight="500"
                    hoverColor={color.milkColor}
                    ShadowHover="0 0 3px rgb(250 250 252 / 40%)"
                  >
                    {nav.nav}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      </Drawer>
    </div>
  );
};

const menu = [
  { nav: "About Me", link: "/" },
  { nav: "Project", link: "/project" },
  { nav: "experience", link: "/experience" },
];

export default Menu;

const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    right: 0,
    top: 0,
    width: "80px",
    height: "100%",
    zIndex: 999,
    boxShadow: "0 3px 8px 0 rgb(15 15 20 / 90%)",
    transition: ".55s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  icon: {
    width: "30px",
    height: "30px",
    color: color.gray,
    "&:hover": {
      color: "#fafafc",
      textShadow: " 0 0 3px rgb(250 250 252 / 40%)",
      transition: ".55s ease-in-out",
    },
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
    height: "65px",
  },
  iconClose: {
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(159deg,rgba(37,37,50,.98) 0%,rgba(35,35,45,.98) 100%)",
    height: "65px",
  },
  name: {
    color: color.gray,
    transform: "rotate(90deg)",
    textTransform: "uppercase",
    position: "relative",
    top: "70px",
    fontWeight: 500,
    letterSpacing: 7,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  root: {
    background: color.darkPurple,
    width: "200px",
    overflow: "hidden",
    boxShadow: "0 3px 8px 0 rgb(15 15 20 / 90%);",
  },
  contain: {
    display: "grid",
    alignItems: "center",
    height: "100%",
    listStyle: "none",
    marginTop: 50,
  },
  link: {
    textDecoration: "none",
  },
}));
