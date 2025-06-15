import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import react from "../assets/svg/skills/react.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import node from "../assets/svg/skills/nodejs.svg";
import express from "../assets/svg/skills/express-js.svg";

const skillsMap = {
  html,
  css,
  javascript,
  react,
  bootstrap,
  mongodb: mongoDB,
  tailwind,
  "node js": node,
  express,
};

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  return skillsMap[skillID];
};
