import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Text from "modules/component/text";
import ListText from "modules/component/listText";

const AboutPage = () => {
  return (
    <Grid style={{ padding: "10px", margin: "50px" }}>
      <Grid>
        <Text fontSize="22px" margin="20px 0px" color="#ffc107">
          Education
        </Text>
        <Text>
          Caucasus University -
          <span>Information Tecnology (2018-2022 expected)</span>
        </Text>
      </Grid>
      <Grid>
        <Text fontSize="22px" margin="40px 0px 20px 0px" color="#ffc107">
          Language
        </Text>
        <Text margin="10px 0px">
          English -<span>Fluent</span>
        </Text>
        <Text>
          Georgia -<span>Native speaker</span>
        </Text>
      </Grid>
      <Grid>
        <Text fontSize="22px" margin="40px 0px 20px 0px" color="#ffc107">
          Personal Skills
        </Text>
        <Text margin="10px 0px">
          Attention to detail, organisational skill, willingnless to learn,
          responsible, punctual
        </Text>
      </Grid>
      <Grid>
        <Text fontSize="22px" margin="40px 0px 20px 0px" color="#ffc107">
          Courses
        </Text>
        <ListText listStyleType="revert" color="gray" fontSize="14px">
          Scrimba React framework course
        </ListText>
        <ListText listStyleType="revert" color="gray" fontSize="14px">
          FreeCodeCamp - Responsive Web-Design
        </ListText>
        <ListText listStyleType="revert" color="gray" fontSize="14px">
          FreeCodeCamp - Front-End Libraries
        </ListText>
        <ListText listStyleType="revert" color="gray" fontSize="14px">
          PluralSight - React Courses
        </ListText>
      </Grid>
      <Grid>
        <Text fontSize="22px" margin="40px 0px 20px 0px" color="#ffc107">
          Contact
        </Text>
        <Grid>
          <Text>Phone - 558 97 90 30</Text>
        </Grid>
        <Grid>
          <Text fontSize="13px" widthSm="100px">
            Mail@ - salomemumladze775@gmail.com
          </Text>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
