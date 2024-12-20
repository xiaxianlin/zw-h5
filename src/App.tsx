import { useEffect, useState } from "react";
import { Loading } from "./shared/components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoaded = () => setLoading(false);
    window.addEventListener("load", handleLoaded);
    return () => {
      window.removeEventListener("load", handleLoaded);
    };
  }, []);

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container">
      <img width="100%" src="./images/bg.jpg" />
    </div>
  );
};

export default App;
