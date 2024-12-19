import "./App.css";
import "animate.css";
import { animated, useSpring } from "@react-spring/web";

const App = () => {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });
  return (
    <div className="content">
      <h1 className="animate__animated animate__bounce">Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <animated.div
        style={{
          width: 80,
          height: 80,
          background: "#ff6d6d",
          borderRadius: 8,
          ...springs,
        }}
      />
    </div>
  );
};

export default App;
