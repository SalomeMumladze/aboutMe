import ProjectList from "./ProjectList";
import React from "react";
import easyLoan from "assets/easyLoan.JPG";
import fanebi from "assets/fanebi.JPG";
import citrus from "assets/citrus.JPG";
import pswgen from "assets/pswgen.JPG";
import quiz from "assets/quiz.JPG";
import ecommerce from "assets/ecommerce.JPG";

const project = () => {
  const projects = [
    {
      id: 1,
      image: easyLoan,
      href: "https://easyloansite.netlify.app/",
      title: "easyloan.com",
      github: "https://easyloansite.netlify.app/",
      demo: "https://easyloansite.netlify.app/",
      desc: "EasyLoan app built using HTML, Bootstrap, jQuery, JS",
    },
    {
      id: 2,
      image: fanebi,
      title: "Fanebi.com",
      href: "https://fanebi.netlify.app/",
      github: "https://github.com/salome775/Fanebi.com",
      demo: "https://fanebi.netlify.app/",
      desc: "Fanebi.com app built using HTML, Tailwind-css, JS",
    },
    {
      id: 3,
      image: citrus,
      title: "Citrus.ge",
      href: "https://citrusge.netlify.app/",
      github: "https://github.com/salome775/Citrus",
      demo: "https://citrusge.netlify.app/",
      desc: "Citrus.ge app built using HTML, CSS, SCSS, JS",
    },

    {
      id: 4,
      image: pswgen,
      title: "generator",
      href: "https://passworgenerator.netlify.app/",
      github: "https://github.com/salome775/password_generator",
      demo: "https://passworgenerator.netlify.app/",
      desc: "password generator app built using react framework (material-UI)",
    },

    {
      id: 5,
      image: quiz,
      title: "quiz app",
      href: "https://quizapp-task.netlify.app/",
      github: "https://github.com/salome775/Quiz-app",
      demo: "https://quizapp-task.netlify.app/",
      desc: "Quiz app built using Open Trivia public API and react framework (material-UI)",
    },

    {
      id: 6,
      image: ecommerce,
      title: "E-commerce.ge",
      github: "https://github.com/salome775/E-commerce",
      demo: "https://e-commerce-k64brvgsz-salome775.vercel.app/",
      desc: "E-commerce app built using react framework and material-UI",
    },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gridGap: "2rem",
        alignItems: "flex-start",
      }}
    >
      {projects.map((project) => (
        <ProjectList
          href={project.href}
          image={project.image}
          title={project.title}
          github={project.github}
          demo={project.demo}
          desc={project.desc}
        />
      ))}
    </div>
  );
};

export default project;
