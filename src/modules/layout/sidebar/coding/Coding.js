import React from "react";
import {  Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Text from "modules/component/text";
import ListText from "modules/component/listText";
import DoneIcon from "@material-ui/icons/Done";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import { yellow, white, gray } from "modules/component/color/color";

const coding = [
  { code: "html" },
  { code: "css" },
  { code: "javaScript" },
  { code: "React js" },
  { code: "ES6" },
];
const knowledge = [
  { know: "Bootstrap, tailwindcss" },
  { know: "Mterial-UI" },
  { know: "SASS, SCSS" },
  { know: "GIT knowlege" },
];

const Coding = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.container}>
        <div className={classes.border}>
          <Text color="white" fontSize="18px">
            Coding
          </Text>
        </div>
        <div>
          {coding.map((code) => (
            <ListText listStyleType="revert" color="gray" fontSize="14px">
              {code.code}
            </ListText>
          ))}
        </div>
      </Grid>
      <Grid>
        <div className={classes.border}>
          <Text color="white" fontSize="18px">
            Knowledge
          </Text>
        </div>
        {knowledge.map((know) => (
          <Grid className={classes.contain}>
            <DoneIcon className={classes.icon} />
            <ListText
              listStyleType="none"
              color="gray"
              fontSize="14px"
              margin="7px 5px"
            >
              {know.know}
            </ListText>
          </Grid>
        ))}
      </Grid>
      <Grid className={classes.container}>
        <div className={classes.border}>
          <Text color="white" fontSize="18px">
            Contact
          </Text>
        </div>
        <Grid className={classes.root}>
          <PhoneIcon className={classes.icon} />
          <Text>558 97 90 30</Text>
        </Grid>
        <Grid className={classes.root}>
          <MailIcon className={classes.icon} />
          <Text fontSize="13px" widthSm="100px">
            salomemumladze775@gmail.com
          </Text>
        </Grid>
      </Grid>
    </div>
  );
};

export default Coding;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "30px 0px",
  },
  contain: {
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderBottom: "1px solid #ffc107",
    paddingBottom: "10px",
  },
  icon: {
    color: yellow,
    width: "15px",
    height: "12px",
  },
  root: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0px",
  },
}));
