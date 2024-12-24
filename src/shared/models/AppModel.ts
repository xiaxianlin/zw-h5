import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const useAppContainer = () => {
  const [loading, setLoading] = useState(true);

  const ratio = window.screen.width / 750;

  useEffect(() => {
    setLoading(false);
  }, []);

  return { ratio, loading };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
