import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Text from "modules/component/text";

const ExperiencePage = () => {
  return (
    <Grid style={{ padding: "10px" }}>
      <Text fontSize="30px" padding="50px 0px" color="#ffc107">
        Helix Nebula Capital
      </Text>
      <Text color="white">Position - Frond-end developer</Text>

      <Text color="white">
        Technologies - Html / css / sass / tailwind-css / javascript / Reactjs
      </Text>
      <Text width="600px" widthSm="auto" margin="20px 0px">
        I was an intern in this company where I learned to React framework, I
        participated in a new project such as dataninja where I was arranging
        the pages of the site, in addition to that I was responsible for
        assembling the markup of several sites such as fanebi.com and citrus.ge
      </Text>
    </Grid>
  );
};

export default ExperiencePage;
