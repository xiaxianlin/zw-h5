import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const useAppContainer = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(true);
  const [visible, setVisible] = useState(false);

  const ratio = window.screen.width / 750;

  useEffect(() => {
    const handler = () => {
      setLoaded(false);
    };
    window.addEventListener("load", handler);
    return () => {
      window.removeEventListener("load", handler);
    };
  });

  return {
    ratio,
    loading: loaded || loading,
    visible,
    setLoading,
    setVisible,
  };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
