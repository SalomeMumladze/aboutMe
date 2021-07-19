import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography, Grid } from "@material-ui/core";
import color from "modules/component/color/color";
import Text from "modules/component/text";

const About = () => {
  const classes = useStyles();
  return (
    <Grid>
      <ul className={classes.aboutContainer}>
        <li className={classes.about}>
          <Text color="white" fontSize="14px">
            Residence:
          </Text>
          <Text color="gray">Georgia</Text>
        </li>
        <li className={classes.about}>
          <Text color="white" fontSize="14px">
            City:
          </Text>
          <Text color="gray">Tbilisi</Text>
        </li>
        <li className={classes.about}>
          <Text color="white" fontSize="14px">
            Age:
          </Text>
          <Text color="gray">21</Text>
        </li>
      </ul>
    </Grid>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  about: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 0px",
  },
  aboutContainer: {
    padding: "0px",
  },
}));
