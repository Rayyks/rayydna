import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div>
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
          </div>
        )}
      </div>
    </>
  );
}

export default App;
