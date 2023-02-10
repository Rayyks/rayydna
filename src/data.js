import Page from "./assets/portfolioImages/e-shop.png";
import Todo from "./assets/portfolioImages/rayy-dev.png";

// in progress projects

const ProjectsData = [
  {
    id: "Portfolio",
    img: Todo,
    name: "Portfolio Web",
    stack: ["< React.js />  ", "< SCSS />"],
    live: "#",
    source: "https://github.com/Rayyks/mainmain",
    description:
      "Responsive portfolio web with animation. That makes the web looks more fun and enjoyable",
  },
  {
    id: "E-SHOP",
    img: Page,
    name: "E-Shop Websites (in progres)",
    stack: ["< React.js />   ", "< SCSS />"],
    live: "#",
    source: "https://github.com/Rayyks/E-Shop",
    description:
      "This is my progres on react.js, im trying to making a shopping website with user can add, create, and delete their cart",
  },
];

export default { ProjectsData };
