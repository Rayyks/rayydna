import SharedLayout from "./components/Navbar/SharedLayout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Project/Projects";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

// alert(
//   "I recommend open this website from your PC or Laptop, cus the mobile view is on develop :), sorry✌"
// );

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <AnimatedCursor />
      <div className="App">
        <AnimatedCursor
          innerSize={17}
          outerSize={10}
          color="0, 200, 221"
          outerAlpha={0.5}
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
      </div>
    </>
  );
}

export default App;
