import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Link,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import Text from "modules/component/text";
import GitHubIcon from "@material-ui/icons/GitHub";
import { yellow, gray } from "modules/component/color/color";

const useStyles = makeStyles((theme) => ({
  container: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
    margin: "auto",
  },
  root: {
    width: 310,
    background: "none",
    fontFamily: "Poppins, sans-serif",
    // border: "1px solid #ffc107",
    boxShadow: "4px 6px 9px -5px black",
    [theme.breakpoints.down("sm")]: {
      width: "270px",
    },
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    color: "white",
    fontSize: 16,
    padding: 0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  content: {
    padding: 0,
    fontFamily: "Poppins, sans-serif",
    color: gray,
  },
  action: {
    padding: "0px 10px",
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    color: yellow,
  },
  demo: {
    color: yellow,
  },
}));

const ProjectList = (props) => {
  const classes = useStyles();

  return (
    <Link href={props.href} target="_blank" className={classes.container}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={props.image} />
        <CardActions disableSpacing className={classes.action}>
          <CardHeader className={classes.title} title={props.title} />
          <div>
            <IconButton>
              <Link href={props.github} target="_blank">
                <GitHubIcon className={classes.icon} />
              </Link>
            </IconButton>
            <Link href={props.demo} target="_blank" className={classes.demo}>
              Demo
            </Link>
          </div>
        </CardActions>
        <CardContent>
          <Text color="gray" fontSize="14px">
            {props.desc}
          </Text>
        </CardContent>
      </Card>
    </Link>
  );
};
export default ProjectList;
