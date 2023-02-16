import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      <AnimatedCursor
        innerSize={17}
        outerSize={13}
        color="193, 11, 111"
        outerAlpha={0.7}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}

export default App;
