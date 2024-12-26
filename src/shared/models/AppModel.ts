import { useState } from "react";
import { createContainer } from "unstated-next";

const useAppContainer = () => {
  const [loading, setLoading] = useState(true);
  const [locked, setLocked] = useState(false);

  const ratio = window.screen.width / 750;

  return {
    ratio,
    loading,
    locked: loading || locked,
    setLoading,
    setLocked,
  };
};

export const AppModel = createContainer(useAppContainer);
export const useAppModel = AppModel.useContainer;
