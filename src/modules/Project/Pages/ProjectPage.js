import React from "react";
import Project from "./components/project";
import Grid from "@material-ui/core/Grid";
import Text from "modules/component/text";

const ProjectPage = () => {
  return (
    <Grid style={{ padding: "10px" ,width:"71%" }}>
      <Text fontSize="30px" padding="50px 0px">
        Projects
      </Text>
        <Project />
    </Grid>
  );
};

export default ProjectPage;
