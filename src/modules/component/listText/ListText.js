import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { yellow, white, gray } from "../color/color";

const ListText = (props) => {
  const classes = useStyles({
    color: props.color,
    listStyleType: props.listStyleType,
    margin: props.margin,
    fontSize: props.fontSize,
    lineHeight: props.lineHeight,
    fontWeight: props.fontWeight,
    textDecoration: props.textDecoration,
    textAlign: props.textAlign,
    opacity: props.opacity,
    height: props.height,
    fontSizeMd: props.fontSizeMd,
    fontSizeSm: props.fontSizeSm,
    lineHeightSm: props.lineHeightSm,
    marginSm: props.marginSm,
  });
  const { children, ...rest } = props;
  return (
    <>
      <li className={classes.root} {...rest}>
        {children}
      </li>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  line: {},
  root: {
    fontFamily: "Poppins, sans-serif",
    textTransform: "none",
    listStyleType: (props) => props.listStyleType || "none",
    height: (props) => props.height,
    color: (props) => props.color || white || gray,
    opacity: (props) => props.opacity,
    textAlign: (props) => props.textAlign || "none",
    fontSize: (props) => props.fontSize || "16px",
    lineHeight: (props) => props.lineHeight || "16px",
    fontWeight: (props) => props.fontWeight || "300px",
    margin: (props) => props.margin || "10px 0px",
    [theme.breakpoints.down("sm")]: {
      margin: (props) => props.margin,
      fontSize: (props) => props.fontSizeSm,
      lineHeight: (props) => props.lineHeightSm,
      margin: (props) => props.marginSm,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: (props) => props.fontSizeLg,
    },
    "&::marker": {
      color: yellow,
    },
  },
}));

export default ListText;
