import Todo from "./assets/img/portfolio.png";
import Portfolio from "./assets/img/portfolio.png";

// in progress projects

const ProjectsData = [
  {
    id: "Portfolio",
    img: Portfolio,
    name: "Portfolio Web",
    stack: ["< React.js /> ", "< SCSS /> ", "< Tailwindcss/> ", "<Bootstrap/>"],
    live: "#",
    source: "https://github.com/Rayyks/rayydna",
    description:
      "This is my first project, a portfolio web that can explain how far i've been learning",
  },
  {
    id: "Todo",
    img: Todo,
    name: "To Do List (in progres)",
    stack: ["< React.js /> ", "< SCSS />"],
    live: "#",
    source: "https://github.com/Rayyks/E-Shop",
    description:
      "This is my second project, im making a To Do List that users can create, read, update and delete(CRUD) their To Do List",
  },
];

export default { ProjectsData };
