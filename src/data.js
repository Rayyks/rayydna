import Todo from "./assets/img/portfolio.png";
import Portfolio from "./assets/img/portfolio.png";

// in progress projects

const ProjectsData = [
  {
    id: "Portfolio",
    img: Portfolio,
    name: "Portfolio Web",
    stack: ["< React.js />", "< SCSS />", "< Tailwindcss/>", "</>"],
    live: "#",
    source: "https://github.com/Rayyks/mainmain",
    description:
      "This is my first project, a portfolio web that can explain how far i've been learning",
  },
  {
    id: "To Do List",
    img: Todo,
    name: "E-Shop Websites (in progres)",
    stack: ["< React.js />   ", "< SCSS />"],
    live: "#",
    source: "https://github.com/Rayyks/E-Shop",
    description:
      "This is my progres on react.js, im trying to making a shopping website with user can add, create, and delete their cart",
  },
];

export default { ProjectsData };
