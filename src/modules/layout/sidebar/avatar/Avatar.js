import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid, Box, IconButton } from "@material-ui/core";
import myAvatar from "assets/me.jpg";
import color from "modules/component/color/color";
import Text from "modules/component/text";

const Avatar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.avatar}>
        <img src={myAvatar} className={classes.img} />
        <div className={classes.active} />
      </Grid>
      <Text color="white" textAlign="center">
        Salome Mumladze
      </Text>
      <Text color="gray" fontSize="14px" textAlign="center">
        Front-end developer
      </Text>
    </>
  );
};

export default Avatar;

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "90px",
    width: "90px",
    margin: "0 auto",
    borderRadius: "50%",
    position: "relative",
    marginBottom: "15px",
  },
  img: {
    width: "100%",
    borderRadius: "50%",
    height: "100%",
    objectFit: "cover",
  },
  active: {
    position: "absolute",
    bottom: "3px",
    right: "5px",
    height: "15px",
    width: "15px",
    background: color.yellow,
    borderRadius: "50%",
    zIndex: 0,
    transition: ".4s ease-in-out",
  },
}));
