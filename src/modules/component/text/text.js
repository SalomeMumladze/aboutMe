import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { yellow, gray, white } from "modules/component/color/color";

const Text = (props) => {
  const classes = useStyles({
    color: props.color,
    margin: props.margin,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    textDecoration: props.textDecoration,
    textAlign: props.textAlign,
    height: props.height,
    widthSm: props.widthSm,
    marginSm: props.marginSm,
    hoverColor: props.hoverColor,
    ShadowHover: props.ShadowHover,
    padding: props.padding,
    width: props.width,
  });
  const { children, ...rest } = props;
  return (
    <Typography className={classes.root} {...rest}>
      {children}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: (props) => props.width,
    padding: (props) => props.padding,
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
    height: (props) => props.height,
    color: (props) => props.color || gray || yellow || white,
    textAlign: (props) => props.textAlign || "none",
    fontSize: (props) => props.fontSize || "16px",
    fontWeight: (props) => props.fontWeight || "300",
    textDecoration: (props) => props.textDecoration || "none",
    margin: (props) => props.margin,
    [theme.breakpoints.down("sm")]: {
      margin: (props) => props.margin,
      width: (props) => props.widthSm,
      margin: (props) => props.marginSm,
    },
    "&:hover": {
      color: (props) => props.hoverColor,
      textShadow: (props) => props.ShadowHover,
      transition: ".5s ease-in-out",
    },
  },
}));

export default Text;
