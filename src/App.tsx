import React from "react";
import "./App.css";
import Fiber from "./fiber";
import { threejs } from "./lib/three";

function App() {
  // React.useEffect(() => {
  //   threejs("canvas");
  // }, []);
  return (
    <Fiber />
    // <canvas id="canvas"></canvas>
  );
}

export default App;
